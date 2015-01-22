var assert = require('assert');

function add(A, B) {
    return A + B;
}
console.log(add(1, 2));

assert.equal(add(1, 2), 3);

function diff(A, B) {
    
    return A - B;

}

console.log(diff(10, 3));

assert.equal(diff(6, 3), 3);

assert.equal(diff(7, 3), 4);

function prod(A, B) {
    return A * B;
}

console.log(prod(6, 7));

assert.equal(prod(3, 2), 6);

assert.equal(prod(10, 3), 30);


function div(A, B) {
    return A / B;
    
}

console.log(div(60, 10));

assert.equal(div(10, 2), 5);
assert.equal(div(20, 5), 4);



var stringDict = [ ['one', 1], ['two', 2], ['three', 3], ['four', 4], ['five', 5], ['six', 6], ['seven', 7], ['eight', 8], ['nine', 9], ['ten', 10], ['eleven', 11], ['twelve', 12], ['thirteen', 13], ['fourteen', 14], ['fifteen', 15], ['sixteen', 16], ['seventeen', 17], ['eighteen', 18], ['nineteen', 19], ['twenty', 20]
]

var stringToNumber = function (string1, string2) {
    for ( var i = 0; i < stringDict.length; i++ ) {
        if (stringDict[i][0] === string1.toLowerCase()) {
        var firstNumber = stringDict[i][1];
        }
        };
    for ( var i = 0; i < stringDict.length; i++ ) {
        if (stringDict[i][0] === string2.toLowerCase() ) {
            var secondNumber = stringDict[i][1];
        } 
    };
    return firstNumber + secondNumber;
    } 
    
console.log(stringToNumber("ONE", "twentY"));

