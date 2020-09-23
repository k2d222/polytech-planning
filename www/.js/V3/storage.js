import { Settings } from './settings.js';
import { Proxy as P } from './proxy.js'

async function init() {

  if (storage.has(P.storage.VERSION) && storage.get(P.storage.VERSION) !== P.STORAGE_VERSION) {
    alert('L\'appli à été mise à jour !');
    storage.clear();
  }

  // show welcome dialog (disabled feature for now...)
  if (!storage.has(P.storage.ACKNOWLEDGED)) {
    // P.$ABOUT_CONTAINER.removeClass('hidden');
    storage.set(P.storage.ACKNOWLEDGED, true);
  }

  if (!storage.has(P.storage.VERSION)) {
    storage.clear()
    await Settings.show({ cancelDisabled: true });
    storage.set(P.storage.VERSION, P.STORAGE_VERSION);
    storage.set('root', true); // TODO
  }
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
