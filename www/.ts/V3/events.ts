import { Proxy as P } from './proxy'

import { Settings } from './settings'
import { Calendar } from './calendar'
import { CalendarDrawer } from './calendarDrawer'
import { Day } from './day'
import { DatePicker } from './datepicker'

function evtScreenTouch() {
  $(document.body).on('touchmove', function(e) {
    const set = [e.target, ...$(e.target).parents()];
    for (const el of set) {
      if ((el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth) && $(el).css('overflow') !== 'visible') {
        $(el).addClass('touched').one('touchend', function() {
          $(this).removeClass('touched');
        })
        return;
      }
    }
  })
}

function evtOrientationChange() {
  const landscape = (screen.orientation.type.indexOf('portrait') === -1);
  CalendarDrawer.setDrawMode(landscape ? 'landscape' : 'portrait');

  function onScreenOrientChange() {
    const landscape = (screen.orientation.type.indexOf('portrait') === -1);
    CalendarDrawer.setDrawMode(landscape ? 'landscape' : 'portrait');
    Calendar.draw(Calendar.getCurrent());
  }
  screen.orientation.addEventListener('change', onScreenOrientChange);
}

function evtSettingsClick() {
  P.$BUTTON_SETTINGS.on('click', function() {
    Settings.show()
    .then(function() {
      Calendar.draw(Calendar.getCurrent()); // redraw with new filters
    });
  });
}

function evtPrevClick() {
  P.$BUTTON_PREV.on('click', function() {
    if (P.$BUTTON_PREV.is('.disabled')) return;
    const day = Day.add(Calendar.getCurrent(), -1);
    Calendar.draw(day).then(function() {
      P.$CALENDAR_CONTENT.scrollTop(0).scrollLeft(0);
    });
  });
}

function evtNextClick() {
  P.$BUTTON_NEXT.on('click', function() {
    if (P.$BUTTON_NEXT.is('.disabled')) return;
    const day = Day.add(Calendar.getCurrent(), 1);
    Calendar.draw(day).then(function() {
      P.$CALENDAR_CONTENT.scrollTop(0).scrollLeft(0);
    });
  });
}

function evtDatepickerClick() {
  P.$DATE_CONTAINER.on('click', function() {
    P.$DATE_PICKER_CONTAINER.removeClass('hidden');
    let day: string;
    try {
      day = Calendar.getCurrent();
    } catch(e) {
      day = Day.today();
    }
    DatePicker.create(day);
  })
}

function evtGifs() {
  let gifRequest: JQuery.jqXHR;

  P.$GIF_CONTAINER.on('click', function() {
    P.$GIF_CONTAINER.hide();
    P.$GIF_IMG.attr('src', '');
  })

  P.$COURSE_CONTAINER.on('click', function(evt) {
    const $el = $(evt.target);
    const $clickedGrade = $el.parents().add($el).filter(P.$.COURSE);
    if ($clickedGrade.length === 0) return;

    const text = $clickedGrade.find('b').html().toLowerCase();
    if (gifRequest) gifRequest.abort();
    gifRequest = $.post(P.GIF_URL_PHP, { text: text }, function(data) {
      P.$GIF_IMG.attr('src', data);
      P.$GIF_CONTAINER.show();
    });
  })
}

let initialized = false;

function init() {
  if(initialized) return;
  initialized = true;

  evtScreenTouch();
  evtOrientationChange();
  evtSettingsClick();
  evtPrevClick();
  evtNextClick();
  evtDatepickerClick();
  evtGifs();
}

export const Events = {
  init
}
