import { Calendar } from './calendar.js'
import { Day } from './day.js'
import { Notification } from './notification.js'
import { App } from './app.js'
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
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, timeout);
  });
}

function waitUntil(functionName, args, expectedResult, frequency = P.com.DEFAULT_UPDATE_INTERVAL) {
  let interval;
  let i = 0;

  return new Promise(function(resolve, reject) {

    function then(res) {
      if (res == expectedResult) {
        // console.log('waitUntil done after', i, 'steps');
        clearInterval(interval);
        resolve();
      }
      else setTimeout(in_, frequency);
    }

    function in_() {
      // console.log('waitUntil', i);
      i++;
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

function requestWeek(dateString) {
  dateString = Day.monday(dateString);
  return waitUntil('isWeekLoaded', [], true)
    .then(function() {
      return request('getCurrentDate', []);
    })
    .then(function(currentDate) {
      if (currentDate !== dateString) { // must load week before
        return request('clickButton', [dateString])
          .then(function(res) {
            if (!res) return Promise.reject(new Error(P.err.BUTTON_NOT_FOUND));
            else return promiseTimeout(P.com.TIMEOUT_AFTER_BUTTON_PRESS);
          })
          .then(function() {
            return waitUntil('getCurrentDate', [], dateString);
          })
          .then(function() {
            return waitUntil('isWeekLoaded', [], true);
          })
      }
    })
    .then(function() {
      return request('parseThisWeek', [])
        .then(function(res) {
          console.log(res);
          return res;
        })
    });

}

export var Communication = (function() { // communication with webview

  return {
    requestWeek: requestWeek
  };

})();
