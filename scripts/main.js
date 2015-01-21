var assert = require('assert');

function add(A, B) {
    return A + B;
}
console.log(add(1, 2))

assert.equal(add(1, 2), 3)

function diff(A, B) {
    
    return A - B;

}

console.log(diff(10, 3))

assert.equal(diff(6, 3), 3)

assert.equal(diff(7, 3), 4)

