import { Day } from './day'
import { InappBrowser } from './inappbrowser'
import { Proxy as P } from './proxy'
import { MinifiedWeek } from './calendarData'

function createStringRequest(functionName: string, args: any[]): string {
  const strArgs = []
  for (const arg of args) {
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

interface RequestMap {
  'parseThisWeek': MinifiedWeek;
  'isWeekLoaded': boolean;
  'getCurrentDate': string;
  'clickButton': boolean;
};

function request<T extends keyof RequestMap>(functionName: T, args: any[]): Promise<RequestMap[T]> {
  const req = createStringRequest(functionName, args);
  return InappBrowser.eval(req);
}

function promiseTimeout(timeout: number) {
  return new Promise(function(resolve) {
    setTimeout(resolve, timeout);
  });
}

function waitUntil<T extends keyof RequestMap>(functionName: T, args: any[], expectedResult: RequestMap[T], frequency: number = P.com.DEFAULT_UPDATE_INTERVAL) {
  let interval: number;

  return new Promise<void>(function(resolve, reject) {

    function then(res: RequestMap[T]) {
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

async function requestWeek(dateString: string) {
  dateString = Day.monday(dateString);
  await waitUntil('isWeekLoaded', [], true);
  const currentDate = await request('getCurrentDate', []);

  if (currentDate !== dateString) { // must load week before
    const res = await request('clickButton', [dateString])
    if (!res) throw new Error(P.err.BUTTON_NOT_FOUND);
    else await promiseTimeout(P.com.TIMEOUT_AFTER_BUTTON_PRESS);
    await waitUntil('getCurrentDate', [], dateString);
    await waitUntil('isWeekLoaded', [], true);
  }

  const res = await request('parseThisWeek', [])
  console.log('received week', res);
  return res;
}

export const Communication = (function() { // communication with webview

  return {
    requestWeek: requestWeek
  };

})();
