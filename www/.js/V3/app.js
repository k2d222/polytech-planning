import { Proxy as P } from './proxy.js'

import { Storage } from './storage.js'
import { Filter } from './filter.js'
import { Calendar } from './calendar.js'
import { Network } from './network.js'
import { InappBrowser } from './inappbrowser.js'
import { Day } from './day.js'
import { Theme } from './theme.js'

require('./events.js');


async function onDeviceReady() {
  try {
    Calendar.init();
    await Storage.init();
    Theme.set(Storage.get(P.storage.THEME));
    await Filter.loadFilter(Storage.get(P.storage.GRADE));
    Calendar.draw(Day.today()); // if cached calendar can draw
    await startInappBrowser();
    await Calendar.update();
  }
  catch (err) {
    console.error('something bad happened !');
    console.error(err);
    Notification.show('majorError')
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

let inst = null;

function createInstance() { // Constructor like
  inst = {
    init: init,
    restartInappBrowser: restartInappBrowser
  };
}

export function App() { // Singleton-like
  if (inst === null) createInstance();

  return inst;
}
