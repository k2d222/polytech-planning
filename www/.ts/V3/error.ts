import { Notification } from './notification'
import { Proxy as P } from './proxy'

export default class CalendarError extends Error {
  constructor(message?: string) {
    super(message);

    this.name = 'CalendarError';

    if(message) switch (message) {
      case P.err.CALENDAR_ERROR:
      case P.err.WEBVIEW_NOT_LOADED:
        Notification.show('calendarError', { duration: 3000 });
        break;

      case P.err.BUTTON_NOT_FOUND:
        Notification.show('dateError', { duration: 3000 });
        break;

      case P.err.REQUEST_CANCELLED:
        console.warn('A request was cancelled')
        break;

      default:
        Notification.show('majorError');
        break;
    };
  }
}
