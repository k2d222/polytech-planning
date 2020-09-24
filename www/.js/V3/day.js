import { Proxy as P } from './proxy.js'

var date = new Date();
addDay(date, 0); // sunday becomes monday

function addDay(d, days) {
  d.setDate(d.getDate() + days);
  if (d.getDay() === 0 || d.getDay() === 6) {
    if (days >= 0) addDay(d, 1);
    else addDay(d, -1);
  }
  return d;
}

function add(count) {
  date.setDate(date.getDate() + count);
  if (date.getDay() === 0 || date.getDay() === 6) {
    if (count >= 0) addDay(date, 1);
    else addDay(date, -1);
  }
  return date.toDateString();
}

function today() {
  date = new Date();
  addDay(date, 0); // dimanche devient lundi
  if (date.getHours() >= P.TODAY_MAX_HOUR) // si passé TODAY_MAX_HOUR, passe a lendemain matin
    date.setHours(date.getHours() + 24 - P.TODAY_MAX_HOUR + P.START_HOUR);
  return date.toDateString();
}

export var Day = (function() {

  return {
    today: today,
    date: function(dateString) {
      return new Date(dateString).getDate();
    },
    month: function(dateString) {
      return new Date(dateString).getMonth();
    },
    day: function(dateString) {
      return new Date(dateString).getDay();
    },
    firstMondayOfMonth: function(dateString) {
      let d = new Date(dateString);
      d.setDate(1);
      let day = d.getDay();
      let diff = d.getDate() + (day == 0 ? 1 : day == 1 ? 0 : 7 - day);
      d.setDate(diff);
      return d.toDateString();
    },
    firstDayOfMonth: function(dateString) {
      let d = new Date(dateString);
      d.setDate(1);
      addDay(d, 0);
      return d.toDateString();
    },
    monday: function(dateString) {
      let d = new Date(dateString);
      let day = d.getDay();
      let diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
      d.setDate(diff);
      return d.toDateString();
    },
    add: function(dateString, days) {
      var d = new Date(dateString);
      addDay(d, days);
      return d.toDateString();
    }
  };

})();
