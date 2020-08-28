import { Proxy as P } from './proxy.js'

import { Storage } from './storage.js'
import { Filter } from './filter.js'
import { Calendar } from './calendar.js'
import { Network } from './network.js'
import { InappBrowser } from './inappbrowser.js'
import { Day } from './day.js'
import { Theme } from './theme.js'

require('./events.js');


function onDeviceReady() {
  Calendar.init();
  Storage.init()
    .then(function() {
      Theme.set(Storage.get(P.storage.THEME));
      return Filter.loadFilter(Storage.get(P.storage.GRADE));
    })
    .then(function() {
      Calendar.draw(Day.today()); // if cached calendar can draw
      return startInappBrowser();
    })
    .then(function() {
      // Calendar.draw(Day.today()); // if cached calendar can draw
      Calendar.update();
    })
    .catch(function(err) {
      console.error('something bad happened !');
      console.error(err);
      Notification.show('majorError')
    })
}

function startInappBrowser() {
  return new Promise(function(resolve, reject) {
    Network.whenOnline()
      .then(function() {
        return InappBrowser.load(Storage.get(P.storage.GRADE))
      })
      .then(function() {
        return InappBrowser.injectScript()
      })
      .then(function() {
        resolve();
      });
  });
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
