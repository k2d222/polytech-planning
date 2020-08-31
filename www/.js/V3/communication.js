import { Day } from './day.js'
import { InappBrowser } from './inappbrowser.js'
import { Proxy as P } from './proxy.js'

function createStringRequest(functionName, args) {
  let strArgs = []
  for (let arg of args) {
    switch (typeof arg) {
      case 'string':
        strArgs.push('"' + arg + '"')
        break;
      case 'boolean':
        strArgs.push(arg ? 'true' : 'false');
        break;
      case 'number':
        strArgs.push(arg.toString());
        break;
      default:
        console.error('request not supported');
        break
    }
  }
  return functionName + '(' + strArgs.join(',') + ')';
}

function request(functionName, args) {
  const req = createStringRequest(functionName, args);
  return InappBrowser.eval(req);
}

function promiseTimeout(timeout) {
  return new Promise(function(resolve) {
    setTimeout(resolve, timeout);
  });
}

function waitUntil(functionName, args, expectedResult, frequency = P.com.DEFAULT_UPDATE_INTERVAL) {
  let interval;

  return new Promise(function(resolve, reject) {

    function then(res) {
      if (res == expectedResult) {
        clearInterval(interval);
        resolve();
      }
      else setTimeout(in_, frequency);
    }

    function in_() {
      request(functionName, args)
        .then(then)
        .catch(function(err) {
          clearInterval(interval);
          reject(err);
        });
    }

    in_();

  });
}

async function requestWeek(dateString) {
  dateString = Day.monday(dateString);
  await waitUntil('isWeekLoaded', [], true);
  let currentDate = await request('getCurrentDate', []);

  if (currentDate !== dateString) { // must load week before
    let res = await request('clickButton', [dateString])
    if (!res) throw new Error(P.err.BUTTON_NOT_FOUND);
    else await promiseTimeout(P.com.TIMEOUT_AFTER_BUTTON_PRESS);
    await waitUntil('getCurrentDate', [], dateString);
    await waitUntil('isWeekLoaded', [], true);
  }

  let res = await request('parseThisWeek', [])
  console.log('received week', res);
  return res;
}

export var Communication = (function() { // communication with webview

  return {
    requestWeek: requestWeek
  };

})();
