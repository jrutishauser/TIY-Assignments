var events = require('../apis/github/users/jrutishauser/events.json');
var assert = require('assert');

function answer () {
    var pushEvents = events.filter(function(item){
        return item.type == 'PushEvent';
    });

    return { 
    'total': events.length,
    'PushEvent': {
        'total': pushEvents.length,
        }
    };
}

console.log(answer());
console.log(events.length);
var theAnswer = answer();

it('should have events', function () {
    assert(events);
});
it('should have a function answer', function () {
   assert(answer);
});


it('should return the length of events', function () {
    assert.equal(theAnswer.total, 30);
});

it('should contain PushEvent and has a total count', function () {
   assert(theAnswer.PushEvent);
    assert(theAnswer.PushEvent.total);
});
