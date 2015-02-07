(function (window) {
	'use strict';

    $(document).ready(function(){
	jQuery.when(
		jQuery.getJSON('../apis/github/users/jrutishauser.json')
	).done(function(json) {
	console.log(json.login);
	});












    });

    
})(window);
