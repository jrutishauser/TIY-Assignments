(function (window) {
	'use strict';

    $(document).ready(function(){

   $.getJSON('../apis/github/users/jrutishauser.json', function(json) {
   	var user = json;
	console.log(user);	
 	console.log(user.login); 
   }); 



    });

    
})(window);
