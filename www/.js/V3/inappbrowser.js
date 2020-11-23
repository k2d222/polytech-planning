import { Proxy as P } from './proxy.js'
import { Notification } from './notification.js'

var loaded = false;
var ref;
var webviewReferences = []; //cordova's inappbrowser has weird behaviour when it comes to closing / opening webviews...
let currentUrl = null;

async function executeScript(textScript) {
  let connected = await promiseExecute(P.com.FUNCTION_IS_CONNECTED);

  if (!connected && loaded) {
    console.warn('InAppBrowser is disconnected, reloading');
    Notification.show('restart'); // TODO rename to reload
    await reload();
    Notification.hide('restart');
  }

  let res = await promiseExecute(textScript);

  if (typeof res === 'object' && res.packetified === true) {
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

function promiseExecute(textScript) {
  return new Promise(function(resolve, reject) {
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

function fetchScript(url) {
  return new Promise(function(resolve, reject) {
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

function load(urlKey) {
  return new Promise(function(resolve, reject) {
    loaded = false;
    if (!urlKey in P.url) reject(new Error('url key not recognized'));
    currentUrl = urlKey;
    webviewReferences.push(cordova.InAppBrowser.open(P.url[urlKey], '_blank', P.INAPPBROWSER_SETTINGS));
    ref = webviewReferences[webviewReferences.length - 1];
    ref.addEventListener('loadstop', function() {
      console.log('inappbrower loaded');
      loaded = true;
      resolve();
    });
    window.ref = ref; // TODO remove debugging purposes
  });
}

async function injectScript() {
  var injection = fetchScript(P.script.INJECTION);
  var jquery = fetchScript(P.script.JQUERY);

  const jqueryText = await jquery;
  await promiseExecute(jqueryText);
  const injectionText = await injection;
  await promiseExecute(injectionText);
}

export var InappBrowser = (function() {

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
