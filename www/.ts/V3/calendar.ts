import { Storage } from './storage';
import { Communication } from './communication';
import { Notification } from './notification'
import { Day } from './day';
import { Network } from './network';
import { CalendarDrawer } from './calendarDrawer';
import { Proxy as P } from './proxy'
import { TRequest, TStore, TMiniStore } from './types'

function loadCache(): TStore {
  const cacheStr = Storage.get(P.storage.SAVED_DAYS);
  let cache: TStore;
  try {
    cache = JSON.parse(cacheStr);
  } catch (e) {
    console.warn('days cache is unset or invalid.');
    cache = {};
  }
  return cache;
}

function saveCache(cache: TStore) {
  Storage.set(P.storage.SAVED_DAYS, JSON.stringify(cache));
}

// -------------------------
let waitForData: boolean; // inappbrowser is loading
let cache: TStore;
let storage: TStore;
let pendingRequest: TRequest;
let currentDay: string | null;

function updateNavigationButtons(dateString: string) { // disable or enable nav buttons
  if (!waitForData && Network.online) {
    P.$BUTTON_PREV.removeClass('disabled');
    P.$BUTTON_NEXT.removeClass('disabled');
    return;
  }
  const prevDay = Day.add(dateString, -1);
  const nextDay = Day.add(dateString, 1);
  if (!(prevDay in cache) && !(dateString in cache)) {
    P.$BUTTON_PREV.addClass('disabled');
  }
  else P.$BUTTON_PREV.removeClass('disabled');
  if (!(nextDay in cache) && !(dateString in cache)) {
    P.$BUTTON_NEXT.addClass('disabled');
  }
  else P.$BUTTON_NEXT.removeClass('disabled');
}

function registerWeek(mini: TMiniStore) {
  let dateString = mini.date; // date is a monday
  for (const i in mini.days) {
    storage[dateString] = mini.days[i];
    cache[dateString] = mini.days[i];
    dateString = Day.add(dateString, 1);
  }
  saveCache(cache);
}

function handleReceivedWeek(data: TMiniStore) {
  registerWeek(data);
  handlePendingRequest();
}

function addPendingRequest(request: TRequest) {
  cancelPendingRequest();
  pendingRequest = request;
  Notification.show('loading');
  handlePendingRequest();
}

function cancelPendingRequest() {
  // if ('reject' in pendingRequest) pendingRequest.reject(new Error(P.err.REQUEST_CANCELLED)); // TODO: deprecated
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
  }

  else if (waitForData) {
    console.warn('calendar update: already waiting for data');
  }

  else {
    console.log("hello");
    waitForData = true;
    let week;
    await Network.whenOnline();
    try {
      week = await Communication.requestWeek(pendingRequest.dateString);
      console.log("here");
    } catch (err) {
      handleError(err);
      waitForData = false;
      return;
    }
    waitForData = false;
    await handleReceivedWeek(week);
  }
}

function handleError(err: Error) { // TODO: this is dirty
  if (err.message === P.err.BUTTON_NOT_FOUND) {
    console.error(err);
    Notification.show('dateError', { duration: 3000 });
    cancelPendingRequest();
  }
  else if (err.message === P.err.WEBVIEW_NOT_LOADED) {
    console.error(err);
    Notification.show('calendarError', { duration: 3000 });
  }
  else if (err.message === P.err.CALENDAR_ERROR) {
    console.error(err);
    Notification.show('calendarError', { duration: 3000 });
  }
  else if (err.message === P.err.REQUEST_CANCELLED) {
    console.warn('A request was cancelled');
  }
  else {
    console.error(err);
    Notification.show('majorError');
  }
}

function drawFromCache(dateString: string) {
  if (dateString in cache) {
    CalendarDrawer.draw(dateString, cache);
  }
}

function draw(dateString: string) {
  currentDay = dateString;
  return new Promise<void>(function(resolve, reject) {
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
    if(!currentDay) throw new Error('calendar has no current day');
    return currentDay;
  },
  // update: handlePendingRequest
}
