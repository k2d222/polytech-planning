import { Proxy as P } from './proxy'

function addDay(d: Date, days: number) {
  d.setDate(d.getDate() + days);
  if (d.getDay() === 0 || d.getDay() === 6) {
    if (days >= 0) addDay(d, 1);
    else addDay(d, -1);
  }
  return d;
}

function today() {
  const date = new Date();
  if (date.getHours() >= P.TODAY_MAX_HOUR) // si passé TODAY_MAX_HOUR, passe a lendemain matin
    date.setHours(date.getHours() + 24 - P.TODAY_MAX_HOUR + P.START_HOUR);
  addDay(date, 0); // dimanche devient lundi
  return date.toDateString();
}

export const Day = (function() {

  return {
    today,
    date: function(dateString: string) {
      return new Date(dateString).getDate();
    },
    month: function(dateString: string) {
      return new Date(dateString).getMonth();
    },
    day: function(dateString: string) {
      return new Date(dateString).getDay();
    },
    firstMondayOfMonth: function(dateString: string) {
      const d = new Date(dateString);
      d.setDate(1);
      const day = d.getDay();
      const diff = d.getDate() + (day == 0 ? 1 : day == 1 ? 0 : 7 - day);
      d.setDate(diff);
      return d.toDateString();
    },
    firstDayOfMonth: function(dateString: string) {
      const d = new Date(dateString);
      d.setDate(1);
      addDay(d, 0);
      return d.toDateString();
    },
    monday: function(dateString: string) {
      const d = new Date(dateString);
      const day = d.getDay();
      const diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
      d.setDate(diff);
      return d.toDateString();
    },
    add: function(dateString: string, days: number) {
      var d = new Date(dateString);
      addDay(d, days);
      return d.toDateString();
    }
  };

})();
