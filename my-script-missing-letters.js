
function fearNotLetter(str) {

//  arr = str.split('');
  i=0;

  while (i < str.length-1) {  // loop through the array while there are more elements
    var shouldBeNext = str.charCodeAt(i) + 1;
    if (shouldBeNext != str.charCodeAt(i+1)) {
      return String.fromCharCode(shouldBeNext);
    }
    i++;
  }
  return undefined;
}
