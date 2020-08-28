import { Notification } from './notification.js'

export var Network = (function() {

  var state = 'online';
  var interval;

  function offline() {
    console.log('navigator now offline');
    state = 'offline';
    Notification.hide('online');
    Notification.show('offline');
  }

  function online() {
    console.log('navigator now online');
    state = 'online';
    Notification.hide('offline');
    Notification.show('online', { duration: 1500 });
  }

  window.addEventListener("offline", offline, false);
  window.addEventListener("online", online, false);

  interval = setInterval(function() {
    if (navigator.connection.type === Connection.NONE && state === 'online') offline();
    if (navigator.connection.type !== Connection.NONE && state === 'offline') online();
  }, 1000);

  return {
    whenOnline: function() {
      if (state === 'online' || navigator.connection.type !== Connection.NONE) {
        return Promise.resolve();
      }
      return new Promise(function(resolve, reject) {
        let i = 0;
        const interval = setInterval(function() {
          i++;
          // console.log('network wait for online state', i);
          if (state === 'online' || navigator.connection.type !== Connection.NONE) {
            clearInterval(interval);
            resolve();
            return;
          }
        }, 1000);
      });
    },
    get online() {
      return state === 'online';
    },
    get offline() {
      return state === 'offline';
    }
  }

})();
