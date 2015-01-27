
var stringDict = [ ["zero", 0], ['one', 1], ['two', 2], ['three', 3], ['four', 4], ['five', 5], ['six', 6], ['seven', 7], ['eight', 8], ['nine', 9], ['ten', 10]
]


function plus(A, B){
    for (var i = 0; i <= stringDict.length; i++ ) {
        if (A == stringDict[i][0] ) {
            var firstNumber = stringDict[i][1];
            break;
        }
    }
    for (var j = 0; j <= stringDict.length; j++ ) {
        if (B == stringDict[j][0] ) {
            var secondNumber = stringDict[j][1];
            break;
        }
    }
    return firstNumber + secondNumber;
}
console.log(plus ("one", "three"));

