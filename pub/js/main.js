(function (window) {
	'use strict';

    $(document).ready(function(){

   $.getJSON('../apis/github/users/jrutishauser.json', function(json) {
   	var user = json;
   	$('#email').html(user.email).attr('href', 'mailto:' + json.email);
 	$('#followers').html(user.followers);
       	$('#following').html(user.following);
 	$('#location').html(user.location); 






	console.log(user);

 	$.getJSON(user.repos_url, function(repos) {
		
	    var repoItems = $.map(repos, function(name, i){
	    	var listItem = $('<li></li>');
		$('<h3>' + repos[i].name + '</h3>').appendTo(listItem);

			return listItem;
	    
	    });	
		$('.repo-list').html(repoItems);


		});  
  	 }); 
    });

    
})(window);
