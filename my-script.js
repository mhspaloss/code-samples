
function checkCashRegister(price, cash, cid) {
  var changeDue = cash - price;

  //helper functions to total the cid (cash in drawer) amount
  totalCID = function (accumulator, currentValue) {

  }

  //helper function to create array of bills and coins to make change
  function makeChange(changeDue) {

  }

  //Return "insufficient funds" or "Closed", otherwise calc change
  var change = cid.reduce(totalCID);
  if (changeDue > change) {
    return "Insufficient funds";
  }
  else if (changeDue == change) {
    return "Closed";
  }
  else { //sufficient cash to make change, calc change amount
    var changeArr = makeChange(changeDue);
  }

  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]
