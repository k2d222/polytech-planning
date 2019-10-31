import { Storage } from './storage.js';
import { Proxy as P } from './proxy.js'

var loadedFilter;
var filterName = '';

function checkList(classe, list) {
  var contenu = classe.title.split('<br>')
  for(var ligne of contenu) {
    for(var el of list) if(expr_test(ligne, el)) return true
  }
  return false
}

function expr_test(str, expression) {
  var replacement_regex = /\{[^\}]+\}/g
  var matches = expression.match(replacement_regex)
  if(matches) for(var match of matches) {
    var variable = match.replace('{', '').replace('}', '')
    if(Storage.has(variable)) expression = expression.replace(match, Storage.get(variable))
  }
  var regexp = new RegExp(expression)
  return regexp.test(str)
}

function fetchJSON(url) {
  return new Promise(function(resolve, reject) {
    $.getJSON(url, function(json) {
      resolve(json);
    }, reject);
  });
}

function filterElement(el, filter=loadedFilter) { // returns bool blacklisted (recursive)
  var to_return = false; // whitelisté par défaut
  if(!(Storage.has(filter.key)) || Storage.get(filter.key) === 'false') return false;
  if(typeof filter.whitelist !== 'undefined') {
    if( checkList(el, filter.whitelist) ) to_return = false;
    else if(typeof filter.blacklist !== 'undefined') {
      if( checkList(el, filter.blacklist) ) return true; // TODO filtre doit matcher la whitelist ??
    }
  }

  if(typeof filter.subfilters !== 'undefined') {
    for(var subfilter of filter.subfilters) {
      if(this.filterElement(el, subfilter) === true) return true; // a été blacklisté
    }
  }
  return to_return;
}

function loadFilter(name) {
  if(name === filterName && name !== '') return Promise.resolve(loadedFilter);
  filterName = name;
  return fetchJSON('filters/' + filterName + '.json')
  .then(function(filter) {
    loadedFilter = filter;
    return filter;
  })
}

export var Filter = (function () {

  return {
    filterElement:filterElement,
    loadFilter:loadFilter,
    get loadedFilter() {
      return loadedFilter;
    }
  }

})();
