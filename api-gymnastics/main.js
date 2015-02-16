var events = require('./events.json');
var _ = require('lodash');

var eventSearch = function (eventType) {
	return _.filter(events, {'type': eventType});
};
var dateSearch = function (eventType) {
	return _.pluck(_.filter(eventSearch(eventType)), 'created_at');
};

var datesTotalSample = _.pluck(events, 'created_at'); 
var totalNumDays = _.first(datesTotalSample).substring(8,10) - 
		_.last(datesTotalSample).substring(8,10); 

var PushEventDates = dateSearch('PushEvent');
var DeleteEventDates = dateSearch('DeleteEvent');
var PullReqDates = dateSearch('PullRequestEvent');

var answer = function () {
console.log(events.length);
	return {
		'total': events.length,
		'PushEvent': {
			'total': eventSearch('PushEvent').length,
			'perDay': eventSearch('PushEvent').length / 
			(_.first(PushEventDates).substring(8, 10) - _.last(PushEventDates).substring(8, 10))},
		'DeleteEvent': {
			'total': eventSearch('DeleteEvent').length,
			'perDay': eventSearch('DeleteEvent').length /
			(_.first(DeleteEventDates).substring(8, 10) - _.last(DeleteEventDates).substring(8,10))},
	   'PullRequestEvent': {
	   		'total': eventSearch('PullRequestEvent').length,
	   		'perDay': eventSearch('PullRequestEvent').length /
	   		(_.first(PullReqDates).substring(8, 10) - _.last(PullReqDates).substring(8,10))}		
	
	
	
	};


};

console.log(datesTotalSample);
console.log(totalNumDays);
console.log(answer());
