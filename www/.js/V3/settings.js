import { Filter } from './filter.js';
import { Storage } from './storage.js';
import { App } from './app.js';
import { Calendar } from './calendar.js';
import { CalendarDrawer } from './calendarDrawer.js';
import { Day } from './day.js';
import { Proxy as P } from './proxy.js';

function domAddField(filter, $parent) { // can be recursive
  for (var filtre of filter.subfilters) { // TODO nommage variables
    var $filtre = $('<div/>');
    $filtre.data('key', filtre.key);
    $filtre.addClass('element filtre');
    var $check = $(P.html.SETTINGS_CHECKBOX);
    $check.click(function(e) {
      var $check = $(e.target);
      if ($check.is(':checked')) $check.siblings().removeClass('disabled');
      else $check.siblings().addClass('disabled');
    });
    var $label = $('<label/>');
    $label.html(filtre.display);
    var $dropdown = $('<select/>');
    for (var index in filtre.variable) {
      var option = index;
      if (Array.isArray(filtre.variable)) option = filtre.variable[index];
      $dropdown.append($('<option value="' + filtre.variable[index] + '"/>').html(option));
    }
    $filtre.append($check).append($label).append($dropdown);
    $parent.append($filtre);
    if ('subfilters' in filtre) domAddField(filtre, $filtre);
  }
}

function applySettings() {
  for (var domFiltre of $(P.$.SETTINGS_FILTER)) {
    var $filtre = $(domFiltre);
    var key = $filtre.data('key');
    if ($filtre.children('input[type=checkbox]').is(':checked')) {
      var select = $filtre.children('select').get(0);
      var value = select.options[select.selectedIndex].value;
      Storage.set(key, value);
    }
    else {
      Storage.set(key, false);
    }
  }
  P.$SETTINGS_CONTAINER.addClass('hidden');
}


function setCurrentSettings() {

  if (Storage.has(P.storage.GRADE)) {
    P.$SETTINGS_GRADE.val(Storage.get(P.storage.GRADE));
  }
  if (Storage.has(P.storage.THEME)) {
    P.$SETTINGS_THEME.val(Storage.get(P.storage.THEME));
  }

  for (let filter of $(P.$.SETTINGS_FILTER)) {
    let $filter = $(filter);
    const key = $filter.data('key');
    if (Storage.has(key)) {
      let $select = $filter.children('select');
      const val = Storage.get(key);
      if (val === 'false') {
        let $check = $filter.children('input[type=checkbox]');
        if ($check.length === 1) $check.trigger('click');
      }
      if ($select.children('option').is('[value="' + val + '"]')) {
        $select.val(val);
      }
    }
  }
}

function loadDOM(filter) {
  P.$SETTINGS_FILTER.children().remove();
  domAddField(filter, P.$SETTINGS_FILTER);
}

function show({ cancelDisabled = false } = {}) {
  return new Promise(function(resolve, reject) {

    P.$SETTINGS_CONTAINER.removeClass('hidden');
    if (cancelDisabled) P.$SETTINGS_CANCEL.hide();
    else P.$SETTINGS_CANCEL.show();

    P.$SETTINGS_CANCEL.one('click', function() {
      P.$SETTINGS_CONTAINER.addClass('hidden');
      resolve();
    })

    P.$SETTINGS_SAVE.one('click', function() {
      applySettings();
      resolve();
    });

    if (!Storage.has(P.storage.GRADE)) {
      P.$SETTINGS_SAVE.hide();
      return;
    }
    else P.$SETTINGS_SAVE.show();

    Filter.loadFilter(Storage.get(P.storage.GRADE))
      .then(function() {
        loadDOM(Filter.loadedFilter);
        setCurrentSettings();
      })
      .catch(reject);
  });
}


P.$SETTINGS_GRADE.change(function() {
  let $sel = P.$SETTINGS_GRADE.children().filter(':checked');
  let val = $sel.attr('value');
  Storage.set(P.storage.GRADE, val);

  Storage.set(P.storage.SAVED_DAYS, ''); // try to delete currently drawn courses
  Calendar.init();
  CalendarDrawer.draw(Day.today());

  P.$SETTINGS_SAVE.show(); // was maybe hidden

  Filter.loadFilter(Storage.get(P.storage.GRADE))
    .then(function() {
      P.$SETTINGS_CANCEL.hide();
      loadDOM(Filter.loadedFilter);
      return App().restartInappBrowser();
    }).then(function() {
      Calendar.draw(Day.today());
    });
});

//-----------------------

export var Settings = (function() {

  return {
    callbackOnce: function() { },
    loadDOM: loadDOM,
    show: show
  };

})();
