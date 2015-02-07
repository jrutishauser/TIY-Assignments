(function (window) {
	'use strict';

    $(document).ready(function(){

   $.getJSON('../apis/github/users/jrutishauser.json', function(json) {
   	console.log(json.login);
   }); 

















    });

    
})(window);
