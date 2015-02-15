var events = require('./events.json');
var _ = require('lodash');


var eventSearch = function (eventType) {
	return _.filter(events, {'type': eventType});
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

console.log(eventSearch('PushEvent'));
console.log(answer());
