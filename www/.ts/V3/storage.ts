import { Settings } from './settings';
import { Proxy as P } from './proxy'

async function init() {

  if (Storage.has(P.storage.VERSION) && Storage.get(P.storage.VERSION) !== P.STORAGE_VERSION) {
    alert('L\'appli à été mise à jour !');
    Storage.clear();
  }

  // show welcome dialog (disabled feature for now...)
  if (!Storage.has(P.storage.ACKNOWLEDGED)) {
    // P.$ABOUT_CONTAINER.removeClass('hidden');
    Storage.set(P.storage.ACKNOWLEDGED, '1');
  }

  if (!Storage.has(P.storage.VERSION)) {
    Storage.clear()
    await Settings.show({ cancelDisabled: true });
    Storage.set(P.storage.VERSION, P.STORAGE_VERSION);
    Storage.set('root', '1'); // TODO
  }
}

export const Storage = {
  init,
  set: function(key: string, val: string) {
    window.localStorage.setItem(key, val);
  },
  get: function(key: string): string {
    return window.localStorage[key];
  },
  clear: function() {
    window.localStorage.clear();
  },
  has: function(key: string): boolean {
    return key in window.localStorage;
  },
  get length(): number {
    return window.localStorage.length;
  }
};
