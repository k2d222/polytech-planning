import { Proxy as P } from './proxy'
import { Storage } from './storage'
import CalendarError from './error'

function set(themeName: string) {
  if (themeName) {
    P.$THEME_STYLESHEET.attr('href', P.dir.THEMES + themeName + '.css');
  }
  else {
    P.$THEME_STYLESHEET.attr('href', P.dir.THEMES + P.theme.DEFAULT + '.css');
  }
}

P.$SETTINGS_THEME.change(function() {
  const $sel = P.$SETTINGS_THEME.children().filter(':checked');
  const val = $sel.attr('value');
  if(val) {
    Storage.set(P.storage.THEME, val);
    set(val);
  }
  else throw new CalendarError("missing attribute 'value' on settings element");
})


export const Theme = {
  set
};
