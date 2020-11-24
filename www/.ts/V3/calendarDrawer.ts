import { Day } from './day';
import { Filter } from './filter';
import { Notification } from './notification';
import { Proxy as P } from './proxy'
import { TStore, TMini, TExpanded} from './types'

function drawLines() {
  const n_hours = P.END_HOUR - P.START_HOUR;
  for (let i = 0; i < n_hours; i++) {
    const hour = i + P.START_HOUR;
    const $hour = $(P.html.HOUR);
    $hour.html(hour + ' h');
    $hour.css({
      gridRow: (i * 4 + 1) + ""
    })
    P.$COURSE_CONTAINER.append($hour);
    const $line = $(P.html.HOUR_LINE);
    $line.css({
      gridRow: (i * 4 + 1) + ""
    })
    P.$COURSE_CONTAINER.append($line);
  }
}

function expandData(mini: TMini[]) {
  const expanded: TExpanded[] = [];
  for (const i in mini) {
    expanded[i] = {
      start: { hour: mini[i][0][0], minute: mini[i][0][1] },
      end: { hour: mini[i][1][0], minute: mini[i][1][1] },
      title: mini[i][2], background: mini[i][3],
      unavailable: false, blacklisted: false
    };
    if (expanded[i].title === null) {
      expanded[i].title = 'FERMÉ';
      expanded[i].unavailable = true;
    }
    else {
      expanded[i].blacklisted = Filter.filterElement(expanded[i]);
    }
  }
  expanded.sort((a, b) => !a.blacklisted && b.blacklisted ? -1 : 0); // not blacklisted comes first (1 <=> b comes first)
  return expanded;
}

function createMatrix(): boolean[][] {
  const matrix = []
  const n_hours = P.END_HOUR - P.START_HOUR;
  for (let i = 0; i < 4 * n_hours; i++) {
    matrix[i] = [];
  }
  return matrix;
}

function getEmptySpace(matrix: boolean[][], el: TExpanded) {
  const startRow = (el.start.hour - P.START_HOUR) * 4 + el.start.minute / 15
  const endRow = (el.end.hour - P.START_HOUR) * 4 + el.end.minute / 15
  const width = el.blacklisted ? 1 : 2;
  let y = 0;

  while (matrix[startRow][y] === true) y++;

  const checkYOffset = (y: number) => {
    for (let j = y; j < y + width; j++) {
      for (let i = startRow; i < endRow; i++) {
        if (typeof matrix[i][j] === 'undefined') matrix[i][j] = false;
        if (matrix[i][j] === true) return false;
      }
    }
    return true
  };
  while (!checkYOffset(y)) y++;

  for (let j = y; j < y + width; j++) { // fill empty space
    for (let i = startRow; i < endRow; i++) {
      matrix[i][j] = true;
    }
  }

  return {
    x1: y,
    x2: y + width,
    y1: startRow + 1,
    y2: endRow + 1
  }
}

function collides($course1: JQuery<HTMLElement>, $course2: JQuery<HTMLElement>) {
  const start = parseInt($course1.css('grid-row-start'));
  const end = parseInt($course1.css('grid-row-end'));
  const otherStart = parseInt($course2.css('grid-row-start'));
  const otherEnd = parseInt($course2.css('grid-row-end'));
  return (start < otherEnd && otherStart < end);
}

function landscapeXalign($day: JQuery<HTMLElement>) {
  const placed = [];
  const $courses = $day.children();
  $courses.data('x', 0);
  $courses.data('xMax', 0);

  // find x
  for (const course1 of $courses) {
    const $course1 = $(course1);
    let x1 = $course1.data('x');

    for (const course2 of placed) {
      const $course2 = $(course2);
      const x2 = $course2.data('x');
      if (x1 === x2 && collides($course1, $course2)) {
        x1++;
      }
    }
    $course1.data('x', x1);
    placed.push(course1);
  }

  // find xMax
  for (const course1 of $courses) {
    const $course1 = $(course1);
    let xMax1 = $course1.data('x');

    for (const course2 of $courses) {
      const $course2 = $(course2);
      const xMax2 = $course2.data('x');
      if (collides($course1, $course2)) {
        xMax1 = Math.max(xMax1, xMax2);
      }
    }
    $course1.data('xMax', xMax1);
  }

  for (const course of $courses) {
    const $course = $(course);
    const x = $course.data('x');
    const xMax = $course.data('xMax') + 1;
    $course.css({
      'left': 100 / xMax * x + '%',
      'width': 'calc(' + 100 / xMax + '% + 1px)' // 1px for the css border
    });
    if (x + 1 === xMax) {
      $course.css({ 'width': 'calc(' + 100 / xMax + '%)' })
    }
  }
}

