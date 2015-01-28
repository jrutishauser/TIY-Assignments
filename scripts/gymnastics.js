var events = require('../apis/github/users/jrutishauser/events.json');
var assert = require('assert');

function answer () {
    var pushEvents = events.filter(function(item){
        return item.type == 'PushEvent';
    });
    var pullRequests = events.filter(function(item){
        return item.type == 'PullRequestEvent';
    });
    var issueComment = events.filter(function(item){
        return item.type == 'IssueCommentEvent';
    });
    var createEvent = events.filter(function(item){
        return item.type == 'CreateEvent';
    });
    var deleteEvent = events.filter(function(item){
        return item.type == 'DeleteEvent';
    });
    var issuesEvent = events.filter(function(item){
        return item.type == 'IssuesEvent';
    });

    var thoseDamnDates = pushEvents(function(event)) {
        return created_at;
    }
    
    console.log(thoseDamnDates);
    
    return { 
    'total': events.length,
    'PushEvent': {
        'total': pushEvents.length,
        },
    'PullRequestEvent': {
        'total': pullRequests.length,
    },
    'IssueCommentEvent': {
        'total': issueComment.length,
    },
    'CreateEvent': {
        'total': createEvent.length,
    },
    'DeleteEvent': {
        'total': deleteEvent.length,
    },
    'IssuesEvent': {
        'total': issuesEvent.length,
    }
    };

}
console.log(answer());

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
