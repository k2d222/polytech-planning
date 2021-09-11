import { Proxy as P } from './proxy'

import { Storage } from './storage'
import { Filter } from './filter'
import { Calendar } from './calendar'
import { Network } from './network'
import { InappBrowser } from './inappbrowser'
import { Day } from './day'
import { Theme } from './theme'
import { Notification } from './notification'
import { Events } from './events'

import './events'

async function main() {
  try {
    Calendar.init();
    await Storage.init();
    Theme.set(Storage.get(P.storage.THEME));
    await Filter.loadFilter(Storage.get(P.storage.GRADE));
    let cached = Calendar.drawFromCache(Day.today());
    if (cached) Events.init();
    await startInappBrowser();
    await Calendar.draw(Day.today());
    if (!cached) Events.init(); // events are initialized after full load to guarantee Calendar.getCurrent()
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
  document.addEventListener('deviceready', main, false);
}

function restartInappBrowser() {
  return startInappBrowser();
}

// ---------------------

export const App = { init, restartInappBrowser };
