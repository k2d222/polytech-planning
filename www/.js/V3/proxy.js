export const Proxy = {

  // APP_VERSION: 10060,
  STORAGE_VERSION: '7',

  $CALENDAR: $('#calendar'),
  $CALENDAR_CONTENT: $('#calendar .content'),

  $LANDSCAPE_CURRENT_DAY: $('#landscapeCurrentDay'),

  $COURSE_CONTAINER: $('#heures'),

  $DATE_CONTAINER: $('nav div'),
  $DATE: $('nav span'),

  $DATE_PICKER_CONTAINER: $('#datePicker'),
  $DATE_PICKER: $('#datePicker .dates'),
  $DATE_PICKER_PREV: $('#datePicker .prev'),
  $DATE_PICKER_NEXT: $('#datePicker .next'),
  $DATE_PICKER_MONTH: $('#datePicker .month'),

  $BUTTON_PREV: $('.veille'),
  $BUTTON_NEXT: $('.lendemain'),
  $BUTTON_SETTINGS: $('button.settings'),


  $SETTINGS_CONTAINER: $('#settings'),
  $SETTINGS_FILTER: $('#settings .filters'),
  $SETTINGS_APPEARANCE: $('#settings .appearance'),
  $SETTINGS_CANCEL: $('#settings .cancel'),
  $SETTINGS_SAVE: $('#settings .save'),
  $SETTINGS_RESET: $('#settings .reset'),
  $SETTINGS_THEME: $('#settings .theme'),
  $SETTINGS_GRADE: $('.classeDropDown'),

  $THEME_STYLESHEET: $('#themeStylesheet'),

  $GIF_CONTAINER: $('#gif-container'),
  $GIF_IMG: $('#gif-container img'),

  INAPPBROWSER_SETTINGS: 'location=no,zoom=no,hidden=yes,shouldPauseOnSuspend=no',
  INAPPBROWSER_EXECUTE_TIMEOUT: 5000,

  GIF_URL: 'https://polytech.thissma.fr/gifs/',
  GIF_URL_PHP: 'https://polytech.thissma.fr/nicegif.php',

  START_HOUR: 8,
  END_HOUR: 20,

  $: {
    COURSE: '.classe',
    LANDSCAPE_DAY: '#heures .day',
    HOUR_LINES: '#heures .ligne',
    SETTINGS_FILTER: '#settings .filtre'
  },

  err: {
    BUTTON_NOT_FOUND: 'button not found',
    WEBVIEW_NOT_LOADED: 'webview not loaded'
  },

  html: {
    HOUR: '<div class="heure"></div>',
    HOUR_LINE: '<div class="ligne"></div>',
    COURSE: '<div class="classe"></div>',
    COURSE_CONTENT_WRAPPER: '<div class="wrapper"></div>',
    COURSE_CONTENT: '<div class="content"></div>',
    LANDSCAPE_DAY: '<div class="day"></div>',
    SETTINGS_CHECKBOX: '<input type=checkbox checked/>',
  },

  storage: {
    GRADE: 'classe',
    SAVED_DAYS: 'daysCache',
    THEME: 'theme',
    VERSION: 'version'
  },

  day: {
    MON: 1, TUE: 2, WED: 3, THU: 4, FRI: 5, SAT: 6, SUN: 0,
  },

  script: {
    INJECTION: 'injection.js',
    JQUERY: 'jquery.js'
  },

  dir: {
    THEMES: 'css/themes/'
  },

  com: {
    TIMEOUT_AFTER_BUTTON_PRESS: 200,
    DEFAULT_UPDATE_INTERVAL: 200,
    FUNCTION_IS_CONNECTED: 'isConnected()'
  },

  url: {
    'peip1': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f87a9882e74a3f76e0b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
    'peip2': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f8e7485d9bee2c84dbb760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
    'peipc': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f87b035ebf272a6adfb760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
    'peipd': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f80737eed5619a0432b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
    'et3': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f8a296a2ffb0037d5bb760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
    'et4': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f8f04f4a6b90e17f71b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
    'et5': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f8c8df41a0a7ef48f7b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
    'app3': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f8b0da01d9866c6b06b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
    'app4': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f824f1ecce698039f3b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
    'app5': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f83efacf3364b3523fb760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
  },
}
