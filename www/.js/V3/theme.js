import { Proxy as P } from './proxy.js'
import { Storage } from './storage.js'

function set(themeName) {
  if (themeName) {
    P.$THEME_STYLESHEET.attr('href', P.dir.THEMES + themeName + '.css');
  }
  else {
    P.$THEME_STYLESHEET.attr('href', P.dir.THEMES + P.theme.DEFAULT + '.css');
  }
}

P.$SETTINGS_THEME.change(function() {
  let $sel = P.$SETTINGS_THEME.children().filter(':checked');
  let val = $sel.attr('value');
  Storage.set(P.storage.THEME, val);
  set(val);
})


export var Theme = {
  set: set
};
