var events = require('./events.json');
var _ = require('lodash');

var eventSearch = function (eventType) {
	return _.filter(events, {'type': eventType});
};
var dateSearch = function (eventType) {
	return _.pluck(_.filter(eventSearch(eventType)), 'created_at');
};

var PushEventDates = dateSearch('PushEvent');

var answer = function () {
console.log(events.length);
	return {
		'total': events.length,
		'PushEvent': {
			'total': eventSearch('PushEvent').length,
			'perDay': eventSearch('PushEvent').length / (_.first(PushEventDates).substring(8, 10) -_.last(PushEventDates).substring(8, 10))}	
	
	
	
	};


};


console.log(answer());
