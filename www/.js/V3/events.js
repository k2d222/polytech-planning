import { Proxy as P } from './proxy.js'

import { Settings } from './settings.js'
import { Calendar } from './calendar.js'
import { CalendarDrawer } from './calendarDrawer.js'
import { Day } from './day.js'
import { DatePicker } from './datepicker.js'

$(document.body).on('touchmove', function(e) {
  let set = [e.target, ...$(e.target).parents()];
  for (let el of set) {
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

screen.orientation.onchange = function(e) {
  const landscape = (e.target.type.indexOf('portrait') === -1);
  CalendarDrawer.setDrawMode(landscape ? 'landscape' : 'portrait');
  Calendar.draw(Calendar.getCurrentDay());
}

P.$BUTTON_SETTINGS.click(function() {
  Settings.show()
    .then(function() {
      Calendar.draw(Calendar.getCurrentDay()); // redraw with new filters
    });
});

P.$BUTTON_PREV.click(function() {
  if (P.$BUTTON_PREV.is('.disabled')) return;
  const day = Day.add(Calendar.getCurrentDay(), -1);
  Calendar.draw(day).then(function() {
    P.$CALENDAR_CONTENT.scrollTop(0).scrollLeft(0);
  });
});
P.$BUTTON_NEXT.click(function() {
  if (P.$BUTTON_NEXT.is('.disabled')) return;
  const day = Day.add(Calendar.getCurrentDay(), 1);
  Calendar.draw(day).then(function() {
    P.$CALENDAR_CONTENT.scrollTop(0).scrollLeft(0);
  });
});

P.$DATE_CONTAINER.click(function() {
  P.$DATE_PICKER_CONTAINER.removeClass('hidden');
  DatePicker.create(Calendar.getCurrentDay());
})

// gifs rigolos
var gifRequest;

P.$GIF_CONTAINER.click(function() {
  P.$GIF_CONTAINER.hide();
  P.$GIF_IMG.attr('src', '');
})

P.$COURSE_CONTAINER.click(function(evt) {
  let $el = $(evt.target);
  let $clickedGrade = $el.parents().add($el).filter(P.$.COURSE);
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
