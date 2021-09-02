import { Filter } from './filter';
import { Storage } from './storage';
import { App } from './app';
import { Calendar } from './calendar';
import { CalendarDrawer } from './calendarDrawer';
import { Day } from './day';
import { Proxy as P } from './proxy';
import CalendarError from './error'

function domAddField(filter: Filter, $parent: JQuery<HTMLElement>) { // can be recursive
  for (const filtre of filter.subfilters) { // TODO nommage variables
    const $filtre = $('<div/>');
    $filtre.data('key', filtre.key);
    $filtre.addClass('element filtre');
    const $check = $(P.html.SETTINGS_CHECKBOX);
    $check.click(function(e) {
      const $check = $(e.target);
      if ($check.is(':checked')) $check.siblings().removeClass('disabled');
      else $check.siblings().addClass('disabled');
    });
    const $label = $('<label/>');
    $label.html(filtre.display);
    const $dropdown = $('<select/>');

    for (const index in filtre.variable) {
      let option = index;
      if (Array.isArray(filtre.variable)) option = filtre.variable[index];
      $dropdown.append($('<option value="' + filtre.variable[index] + '"/>').html(option));
    }
    $filtre.append($check).append($label).append($dropdown);
    $parent.append($filtre);
    if ('subfilters' in filtre) domAddField(filtre, $filtre);
  }
}

function applySettings() {
  for (const domFiltre of $(P.$.SETTINGS_FILTER)) {
    const $filtre = $(domFiltre);
    const key = $filtre.data('key');
    if ($filtre.children('input[type=checkbox]').is(':checked')) {
      const select = <HTMLSelectElement>$filtre.children('select').get(0);
      const value = select.options[select.selectedIndex].value;
      Storage.set(key, value);
    }
    else {
      Storage.set(key, '0');
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

  for (const filter of $(P.$.SETTINGS_FILTER)) {
    const $filter = $(filter);
    const key = $filter.data('key');
    if (Storage.has(key)) {
      const $select = $filter.children('select');
      const val = Storage.get(key);
      if (val === 'false') {
        const $check = $filter.children('input[type=checkbox]');
        if ($check.length === 1) $check.trigger('click');
      }
      if ($select.children('option').is('[value="' + val + '"]')) {
        $select.val(val);
      }
    }
  }
}

function loadDOM(filter: Filter) {
  P.$SETTINGS_FILTER.children().remove();
  domAddField(filter, P.$SETTINGS_FILTER);
}

function show({ cancelDisabled = false } = {}) {
  return new Promise<void>(function(resolve, reject) {

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


P.$SETTINGS_GRADE.change(async function() {
  const $sel = P.$SETTINGS_GRADE.children().filter(':checked');
  const val = $sel.attr('value');
  if(val) Storage.set(P.storage.GRADE, val);
  else throw new CalendarError("missing attribute 'value' on settings element");

  Storage.set(P.storage.SAVED_DAYS, ''); // try to delete currently drawn courses
  Calendar.init();
  CalendarDrawer.draw(Day.today());

  P.$SETTINGS_SAVE.hide();
  P.$SETTINGS_CANCEL.hide();
  P.$SETTINGS_FILTER.children().remove();

  await Filter.loadFilter(Storage.get(P.storage.GRADE));
  await App.restartInappBrowser();

  P.$SETTINGS_SAVE.show();
  loadDOM(Filter.loadedFilter);
  Calendar.draw(Day.today());
});

//-----------------------

export const Settings = (function() {

  return {
    callbackOnce: function() { },
    loadDOM: loadDOM,
    show: show
  };

})();
