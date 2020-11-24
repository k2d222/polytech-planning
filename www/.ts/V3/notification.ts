var timeouts: { [key: string] : number} = {};

interface showSettings {
  duration: false | number;
}

function show(notifName: string, { duration = false }: Partial<showSettings> = {}) {
  console.debug('notification:', notifName);
  if (notifName in timeouts) clearTimeout(timeouts[notifName]);
  $('.notification#' + notifName).removeClass('hidden');
  if (duration && duration > 0) {
    timeouts[notifName] = setTimeout(function() {
      $('.notification#' + notifName).addClass('hidden');
    }, duration);
  }
}

function hide(notifName: string) {
  if (notifName in timeouts) clearTimeout(timeouts[notifName]);
  $('.notification#' + notifName).addClass('hidden');
}

export var Notification = (function() {

  return {
    show: show,
    hide: hide
  };

})();
