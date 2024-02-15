export const Proxy = {

  // APP_VERSION: 10060,
  STORAGE_VERSION: '9',

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

  $ABOUT_CONTAINER: $('#about'),

  $THEME_STYLESHEET: $('#themeStylesheet'),

  $GIF_CONTAINER: $('#gif-container'),
  $GIF_IMG: $('#gif-container img'),

  INAPPBROWSER_SETTINGS: 'location=no,zoom=no,hidden=yes,shouldPauseOnSuspend=no',
  INAPPBROWSER_EXECUTE_TIMEOUT: 5000,

  GIF_URL: 'https://polytech.thissma.fr/gifs/',
  GIF_URL_PHP: 'https://polytech.thissma.fr/nicegif.php',

  START_HOUR: 8,
  END_HOUR: 20,

  TODAY_MAX_HOUR: 21,

  $: {
    COURSE: '.classe',
    LANDSCAPE_DAY: '#heures .day',
    HOUR_LINES: '#heures .ligne',
    SETTINGS_FILTER: '#settings .filtre'
  },

  err: {
    BUTTON_NOT_FOUND: 'button not found',
    WEBVIEW_NOT_LOADED: 'webview not loaded',
    REQUEST_CANCELLED: 'request cancelled',
    CALENDAR_ERROR: 'calendar error'
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
    VERSION: 'version',
    ACKNOWLEDGED: 'ack'
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

  theme: {
    DEFAULT: 'default'
  },

  url: {
    'peip1': 'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=95e000515dff41bf090dab728096f2e573fcc9d06b8b96dc3d93d2cb352384cb399297d2f580424e3370b849c2585add30bd1419659aefba2515ad45d7d6b2e60a177ea3fca78ebb8d09fcc527c2eb35c5c1eac4c431ea42a7b539b6ae09851fc8a517a39539834b65d418562645b25f6bed5e6629c39c1c84424e4705c803ab,1',
    'peip2': 'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=95e000515dff41bf090dab728096f2e573fcc9d06b8b96dc3d93d2cb352384cbd00d9c13ec0fd521cac74b6bf5c833e330bd1419659aefba2515ad45d7d6b2e60a177ea3fca78ebb8d09fcc527c2eb35c5c1eac4c431ea42a7b539b6ae09851fc8a517a39539834b65d418562645b25f6bed5e6629c39c1c84424e4705c803ab,1',
    // Link to PeiP1 was put for PeiPC as it doesn't exist anymore, but won't take any risks breaking the code
    'peipc': 'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=95e000515dff41bf090dab728096f2e573fcc9d06b8b96dc3d93d2cb352384cb399297d2f580424e3370b849c2585add30bd1419659aefba2515ad45d7d6b2e60a177ea3fca78ebb8d09fcc527c2eb35c5c1eac4c431ea42a7b539b6ae09851fc8a517a39539834b65d418562645b25f6bed5e6629c39c1c84424e4705c803ab,1',
    'et3':   'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=95e000515dff41bf090dab728096f2e573fcc9d06b8b96dc3d93d2cb352384cbace4f64bd408b45ca39029774ea4690830bd1419659aefba2515ad45d7d6b2e60a177ea3fca78ebb8d09fcc527c2eb35c5c1eac4c431ea42a7b539b6ae09851fc8a517a39539834b65d418562645b25f6bed5e6629c39c1c84424e4705c803ab,1',
    'et4':   'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=95e000515dff41bf090dab728096f2e573fcc9d06b8b96dc3d93d2cb352384cb35e41c4b98e22a43081171ffdd37272330bd1419659aefba2515ad45d7d6b2e60a177ea3fca78ebb8d09fcc527c2eb35c5c1eac4c431ea42a7b539b6ae09851fc8a517a39539834b65d418562645b25f6bed5e6629c39c1c84424e4705c803ab,1',
    'et5': 'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=95e000515dff41bf090dab728096f2e573fcc9d06b8b96dc3d93d2cb352384cb64121911e2c1a69390ec26723e2e297930bd1419659aefba2515ad45d7d6b2e60a177ea3fca78ebb8d09fcc527c2eb35c5c1eac4c431ea42a7b539b6ae09851fc8a517a39539834b65d418562645b25f6bed5e6629c39c1c84424e4705c803ab,1',
    'app3': 'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=95e000515dff41bf090dab728096f2e573fcc9d06b8b96dc3d93d2cb352384cbe5a46c35a1039e66043c090545ef293130bd1419659aefba2515ad45d7d6b2e60a177ea3fca78ebb8d09fcc527c2eb35c5c1eac4c431ea42a7b539b6ae09851fc8a517a39539834b65d418562645b25f6bed5e6629c39c1c84424e4705c803ab,1',
    'app4': 'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=95e000515dff41bf090dab728096f2e573fcc9d06b8b96dc3d93d2cb352384cb78c399e551cf1e254b2633314a589c4b30bd1419659aefba2515ad45d7d6b2e60a177ea3fca78ebb8d09fcc527c2eb35c5c1eac4c431ea42a7b539b6ae09851fc8a517a39539834b65d418562645b25f6bed5e6629c39c1c84424e4705c803ab,1',
    'app5': 'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=95e000515dff41bf090dab728096f2e573fcc9d06b8b96dc3d93d2cb352384cb3a141ffc0a5e64859feebb48761c158a30bd1419659aefba2515ad45d7d6b2e60a177ea3fca78ebb8d09fcc527c2eb35c5c1eac4c431ea42a7b539b6ae09851fc8a517a39539834b65d418562645b25f6bed5e6629c39c1c84424e4705c803ab,1',
  },
}
