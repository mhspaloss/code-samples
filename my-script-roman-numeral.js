function toRoman(element, index) {
  var romanDigit = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX',
                    '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
                    '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
                    '', 'M', 'MM', 'MMM', 'MMMM', 'MMMMM', 'MMMMMM', 'MMMMMMM', 'MMMMMMMM', 'MMMMMMMMM', 'MMMMMMMMMM'];

  return romanDigit[Number(element)+(index*10)];
}

toRoman = function (element, index) {
  var romanDigit = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX',
                    '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
                    '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
                    '', 'M', 'MM', 'MMM', 'MMMM', 'MMMMM', 'MMMMMM', 'MMMMMMM', 'MMMMMMMM', 'MMMMMMMMM', 'MMMMMMMMMM'];

  return romanDigit[Number(element)+(index*10)];
};



function convertToRoman(num) {
  return Array.from(num.toString()).reverse().map(toRoman).reverse().join('');
}

convertToRoman(36);
