var events = require('./events.json');
var _ = require('lodash');

var eventSearch = function (eventType) {
	return _.filter(events, {'type': eventType});
};
var dateSearch = function (eventType) {
	return _.pluck(_.filter(eventSearch(eventType)), 'created_at');
};


var answer = function () {
console.log(events.length);
	return {
		'total': events.length,
		'PushEvent': {
			'total': eventSearch('PushEvent').length,
			'perDay': 2	
		}	
	
	
	
	};


};


console.log(dateSearch('PushEvent'));

console.log(answer());
