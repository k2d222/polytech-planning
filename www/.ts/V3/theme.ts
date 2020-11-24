import { Proxy as P } from './proxy'
import { Storage } from './storage'

function set(themeName: string) {
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
  if(val) {
    Storage.set(P.storage.THEME, val);
    set(val);
  }
  else throw new Error("settings element is missing 'value' attribute.");
})


export var Theme = {
  set: set
};
