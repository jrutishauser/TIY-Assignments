var datArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

var toEnglish = function (number) {
  number = number.toString();
  var newNumber = "";
  for ( var i = 0; i < number.length; i++ ) {
    newNumber += datArray[number[i]] + " ";
  } 
    if (newNumber.length > 2) {
        var converted = newNumber.split(" ");
        converted.pop();
        converted.splice(-2,0, "hundred");
        var convertedAgain = converted.join(" ");  
    } 
return convertedAgain;
}
console.log(toEnglish(304));

//trying to play with taking this further without having to extend the array much.
// ran into an issue with going for the thousands since I cant do another if
// found "switch" which may work but not sure, will have to revisit this later.

