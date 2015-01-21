var assert = require('assert');

function add(A, B) {
    return A + B;
}
console.log(add(1, 2))

assert.equal(add(1, 2), 3)

