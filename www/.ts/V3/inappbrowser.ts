import { Proxy as P } from './proxy'
import { Notification } from './notification'

let loaded = false;
let ref: InAppBrowser;
const webviewReferences: InAppBrowser[] = []; //cordova's inappbrowser has weird behaviour when it comes to closing / opening webviews...
let currentUrl: keyof typeof P.url;

async function executeScript(textScript: string) {
  const connected = await promiseExecute(P.com.FUNCTION_IS_CONNECTED);

  if (!connected && loaded) {
    console.warn('InAppBrowser is disconnected, reloading');
    Notification.show('restart'); // TODO rename to reload
    await reload();
    Notification.hide('restart');
  }

  const res = await promiseExecute(textScript);

  if (typeof res === 'object' && 'packetified' in res && res.packetified === true) {
    return unpack();
  }
  else return res;
}

async function unpack() {
  let packets = '';
  let packet;

  do {
    packet = await promiseExecute('getPacket()');
    if (packet) packets += packet;
  } while (packet);

  let obj;
  try {
    obj = JSON.parse(packets);
  } catch (e) {
    console.warn('failed to resolve packets:', packets);
    console.error(e);
    throw new Error(P.err.CALENDAR_ERROR);
  }
  console.log('resolved packet :', obj);
  return obj;
}

function promiseExecute(textScript: string) {
  return new Promise<any>(function(resolve, reject) {
    if (!loaded) reject(new Error(P.err.WEBVIEW_NOT_LOADED));
    else {
      ref.executeScript({ code: textScript }, function(result) {
        resolve(result[0]);
      });
      setTimeout(function() {
        reject(new Error('timeout err'));
      }, P.INAPPBROWSER_EXECUTE_TIMEOUT);
    }
  });
}

function fetchScript(url: string) {
  return new Promise<string>(function(resolve, reject) {
    $.ajax({
      url: url,
      dataType: "text",
      success: resolve,
      error: reject
    });
  });
}

async function reload() {
  console.log('reloading InAppBrowser');
  // ref.close();
  // ref = null;
  await load(currentUrl);
  await injectScript();
  console.log('reload done.');
}

function keyIsValid(urlKey: string): urlKey is keyof typeof P.url {
  return urlKey in P.url;
}

function load(urlKey: string) {
  return new Promise<void>(function(resolve, reject) {
    loaded = false;
    if (keyIsValid(urlKey)) {
      currentUrl = urlKey;
      console.log(cordova, (window as any).cordova);
      webviewReferences.push(cordova.InAppBrowser.open(P.url[urlKey], '_blank', P.INAPPBROWSER_SETTINGS));
      ref = webviewReferences[webviewReferences.length - 1];
      ref.addEventListener('loadstop', function() {
        console.log('inappbrower loaded');
        loaded = true;
        resolve();
      });
    }
    else reject(new Error('url key not recognized'));
  });
}

async function injectScript() {
  const injection = fetchScript(P.script.INJECTION);
  const jquery = fetchScript(P.script.JQUERY);

  const jqueryText = await jquery;
  await promiseExecute(jqueryText);
  const injectionText = await injection;
  await promiseExecute(injectionText);
}

export const InappBrowser = (function() {

  return {
    reload: reload,
    load: load,
    injectScript: injectScript,
    eval: executeScript,
    getReference: function() {
      return ref;
    }
  }

})();
