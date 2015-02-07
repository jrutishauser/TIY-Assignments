(function (window) {
	'use strict';

    $(document).ready(function(){

   $.getJSON('../apis/github/users/jrutishauser.json', function(json) {
   	console.log(json.login);
   }); 





    jQuery.when(
		jQuery.getJSON('../apis/github/users/jrutishauser.json')
	).done(function(json) {
	console.log(json.login);
	});












    });

    
})(window);
