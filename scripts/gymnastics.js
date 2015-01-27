var events = require('../apis/github/users/jrutishauser/events.json');
var assert = require('assert');





function answer() {
    return {
        'total': events.length,
    };
}
console.log(answer());



describe('the setup', function () {

it('should have events', function () {
assert(events);
});
it('should have an `answer` function', function () {
assert(answer);
assert(typeof answer == 'function');
});
});

describe('the answer',  function () {
    var theAnswer = answer();
    
it('should have 30 total events', function () {
assert(theAnswer.total === 30);
});


it('should have PushEvents entries', function () {
assert(theAnswer.PushEvents.total);
});
});