(function (window) {
	'use strict';

    $(document).ready(function(){
	jQuery.when(
		jquery.getJSON('../apis/github/users/jrutishauser.json')
	).done(function(json) {
	console.log(json.login);
	});












    });

    
})(window);
