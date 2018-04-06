var array = [{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }]
thisArg = { "a": 1, "b": 2 }

isEqual = function (myObject) {
  var myObjectKeys = Object.keys(myObject);
  var myObjectValues = Object.values(myObject);
  var sourceKeys = Object.keys(thisArg);
  var sourceValues = Object.values(thisArg);

  //If object has fewer keys than source
  if (myObjectKeys.length < sourceKeys.length) {
    return;
  }

  //if arrays contain different keys or values, not equivalent
  for (var i=0; i < sourceKeys.length; i++) { //loop over source keys
    console.log("myObjectKeys[i] %o sourceKeys[i] %o", myObjectKeys[i], sourceKeys[i]);
    console.log("myObjectValues[i] %o sourceValues[1] %o", myObjectValues[i], sourceValues[i]);
    for (var j=0; j< myObjectKeys.length; j++) {

      if ((sourceKeys[i] == myObjectKeys[j]) && (sourceValues[i] == myObjectValues[j])) {
        break; // found object keys that matched source keys, break object loop and test next source key/object pair
      } else if (j == myObjectKeys.length - 1) {
        return; // looked through all ojbectKeys and never found the corresponding source key, so no match
      }
    }
  }

  //Object is equivalent to source
  return myObject;
}
