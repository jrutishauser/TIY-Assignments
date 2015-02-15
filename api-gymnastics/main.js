var events = require('./events.json');


var answer = function () {
console.log(events.length);
	return {
		'total': events.length,
		'PushEvent': {
			'total': 10,
			'perDay': 2,	
		}	
	
	
	
	};



};


answer();
