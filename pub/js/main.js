(function (window) {
	'use strict';

    $(document).ready(function(){

   $.getJSON('../apis/github/users/jrutishauser.json', function(json) {
   	var user = json;
   	$('#email').html(user.email).attr('href', 'mailto:' + json.email);
 	$('#followers').html(user.followers);
       	$('#following').html(user.following);




   
 console.log(json);  
   }); 



    });

    
})(window);
