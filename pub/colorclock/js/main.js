$(document).ready(function(){
	
	var jsTimer = function () {
		var t = new Date();
		return $('#theTime').html(t.toTimeString().slice(0, 8));
	};
	var sliceMe = setInterval(function(){jsTimer();}, 1000);

	console.log(jsTimer());


});
