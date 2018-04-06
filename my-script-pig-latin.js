function translatePigLatin(str) {

  // Find first instance of vowel in substring
  const vowelArray = ['a', 'e', 'i', 'o', 'u' ];

  var index = vowelArray.reduce(function (acc, currentValue) {
    console.log(str.indexOf(currentValue));
    var i = str.indexOf(currentValue); // get index of first value of each vowel
    console.log("i = %o", i);
    if (i == -1) { //vowel not found, return acc unchanged
      return acc;
    }
    else {
      return Math.min(i, acc);
    }
  }, 1000);

  // If vowel is the first character, add way to the end of the substring
  if (index == 0) {
    str = str + "way";
  } else
  // If vowel is not the first character, put the consonants at the end, add 'ay'
    str = str.substr(index) + str.substr(0, index) + "ay";

  return str;
}
