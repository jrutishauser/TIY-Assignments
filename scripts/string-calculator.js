var assert = require('assert');

var stringDict = [ ["zero", 0], ['one', 1], ['two', 2], ['three', 3], ['four', 4], ['five', 5], ['six', 6], ['seven', 7], ['eight', 8], ['nine', 9], ['ten', 10], ['eleven', 11], ['twelve', 12], ['thirteen', 13], ['fourteen', 14], ['fifteen', 15], ['sixteen', 16], ['seventeen', 17], ['eighteen', 18], ['nineteen', 19], ['twenty', 20]
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
console.log(plus ("twenty", "fourteen"));

it('should add two strings, "five" and "six" and return a number', function () {
    assert.equal(plus("five", "six"), 11);
});

it('should add two strings, "seven" and "eight" and return a number', function () {         
    assert.equal(plus("seven", "eight"), 15); 
});
it('should add two strings, "three" and "four" and return a number', function () {         
    assert.equal(plus("three", "four"), 7); 
});

it('should add two strings, "two" and "five" and return a number', function () {         
    assert.equal(plus("two", "five"), 7); 
});
it('should add two strings, "ten" and "ten" and return a number', function () {         
    assert.equal(plus("ten", "ten"), 20); 
});

it('should add two strings, "twenty" and "ten" and return a number', function () {         
    assert.equal(plus("twenty", "ten"), 30); 
});
it('should add two strings, "fourteen" and "sixteen" and return a number', function () {         
    assert.equal(plus("fourteen", "sixteen"), 30); 
});
it('should add two strings, "two" and "nineteen" and return a number', function () {         
    assert.equal(plus("two", "nineteen"), 21); 
});
it('should add two strings, "seventeen" and "five" and return a number', function () {         
    assert.equal(plus("seventeen", "five"), 22); 
});
it('should add two strings, "six" and "six" and return a number', function () {         
    assert.equal(plus("six", "six"), 12); 
});