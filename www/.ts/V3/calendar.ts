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
  P.$BUTTON_PREV.removeClass('disabled');
  P.$BUTTON_NEXT.removeClass('disabled');

  if (dateString in cache) return;

  const prevDay = Day.add(dateString, -1);
  const nextDay = Day.add(dateString, 1);

  if (!(prevDay in cache)) P.$BUTTON_PREV.addClass('disabled');
  if (!(nextDay in cache)) P.$BUTTON_NEXT.addClass('disabled');
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
    try {
      const week = await Communication.requestWeek(dateString);
      registerWeek(week);
    } catch (e) {
      console.warn('request failed:', e);
    }
    finally {
      Notification.hide('loading');
    }
  })();

  await currentRequest;
  currentRequest = null;
}

async function finishRequest() {
    if (currentRequest) await currentRequest;
}

function drawFromCache(dateString: string) {
  if (dateString in cache) {
    currentDateString = dateString;
    CalendarDrawer.draw(dateString, cache);
    return true;
  }
  return false;
}

async function draw(dateString: string) {
  updateNavigationButtons(dateString);
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
    }
    await makeRequest(dateString);
    if(currentDateString == dateString && dateString in storage) await draw(dateString);
  }
}

// -------------------------------------

function init() {
  cache = loadCache();
  storage = {};
  currentDateString = currentDateString || null;
}

function getCurrent() {
  if(!currentDateString) throw new CalendarError('calendar has no current day');
  return currentDateString;
}

export const Calendar = {
  init, draw, drawFromCache, getCurrent, finishRequest
}
