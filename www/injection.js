console.log('successfully injected script to webview');

var startTimestamp = Date.now();
var lastUpdateTimestamp = Date.now();
var packets = [];

setInterval(function() {
  lastUpdateTimestamp = Date.now();
  console.log('timestamp:', lastUpdateTimestamp);
}, 1000);

function isConnected() {
  let date = Date.now();
  if ((date - startTimestamp) < 10000) return true;
  return (date - lastUpdateTimestamp) < 5000;
  // if( $('.x-adeDialog').length > 0 ) {
  //   console.warn('session over. isConnected false. button clicked');
  //   // $('.x-adeDialog').find('button').click();
  //   return false;
  // }
  // return true;
}

function HTMLDecode(str) {
  return str.replace(/&amp;/g, '&').replace(/&nbsp;/g, " ")
}

function range(val, min, max, newMin, newMax) {
  return (val - min) / (max - min) * (newMax - newMin) + newMin;
}

function nearestValue(val, array) {
  return array.reduce((nearest, current) => {
    if (nearest === val) return nearest
    if (Math.abs(current - val) < Math.abs(nearest - val)) return current
    return nearest
  })
}

function datestringFromButton($btn) {
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  let text = $btn.html().split(' ');
  const day = parseInt(text[0]);
  const month = months.indexOf(text[1]);
  const year = parseInt(text[2]);
  let d = new Date(year, month, day);
  return d.toDateString();
}

function getCurrentDate(date) {
  let $btn = $('#x-auto-25 .x-btn-pressed button');
  return datestringFromButton($btn);
}

function minifyData(week) {
  var minifiedDays = [[], [], [], [], []];
  for (let i in week) {
    for (let j in week[i]) {
      if ('start' in week[i][j] && 'end' in week[i][j]) {
        minifiedDays[i][j] = [
          [week[i][j].start.hour, week[i][j].start.minute],
          [week[i][j].end.hour, week[i][j].end.minute],
          week[i][j].title,
          week[i][j].background
        ];
      }
    }
  }
  return minifiedDays;
}

function parseThisWeek() {
  var thisWeek = [[], [], [], [], []];
  var gridWidth = $('.grilleData').width();
  var gridHeight = $('.grilleData').height();
  var possibleMinutes = [0, 15, 30, 45];
  for (var data of $(".grilleData").children()) {
    var $data = $(data);
    var classe = {
      start: {},
      end: {},
      title: "",
      duration: 0,
      background: " #EF5350",
      next: 0,
      previous: 0,
      blacklisted: false
    }
    classe.title = HTMLDecode($data.find('b').parent().html() + "");
    if (classe.title === undefined) classe.title = "inconnu !";
    else classe.title = classe.title.replace(/<b [^>]+>/g, '<b>');
    classe.background = $data.children('table').css('background-color');
    classe.start.time = range($data.position().top, 0, gridHeight, 8, 20);
    classe.start.time = Math.round(classe.start.time * 10) / 10;
    classe.start.hour = Math.floor(classe.start.time);
    classe.start.minute = Math.round((classe.start.time - classe.start.hour) * 10);
    classe.start.minute = range(classe.start.minute, 0, 10, 0, 60);
    classe.start.minute = nearestValue(classe.start.minute, possibleMinutes);
    classe.end.time = range($data.position().top + $data.children().eq(0).height(), 0, gridHeight, 8, 20);
    classe.end.time = Math.round(classe.end.time * 10) / 10;
    classe.end.hour = Math.floor(classe.end.time);
    classe.end.minute = Math.round((classe.end.time - classe.end.hour) * 10);
    classe.end.minute = range(classe.end.minute, 0, 10, 0, 60);
    classe.end.minute = nearestValue(classe.end.minute, possibleMinutes);
    classe.duration = classe.end.time - classe.start.time;
    classe.jour = Math.floor($data.position().left / $('.grilleData').width() * 5 + .1); // TODO pas propre
    thisWeek[classe.jour].push(classe);
  }

  let mini = minifyData(thisWeek);

  // pervent bug when too much data is sent at once

  let obj = {
    date: getCurrentDate(),
    days: mini
  };
  const str = JSON.stringify(obj);
  if (str.length > 10000) return packetify(str);
  return obj;
}

function packetify(str) {
  console.log('packetify');
  const packetSize = 5000;
  const size = str.length
  for (var i = 0; i < size; i += packetSize) {
    packets.unshift(str.substring(i, i + packetSize));
  }
  return { packetified: true };
}

function getPacket() {
  if (packets.length === 0) return false;
  else return packets.pop();
}

function clickButton(dateString) {
  for (let btn of $('#x-auto-25 button')) {
    let $btn = $(btn);
    let btnDatestring = datestringFromButton($btn);
    if (btnDatestring === dateString) {
      $btn.click();
      return true;
    }
  }
  return false;
}

function isWeekLoaded() {
  if ($('.gwt-PopupPanel').length > 0) { // spinner is still present
    return false;
  }
  if ($(".grilleData").children().length > 0 || $('.grilleDispo table#unavail').length > 0) {
    return true;
  }
  if ($(".grilleData").length == 1) { // week loaded but empty
    return true;
  }
  return false;
}

window.isConnected = isConnected;
window.isWeekLoaded = isWeekLoaded;
window.parseThisWeek = parseThisWeek;
window.clickButton = clickButton;
window.getCurrentDate = getCurrentDate;
window.getPacket = getPacket;
