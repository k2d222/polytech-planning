import { Proxy as P } from './proxy.js'
import { Notification } from './notification.js'

var loaded = false;
var ref;
var webviewReferences = []; //cordova's inappbrowser has weird behaviour when it comes to closing / opening webviews...
let currentUrl = null;

function executeScript(textScript) {
  return promiseExecute(P.com.FUNCTION_IS_CONNECTED)
  .then(function(res) { // is InAppBrowser disconnected ?
    if(!res && loaded) {
      console.warn('InAppBrowser is disconnected, reloading');
      Notification.show('restart');
      return reload()
      .then(function() {
        Notification.hide('restart');
      })
    }
  })
  .then(function() {
    return promiseExecute(textScript)
  })
  .then(function(res) {
    if(typeof res === 'object' && res.packetified === true) {
      return packetify();
    }
    else return res;
  })
}

function packetify() {
  let packets = '';

  function getNextPacket() {
    return promiseExecute('getPacket()')
    .then(function(res) {
      if(res === false) return;
      packets += res;
      return getNextPacket();
    });
  }

  return getNextPacket()
  .then(function() {
    const obj = JSON.parse(packets);
    console.log('resolved packet :', obj);
    return obj;
  });
}

function promiseExecute(textScript) {
  return new Promise(function(resolve, reject) {
    if(!loaded) reject( new Error(P.err.WEBVIEW_NOT_LOADED) );
    else {
      ref.executeScript({code: textScript}, function(result) {
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

function reload() {
  console.log('reloading InAppBrowser');
  // ref.close();
  // ref = null;
  return load(currentUrl)
  .then(function() {
    return injectScript();
  })
  .then(function() {
    console.log('reload done.');
  });
}

function load(urlKey) {
  return new Promise(function(resolve, reject) {
    loaded = false;
    if(!urlKey in P.url) reject(new Error('url key not recognized'));
    currentUrl = urlKey;
    webviewReferences.push( cordova.InAppBrowser.open(P.url[urlKey], '_blank', P.INAPPBROWSER_SETTINGS) );
    ref = webviewReferences[ webviewReferences.length-1 ];
    ref.addEventListener('loadstop', function() {
      loaded = true;
      resolve();
    });
    window.ref = ref; // TODO remove debugging purposes
  });
}

function injectScript() {
  var injection = fetchScript(P.script.INJECTION);
  var jquery    = fetchScript(P.script.JQUERY);

  return jquery.then(function(jqueryText) {
    return promiseExecute(jqueryText);
  })
  .then(function() {
    return injection;
  })
  .then(function(injectionText) {
    return promiseExecute(injectionText);
  });
}

export var InappBrowser = (function () {

  return {
    reload:reload,
    load:load,
    injectScript:injectScript,
    eval:executeScript,
    getReference:function () {
      return ref;
    }
  }

})();
