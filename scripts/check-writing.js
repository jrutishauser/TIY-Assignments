var datArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

var toEnglish = function (number) {
  number = number.toString();
  var newNumber = "";
  for ( var i = 0; i < number.length; i++ ) {
    newNumber += datArray[number[i]];
  }
  return newNumber;
}
console.log(toEnglish(1234));