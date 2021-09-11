import { Storage } from './storage';
import { ExpandedCourse } from './calendarData';

export interface Filter {
  key: string;
  display: string;
  variable: { [key: string]: string; [key: number]: string };
  subfilters: Filter[];
  whitelist?: string[];
  blacklist?: string[];
};

let loadedFilter: Filter;
let filterName = '';

function checkList(course: ExpandedCourse, list: string[]) {
  const content = course.title.split('<br>')
  for (const ligne of content) {
    for (const el of list) if (expr_test(ligne, el)) return true;
  }
  return false
}

function expr_test(str: string, expression: string) {
  const replacement_regex = /\{[^\}]+\}/g
  const matches = expression.match(replacement_regex)
  if (matches) for (const match of matches) {
    const variable = match.replace('{', '').replace('}', '')
    if (Storage.has(variable)) expression = expression.replace(match, Storage.get(variable))
  }
  const regexp = new RegExp(expression)
  return regexp.test(str)
}

function fetchJSON(url: string) {
  return new Promise<Object>(function(resolve, reject) {
    $.getJSON(url, function(json: Object) {
      resolve(json);
    }, reject);
  });
}

function filterElement(el: ExpandedCourse, filter = loadedFilter): boolean { // returns bool blacklisted (recursive)
  if (!(Storage.has(filter.key)) || Storage.get(filter.key) === '0') return false; // filtre désactivé ou inexistant

  if(filter.whitelist && filter.blacklist) {
    let whitelisted = checkList(el, filter.whitelist);
    let blacklisted = checkList(el, filter.blacklist);
    if (!whitelisted && blacklisted) return true;
  }

  if (typeof filter.subfilters !== 'undefined') {
    for (const subfilter of filter.subfilters) {
      if (filterElement(el, subfilter)) return true; // a été blacklisté
    }
  }
  return false;
}

async function loadFilter(name: string) {
  if (name === filterName && name !== '') return Promise.resolve(loadedFilter);
  filterName = name;
  loadedFilter = <Filter>await fetchJSON('filters/' + filterName + '.json');
  return loadedFilter;
}

export const Filter = {
  filterElement,
  loadFilter,
  get loadedFilter(): Filter {
    return loadedFilter;
  }
};
