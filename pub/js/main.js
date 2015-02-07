(function (window) {
	'use strict';

    $(document).ready(function(){
	var user = $.get('../apis/github/users/jrutishauser.json');
	console.log(user.responseJSON);
    });

})(window);
