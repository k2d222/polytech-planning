import { Settings } from './settings.js';
import { Proxy as P } from './proxy.js'

function init() {
  return new Promise(function(resolve) {
    if (storage.has(P.storage.VERSION) && storage.get(P.storage.VERSION) !== P.STORAGE_VERSION) {
      alert('L\'appli à été mise à jour !')
      storage.clear()
    }

    if (!storage.has(P.storage.VERSION)) {
      storage.clear()
      Settings.show({ cancelDisabled: true })
        .then(function() {
          storage.set(P.storage.VERSION, P.STORAGE_VERSION);
          storage.set('root', true); // TODO
          resolve();
        });
    }
    else resolve();
  });
}

var storage = {
  init: init,
  set: function(key, val) {
    window.localStorage.setItem(key, val);
  },
  get: function(key) {
    return window.localStorage[key];
  },
  clear: function() {
    window.localStorage.clear();
  },
  has: function(key) {
    return key in window.localStorage;
  },
  get length() {
    return window.localStorage.length;
  }
};



export var Storage = (function() {

  return storage;

})();