function drawDate(dateString: string) {
  const d = new Date(dateString); // todo move to Day and proxy
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  const str = days[d.getDay()] + ' ' + d.getDate() + ' ' + months[d.getMonth()];
  P.$DATE.html(str);
}

function drawCoursesPortrait(day: TExpanded[]) {
  const matrix = createMatrix();
  let maxColumn = 3;
  for (const course of day) {
    const $course = $(P.html.COURSE);
    const pos = getEmptySpace(matrix, course);
    $course.css({
      'grid-row-start': pos.y1 + "",
      'grid-row-end': pos.y2 + "",
      'grid-column-start': pos.x1 + 2 + "",
      'grid-column-end': pos.x2 + 2 + ""
    });
    maxColumn = Math.max(pos.x2 + 2, maxColumn);
    if (course.blacklisted) $course.addClass('disabled');
    else $course.css('background', course.background);
    if (course.unavailable) $course.addClass('unavailable');

    const $textWrapper = $(P.html.COURSE_CONTENT_WRAPPER);
    const $textContent = $(P.html.COURSE_CONTENT);
    $textContent.html(course.title);
    $textWrapper.append($textContent);
    $course.append($textWrapper);
    P.$COURSE_CONTAINER.append($course);
  }
  $(P.$.HOUR_LINES).css('grid-column-end', maxColumn + "");
}

function drawCoursesLandscape(day: TExpanded[], dayNumber: number) {
  const $day = $(P.html.LANDSCAPE_DAY);
  $day.css({
    gridColumn: dayNumber + 1 + "",
  });
  P.$COURSE_CONTAINER.append($day);

  for (const course of day) {
    if (course.blacklisted) continue;
    const $course = $(P.html.COURSE);
    if (course.unavailable) $course.addClass('unavailable');

    const startRow = (course.start.hour - P.START_HOUR) * 4 + course.start.minute / 15;
    const endRow = (course.end.hour - P.START_HOUR) * 4 + course.end.minute / 15;
    $course.css({
      background: course.background,
      'grid-row-start': startRow + 1 + "",
      'grid-row-end': endRow + 1 + ""
    });

    const $textWrapper = $(P.html.COURSE_CONTENT_WRAPPER);
    const $textContent = $(P.html.COURSE_CONTENT);
    $textContent.html(course.title);
    $textWrapper.append($textContent);
    $course.append($textWrapper);
    $day.append($course)
  }
  landscapeXalign($day);
}

type DrawMode = 'portrait' | 'landscape';
let drawMode: DrawMode = 'portrait';

function setDrawMode(mode: DrawMode) {
  drawMode = mode;
}

function drawLandscape(dateString: string, storage?: TStore) {
  P.$LANDSCAPE_CURRENT_DAY.css('grid-column', Day.day(dateString) + 1 + "");
  if (storage) {
    dateString = Day.monday(dateString);
    for (let i = 1; i < 6; i++) {
      const day = expandData(storage[dateString]);
      drawCoursesLandscape(day, i);
      dateString = Day.add(dateString, 1);
    }
  }
}

function drawPortrait(dateString: string, storage?: TStore) {
  if (storage) {
    const day = expandData(storage[dateString]);
    drawCoursesPortrait(day);
  }
}

function draw(dateString: string, storage?: TStore) {
  Notification.hide('calendarError');
  $(P.$.COURSE).remove();
  $(P.$.LANDSCAPE_DAY).remove();
  $(P.$CALENDAR).removeClass('portrait landscape').addClass(drawMode);
  if (drawMode === 'landscape') drawLandscape(dateString, storage);
  else drawPortrait(dateString, storage);
  if (storage !== null) {
    P.$BUTTON_PREV.removeClass('disabled');
    P.$BUTTON_NEXT.removeClass('disabled');
  }
  drawDate(dateString);
}

drawLines();

export const CalendarDrawer = {
  draw: draw,
  setDrawMode: setDrawMode
}
