import { Proxy as P } from './proxy'

import { Settings } from './settings'
import { Calendar } from './calendar'
import { CalendarDrawer } from './calendarDrawer'
import { Day } from './day'
import { DatePicker } from './datepicker'

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

const landscape = (screen.orientation.type.indexOf('portrait') === -1);
CalendarDrawer.setDrawMode(landscape ? 'landscape' : 'portrait');

function onScreenOrientChange() {
  const landscape = (screen.orientation.type.indexOf('portrait') === -1);
  CalendarDrawer.setDrawMode(landscape ? 'landscape' : 'portrait');
  Calendar.draw(Calendar.currentDateString);
}
screen.orientation.addEventListener('change', onScreenOrientChange);

P.$BUTTON_SETTINGS.click(function() {
  Settings.show()
    .then(function() {
      Calendar.draw(Calendar.currentDateString); // redraw with new filters
    });
});

P.$BUTTON_PREV.click(function() {
  if (P.$BUTTON_PREV.is('.disabled')) return;
  const day = Day.add(Calendar.currentDateString, -1);
  Calendar.draw(day).then(function() {
    P.$CALENDAR_CONTENT.scrollTop(0).scrollLeft(0);
  });
});
P.$BUTTON_NEXT.click(function() {
  if (P.$BUTTON_NEXT.is('.disabled')) return;
  const day = Day.add(Calendar.currentDateString, 1);
  Calendar.draw(day).then(function() {
    P.$CALENDAR_CONTENT.scrollTop(0).scrollLeft(0);
  });
});

P.$DATE_CONTAINER.click(function() {
  P.$DATE_PICKER_CONTAINER.removeClass('hidden');
  let day = Calendar.currentDateString;
  if (day === null) // solves bug when not yet loaded
    day = Day.today();
  DatePicker.create(day);
})

// gifs rigolos
let gifRequest: JQuery.jqXHR;

P.$GIF_CONTAINER.click(function() {
  P.$GIF_CONTAINER.hide();
  P.$GIF_IMG.attr('src', '');
})

P.$COURSE_CONTAINER.click(function(evt) {
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

P.$BUTTON_ABOUT.click(function() {
  P.$ABOUT_CONTAINER.removeClass('hidden');
})

P.$BUTTON_ABOUT_CLOSE.click(function() {
  P.$ABOUT_CONTAINER.addClass('hidden');
})
