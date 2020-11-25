import { Proxy as P } from './proxy'

import { Storage } from './storage'
import { Filter } from './filter'
import { Calendar } from './calendar'
import { Network } from './network'
import { InappBrowser } from './inappbrowser'
import { Day } from './day'
import { Theme } from './theme'
import { Notification } from './notification'

import './events'

async function onDeviceReady() {
  try {
    Calendar.init();
    await Storage.init();
    Theme.set(Storage.get(P.storage.THEME));
    await Filter.loadFilter(Storage.get(P.storage.GRADE));
    Calendar.drawFromCache(Day.today());
    await startInappBrowser();
    await Calendar.draw(Day.today());
  }
  catch (err) {
    console.error('something bad happened !');
    console.error(err);
    Notification.show('majorError');
  }
}

async function startInappBrowser() {
  await Network.whenOnline()
  await InappBrowser.load(Storage.get(P.storage.GRADE))
  await InappBrowser.injectScript()
}

function init() {
  document.addEventListener('deviceready', onDeviceReady, false);
}

function restartInappBrowser() {
  return startInappBrowser();
}

// ---------------------

export const App = { init, restartInappBrowser };
