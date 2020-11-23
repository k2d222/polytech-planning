import { Storage } from './storage.js';
import { Communication } from './communication.js';
import { Notification } from './notification.js'
import { Day } from './day.js';
import { Network } from './network.js';
import { CalendarDrawer } from './calendarDrawer.js';
import { Proxy as P } from './proxy.js'

function loadCache() {
  let cacheStr = Storage.get(P.storage.SAVED_DAYS);
  let cache = {};
  try {
    cache = JSON.parse(cacheStr);
  } catch (e) {
    console.warn('days cache is unset or invalid.');
  }
  return cache;
}

function saveCache(cache) {
  Storage.set(P.storage.SAVED_DAYS, JSON.stringify(cache));
}

// -------------------------
let waitForData; // inappbrowser is loading
let cache;
let storage;
let pendingRequest;
let currentDay;

function updateNavigationButtons(dateString) { // disable or enable nav buttons
  if (!waitForData && Network.online) {
    P.$BUTTON_PREV.removeClass('disabled');
    P.$BUTTON_NEXT.removeClass('disabled');
    return;
  }
  var prevDay = Day.add(dateString, -1);
  var nextDay = Day.add(dateString, 1);
  if (!(prevDay in cache) && !(dateString in cache)) {
    P.$BUTTON_PREV.addClass('disabled');
  }
  else P.$BUTTON_PREV.removeClass('disabled');
  if (!(nextDay in cache) && !(dateString in cache)) {
    P.$BUTTON_NEXT.addClass('disabled');
  }
  else P.$BUTTON_NEXT.removeClass('disabled');
}

function registerWeek(mini) {
  let dateString = mini.date; // date is a monday
  for (let i in mini.days) {
    storage[dateString] = mini.days[i];
    cache[dateString] = mini.days[i];
    dateString = Day.add(dateString, 1);
  }
  saveCache(cache);
}

function handleReceivedWeek(data) {
  registerWeek(data);
  handlePendingRequest();
}

function addPendingRequest(request) {
  cancelPendingRequest();
  pendingRequest = request;
  Notification.show('loading');
  handlePendingRequest();
}

function cancelPendingRequest() {
  if ('reject' in pendingRequest) pendingRequest.reject(new Error(P.err.REQUEST_CANCELLED));
  finishPendingRequest();
}

function finishPendingRequest() {
  pendingRequest = {};
  Notification.hide('loading');
}

async function handlePendingRequest() {
  if (!pendingRequest || !('dateString' in pendingRequest)) return; // no pending request

  if (pendingRequest.dateString in storage) {
    CalendarDrawer.draw(pendingRequest.dateString, cache);
    pendingRequest.resolve();
    finishPendingRequest();
    waitForData = false;
  }

  else if (waitForData) {
    console.warn('calendar update: already waiting for data');
  }

  else {
    waitForData = true;
    let week;
    await Network.whenOnline();
    try {
      week = await Communication.requestWeek(pendingRequest.dateString);
    } catch (err) {
      handleError(err);
      return;
    }
    await handleReceivedWeek(week);
  }
}

function handleError(err) { // TODO: this is dirty
  if (err.message === P.err.BUTTON_NOT_FOUND) {
    waitForData = false;
    console.error(err);
    Notification.show('dateError', { duration: 3000 });
    cancelPendingRequest();
  }
  else if (err.message === P.err.WEBVIEW_NOT_LOADED) {
    waitForData = false;
    console.error(err);
    Notification.show('calendarError', { duration: 3000 });
  }
  else if (err.message === P.err.CALENDAR_ERROR) {
    waitForData = false;
    console.error(err);
    Notification.show('calendarError', { duration: 3000 });
  }
  else if (err.message === P.err.REQUEST_CANCELLED) {
    console.warn('A request was cancelled');
  }
  else {
    waitForData = false;
    console.error(err);
    Notification.show('majorError');
  }
}

function drawFromCache(dateString) {
  if (dateString in cache) {
    CalendarDrawer.draw(dateString, cache);
  }
}

function draw(dateString) {
  currentDay = dateString;
  return new Promise(function(resolve, reject) {
    if (dateString in storage) {
      cancelPendingRequest();
      CalendarDrawer.draw(dateString, cache);
      resolve();
    }
    else {
      addPendingRequest({ dateString, resolve, reject })
      if (dateString in cache) {
        CalendarDrawer.draw(dateString, cache);
      }
      else {
        CalendarDrawer.draw(dateString); // actually draws nothing
        updateNavigationButtons(dateString);
      }
    }
  })
    .catch(handleError); // pending request was probably cancelled
}

// -------------------------------------

function init() {
  waitForData = false;
  cache = loadCache();
  storage = {};
  pendingRequest = {};
  currentDay = null;
}

export const Calendar = {
  init: init,
  draw: draw,
  drawFromCache: drawFromCache,
  getCurrentDay: function() {
    return currentDay;
  },
  // update: handlePendingRequest
}
