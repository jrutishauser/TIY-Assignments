(function (window) {
	'use strict';

    $(document).ready(function(){

   $.getJSON('../apis/github/users/jrutishauser.json', function(json) {
   	var user = json;
   	$('#email').html(user.email).attr('href', 'mailto:' + json.email);
 	$('#followers').html(user.followers);
       	$('#following').html(user.following);
 	$('#location').html(user.location); 
	$('#joined').html(user.created_at);
	$('#following').html(user.following);
	$('#name').html(user.name);
	$('#login').html(user.login);



	console.log(user);

 	$.getJSON(user.repos_url, function(repos) {
		
	    var repoItems = $.map(repos, function(name, i){
	    	var listItem = $('<li></li>');
		$('<a href=https://github.com/jrutishauser/' + repos[i].name + '><h3>' + repos[i].name + '</h3></a>').appendTo(listItem);

			return listItem;
	    
	    });	
		$('.repo-list').html(repoItems);


  	});  
  	 }); 
    });

    
})(window);
