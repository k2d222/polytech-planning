function checkDiff(dateString) { //TODO
  var diff = {
    added:[],
    removed:[],
  }
  var last_j = 0;
  for(var i = 0; i < storage[dateString].length; i++) {
    var identical = false;
    var el1 = storage[dateString][i];
    for(var j = last_j; j < cache[dateString].length; j++) {
      var el2 = cache[dateString][j];
      if(el1[2] !== el2[2]) continue; // title different
      if(el1[0][0] !== el2[0][0] || el1[0][1] !== el2[0][1]) continue; // startTime different
      if(el1[1][0] !== el2[1][0] || el1[1][1] !== el2[1][1]) continue; // endTime different
      identical = true;
      for(var k = last_j; k < j; k++) diff.removed.push(k); // removed elements
      last_j = ++j;
      break;
    }
    if(!identical) diff.added.push(i); // added elements
  }
  if(diff.added.length === 0 && diff.removed.length === 0 ) return false;
  return diff;
}

function dispDiffMessage(diff, dateString) {
  debugger;
  $('#diff-message').show();
  $('#diff-message .date').html(getDateStr(dateString));
  $added = $('#diff-message .added .content').html('');
  $removed = $('#diff-message .removed .content').html('');
  var get$el = (el) => {
    var $el = $('<div class="classe"></div>');
    $el.append('<div class="startEnd">'
    + el.start.hour + 'h' + (el.start.minute ? el.start.minute : '')
    + ' - '
    + el.end.hour + 'h' + (el.end.minute ? el.end.minute : '')
    + '</div>')
    $el.append('<div class="content">' + el.title + '</div>');
  }
  var expCache = expandData(cache[dateString]);
  var expStorage = expandData(storage[dateString]);
  for(var added of diff.added) {
    if(!expStorage[added].blacklisted) $added.append(get$el(expStorage[added]));
  }
  for(var removed of diff.removed) {
    if(!expCache[removed].blacklisted) $removed.append(get$el(expCache[removed]));
  }
}
