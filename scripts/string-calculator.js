var assert = require('assert');

var stringDict = [ ["zero", 0], ['one', 1], ['two', 2], ['three', 3], ['four', 4], ['five', 5], ['six', 6], ['seven', 7], ['eight', 8], ['nine', 9], ['ten', 10]
]


for ( var i=0; i <= 10; i++ ) {

    for ( var j=0; j <= 10; j++ ) {
    function plus(A, B){
    return i + j;
        }
        it('should add ' + stringDict[i][0] + ' and ' + stringDict[j][0], function(){
        assert.equal(plus(stringDict[i][0], stringDict[j][0]), i + j);
        });
 
    } // close j loop
} // close i loop

//  121)  should add ten and ten:
 //    TypeError: Cannot read property '0' of undefined -- @@@@ Why am I getting this error???!