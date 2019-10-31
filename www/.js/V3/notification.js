var timeouts = {};

function show(notifName, {duration=false} = {}) {
  if(notifName in timeouts) clearTimeout(timeouts[notifName]);
  $('.notification#'+notifName).removeClass('hidden');
  if(duration && duration > 0) {
    timeouts[notifName] = setTimeout(function () {
      $('.notification#'+notifName).addClass('hidden');
    }, duration);
  }
}

function hide(notifName) {
  if(notifName in timeouts) clearTimeout(timeouts[notifName]);
  $('.notification#'+notifName).addClass('hidden');
}

export var Notification = (function() {

  return {
    show:show,
    hide:hide
  };

})();
