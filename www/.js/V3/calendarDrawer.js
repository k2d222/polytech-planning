import { Day } from './day.js';
import { Filter } from './filter.js';
import { Notification } from './notification.js';
import { Proxy as P } from './proxy.js'

function drawLines() {
  const n_hours = P.END_HOUR - P.START_HOUR;
  for (var i = 0; i < n_hours; i++) {
    const hour = i + P.START_HOUR;
    let $hour = $(P.html.HOUR);
    $hour.html(hour + ' h');
    $hour.css({
      gridRow: (i*4+1) + ""
    })
    P.$COURSE_CONTAINER.append($hour);
    var $line = $(P.html.HOUR_LINE);
    $line.css({
      gridRow: (i*4+1) + ""
    })
    P.$COURSE_CONTAINER.append($line);
  }
}

function expandData(mini) {
  let expanded = [];
  for(let i in mini) {
    expanded[i] = {
      start:{ hour:mini[i][0][0], minute:mini[i][0][1] },
      end:  { hour:mini[i][1][0], minute:mini[i][1][1] },
      title:mini[i][2], background:mini[i][3],
    };
    expanded[i].blacklisted = Filter.filterElement(expanded[i]);
  }
  expanded.sort((a, b) => {return !b.blacklisted ? 1 : -1}); // not blacklisted comes first
  return expanded;
}

function createMatrix() {
  let matrix = []
  const n_hours = P.END_HOUR - P.START_HOUR;
  for(let i = 0; i < 4 * n_hours; i++) {
    matrix[i] = [];
  }
  return matrix;
}

function getEmptySpace(matrix, el) {
  let startRow = (el.start.hour-P.START_HOUR)*4 + el.start.minute / 15
  let endRow   = (el.end.hour  -P.START_HOUR)*4 + el.end.minute   / 15
  let width = el.blacklisted ? 1 : 2;
  let y = 0;
  let spaceNotFound = true;
  while (matrix[startRow][y] === true) y++;

  let checkYOffset = (y) => {
    for(let j = y; j < y + width; j++) {
      for(let i = startRow; i < endRow; i++) {
        if(typeof matrix[i][j] === 'undefined') matrix[i][j] = false;
        if(matrix[i][j] === true) return false;
      }
    }
    return true
  };
  while (!checkYOffset(y)) y++;

  for(let j = y; j < y + width; j++) { // fill empty space
    for(let i = startRow; i < endRow; i++) {
      matrix[i][j] = true;
    }
  }

  return {
    'grid-row-start': startRow + 1 + "",
    'grid-row-end': endRow + 1 + "",
    'grid-column-start': y + 2 + "",
    'grid-column-end': y + 2 + width + ""
  }
}

function landscapeXalign($el, $day) {
  let start = parseInt( $el.css('grid-row-start') );
  let end   = parseInt( $el.css('grid-row-end') );
  let collisions = [$el];

  for (let course of $day.children()) {
    let $other = $(course);
    let otherStart = parseInt( $other.css('grid-row-start') );
    let otherEnd = parseInt( $other.css('grid-row-end') );
    if(  start == otherStart || end == otherEnd
      || start > otherStart && start < otherEnd
      || end   > otherStart && end   < otherEnd
      || start <  otherStart && end  >  otherEnd
      || start >  otherStart && end  <  otherEnd
    ) {
      collisions.push($other);
    }
  }
  let collisionCount = collisions.length;
  for (let i in collisions) {
    collisions[i].css({
      'left': 100 / collisionCount * i + '%',
      'width': 'calc(' + 100 / collisionCount + '% + 1px)' // 1px for the css border
      // 'width': 100 / collisionCount + '%'
    });
  }
  collisions[collisions.length-1].css('width', 100 / collisionCount + '%');
}

function drawDate(dateString) {
  let d = new Date(dateString); // todo move to Day and proxy
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  const str = days[d.getDay()] + ' ' + d.getDate() + ' ' + months[d.getMonth()];
  P.$DATE.html(str);
}

function drawCourses(day) {
  let matrix = createMatrix();
  let maxColumn = 3;
  for(let course of day) {
    let $course = $(P.html.COURSE);
    let position = getEmptySpace(matrix, course);
    $course.css(position);
    let col = parseInt(position['grid-column-end']);
    if(col > maxColumn) maxColumn = col;
    if(course.blacklisted) $course.addClass('disabled');
    else $course.css('background', course.background);

    let $textWrapper = $(P.html.COURSE_CONTENT_WRAPPER);
    let $textContent = $(P.html.COURSE_CONTENT);
    $textContent.html(course.title);
    $textWrapper.append($textContent);
    $course.append($textWrapper);
    P.$COURSE_CONTAINER.append($course);
  }
  $(P.$.HOUR_LINES).css('grid-column-end', maxColumn + "");
}

function drawCoursesLandscape(day, dayNumber) {
  let $day = $(P.html.LANDSCAPE_DAY);
  $day.css({
    gridColumn: dayNumber+1 + "",
  });
  P.$COURSE_CONTAINER.append($day);

  let matrix = createMatrix();

  for(let course of day) {
    if(course.blacklisted) continue;
    let $course = $(P.html.COURSE);

    const startRow = (course.start.hour-P.START_HOUR)*4 + course.start.minute / 15;
    const endRow   = (course.end.hour  -P.START_HOUR)*4 + course.end.minute   / 15;
    $course.css({
      background: course.background,
      'grid-row-start': startRow + 1 + "",
      'grid-row-end': endRow + 1 + ""
    });
    landscapeXalign($course, $day);

    let $textWrapper = $(P.html.COURSE_CONTENT_WRAPPER);
    let $textContent = $(P.html.COURSE_CONTENT);
    $textContent.html(course.title);
    $textWrapper.append($textContent);
    $course.append($textWrapper);
    $day.append($course)
  }
}

let drawMode = 'portrait';

function setDrawMode(mode) {
  drawMode = mode;
}

function drawLandscape(dateString, storage) {
  P.$LANDSCAPE_CURRENT_DAY.css('grid-column', Day.day(dateString)+1 + "");
  if(storage !== null) {
    dateString = Day.monday(dateString);
    for (var i = 1; i < 6; i++) {
      let day = expandData( storage[dateString] );
      drawCoursesLandscape(day, i);
      dateString = Day.add(dateString, 1);
    }
  }
}

function drawPortrait(dateString, storage) {
  if(storage !== null) {
    let day = expandData( storage[dateString] );
    drawCourses(day);
  }
}

function draw(dateString, storage=null) {
  Notification.hide('calendarError');
  $(P.$.COURSE).remove();
  $(P.$.LANDSCAPE_DAY).remove();
  $(P.$CALENDAR).removeClass('portrait landscape').addClass(drawMode);
  if(drawMode === 'landscape') drawLandscape(dateString, storage);
  else drawPortrait(dateString, storage);
  if(storage !== null) {
    P.$BUTTON_PREV.removeClass('disabled');
    P.$BUTTON_NEXT.removeClass('disabled');
  }
  drawDate(dateString);
}


drawLines();

export const CalendarDrawer = {
  draw: draw,
  setDrawMode:setDrawMode
}
