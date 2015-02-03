


var clickToShow = function () {
	if (this.nextElementSibling.className === 'open'){
		this.nextElementSibling.className = '';
	} else if (this.nextElementSibling.className != 'open') {
	this.nextElementSibling.className = 'open';
	} else {}
}; 

var articleHeadings = document.getElementsByTagName('h3');

for (var index = 0; index < articleHeadings.length; index++){
	articleHeadings[index].onclick = clickToShow;
}

var subArticleHeadings = document.getElementsByTagName('h4');

for (var index2 = 0; index2 < subArticleHeadings.length; index2++){
	subArticleHeadings[index2].onclick = clickToShow;
}




