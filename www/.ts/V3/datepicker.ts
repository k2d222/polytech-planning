import { Proxy as P } from './proxy'
import { Day } from './day'
import { Calendar } from './calendar'
import CalendarError from './error'

const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
const week = ['L', 'M', 'M', 'J', 'V'];

function create(dateString: string) {
  drawnDate = dateString;
  P.$DATE_PICKER.html("");
  for (const day of week) {
    P.$DATE_PICKER.append('<div class="dayName">' + day + '</div>')
  }

  const month = Day.month(dateString);
  let date = Day.firstDayOfMonth(dateString);

  P.$DATE_PICKER_MONTH.html(months[month]);

  const offset = Day.day(date) - 1; // fri->1, thu->2, ...
  for (let i = 0; i < offset; i++) {
    P.$DATE_PICKER.append('<div class="dayNumber disabled">' + Day.date(date) + '</div>');
  }

  const today = Day.today();
  const current = Calendar.getCurrent();
  while (Day.month(date) === month) {
    const $el = $('<div class="dayNumber" date="' + date + '">' + Day.date(date) + '</div>');
    if (date === current) $el.addClass('selected');
    if (date === today) $el.addClass('today');
    $el.click(function() {
      const $btn = $(this);
      $btn.addClass('selected');
      const dateString = $btn.attr('date');
      if(dateString) Calendar.draw(dateString);
      else throw new CalendarError("missing attribute 'date' on datepicker button");
    })
    P.$DATE_PICKER.append($el);
    date = Day.add(date, 1);
  }
}

let drawnDate: string;

function init() {
  drawnDate = Day.today();

  P.$DATE_PICKER_PREV.click(function() {
    const d = new Date(drawnDate);
    d.setMonth(d.getMonth() - 1);
    create(d.toDateString());
  })
  P.$DATE_PICKER_NEXT.click(function() {
    const d = new Date(drawnDate);
    d.setMonth(d.getMonth() + 1);
    create(d.toDateString());
  })

  P.$DATE_PICKER_CONTAINER.click(function(e) {
    const $target = $(e.target);
    if (!$target.is(P.$DATE_PICKER_PREV) && !$target.is(P.$DATE_PICKER_NEXT)) {
      P.$DATE_PICKER_CONTAINER.addClass('hidden');
    }
  })

}
init();

export const DatePicker = {
  create: create
};
