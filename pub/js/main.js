(function (window) {
	'use strict';

    $(document).ready(function(){

   $.getJSON('../apis/github/users/jrutishauser.json', function(json) {
   	var user = json;
   	$('#email').html(user.email);
   
   
   
   
   }); 



    });

    
})(window);
