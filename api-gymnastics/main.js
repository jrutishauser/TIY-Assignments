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

var answer = function () {
console.log(events.length);
	return {
		'total': events.length,
		'PushEvent': {
			'total': eventSearch('PushEvent').length,
			'perDay': eventSearch('PushEvent').length / totalNumDays}, 
		'DeleteEvent': {
			'total': eventSearch('DeleteEvent').length,
			'perDay': eventSearch('DeleteEvent').length / totalNumDays},
	   'PullRequestEvent': {
	   		'total': eventSearch('PullRequestEvent').length,
	   		'perDay': eventSearch('PullRequestEvent').length / totalNumDays},
		'IssueCommentEvent': {
			'total': eventSearch('IssueCommentEvent').length,
			'perDay': eventSearch('IssueCommentEvent').length / totalNumDays},
		'CreateEvent': {
			'total': eventSearch('CreateEvent').length,
			'perDay': eventSearch('CreateEvent').length / totalNumDays}	
	
	
	};


};

console.log(datesTotalSample);
console.log(totalNumDays);
console.log(answer());
