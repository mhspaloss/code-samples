function myReplace(str, before, after) {

  var arr = str.split(' ');
  console.log("arr = %o", arr);
  var i = arr.indexOf(before);
  console.log("arr[i][0] = %o, arr[i][0].toUpperCase() is %o", arr[i][0], arr[i][0].toUpperCase());
  var newAfter = after;
  if (arr[i][0] === arr[i][0].toUpperCase()) {
    newAfter = after[0].toUpperCase() + after.substring(1);
  }
  arr.splice(i, 1, newAfter);
  var newStr = arr.join(' ');
  console.log("arr = %o", arr);
  console.log("newStr = %o", newStr);
  return newStr;
}
