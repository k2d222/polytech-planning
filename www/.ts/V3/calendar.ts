import { Storage } from './storage';
import { Communication } from './communication';
import { Notification } from './notification'
import { Day } from './day';
import { Network } from './network';
import { CalendarDrawer } from './calendarDrawer';
import { Proxy as P } from './proxy'
import { Store, MinifiedWeek } from './calendarData'
import CalendarError from './error'

function loadCache(): Store {
  const cacheStr = Storage.get(P.storage.SAVED_DAYS);
  let cache: Store;
  try {
    cache = JSON.parse(cacheStr);
  } catch (e) {
    console.warn('days cache is unset or invalid.');
    cache = {};
  }
  return cache;
}

function saveCache(cache: Store) {
  Storage.set(P.storage.SAVED_DAYS, JSON.stringify(cache));
}

let cache: Store;
let storage: Store;
let currentDateString: string | null;
let currentRequest: Promise<void> | null;

function updateNavigationButtons(dateString: string) { // disable or enable nav buttons
  if (!currentRequest && Network.online) {
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

function registerWeek(mini: MinifiedWeek) {
  let dateString = mini.date; // date is a monday
  for (const i in mini.days) {
    storage[dateString] = mini.days[i];
    cache[dateString] = mini.days[i];
    dateString = Day.add(dateString, 1);
  }
  saveCache(cache);
}


async function makeRequest(dateString: string) {
  if (currentRequest) {
    console.warn('calendar update: already waiting for data');
    await currentRequest;
    if(dateString !== currentDateString) throw new CalendarError(P.err.REQUEST_CANCELLED);
  }

  currentRequest = (async function() {
    Notification.show('loading');
    await Network.whenOnline();
    const week = await Communication.requestWeek(dateString);
    Notification.hide('loading');
    registerWeek(week);
  })();

  await currentRequest;
  currentRequest = null;
}

// function handleError(err: Error) { // TODO: this is dirty
//   if (err.message === P.err.BUTTON_NOT_FOUND) {
//     console.error(err);
//     Notification.show('dateError', { duration: 3000 });
//     finishPendingRequest();
//   }
//   else if (err.message === P.err.WEBVIEW_NOT_LOADED) {
//     console.error(err);
//     Notification.show('calendarError', { duration: 3000 });
//   }
//   else if (err.message === P.err.CALENDAR_ERROR) {
//     console.error(err);
//     Notification.show('calendarError', { duration: 3000 });
//   }
//   else {
//     console.error(err);
//     Notification.show('majorError');
//   }
// }

function drawFromCache(dateString: string) {
  if (dateString in cache) {
    CalendarDrawer.draw(dateString, cache);
  }
}

async function draw(dateString: string) {
  currentDateString = dateString;
  if (dateString in storage) {
    CalendarDrawer.draw(dateString, storage);
  }
  else {
    if (dateString in cache) {
      CalendarDrawer.draw(dateString, cache);
    }
    else {
      CalendarDrawer.draw(dateString); // actually draws nothing
      updateNavigationButtons(dateString);
    }
    await makeRequest(dateString);
    if(currentDateString == dateString) await draw(dateString);
  }
}

// -------------------------------------

function init() {
  cache = loadCache();
  storage = {};
  currentDateString = null;
}

export const Calendar = {
  init: init,
  draw: draw,
  drawFromCache: drawFromCache,
  get currentDateString() {
    if(!currentDateString) throw new CalendarError('calendar has no current day');
    return currentDateString;
  },
}
