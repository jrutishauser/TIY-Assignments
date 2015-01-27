var events = require('../apis/github/users/jrutishauser/events.json');
var assert = require('assert');





function answer() {
    return {
        'total': events.length,
        'PushEvent': {
            'total': 0,
            'perDay': 0,
            
        }
    };
}
console.log(answer());

var index = 0;
var numberOfPushEvents = 0;

var PushEvents = events.filter(function(item) {
    return item..type == 'PushEvent';
});





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