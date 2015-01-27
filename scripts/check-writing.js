var datArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

var toEnglish = function (number) {
    number = number.toString();
    for ( var i = 0; i <= number.length; i++ ) {
        var newNumber = datArray[number[i]];
        console.log(datArray[number[i]]);
        newNumber = newNumber + newNumber;
    }
    console.log(number);
    console.log(newNumber);
    return newNumber;
}
toEnglish(3124);