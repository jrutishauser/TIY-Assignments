


var clickToShow = function () {
	this.nextElementSibling.className = 'open';


} 





var articleHeadings = document.getElementsByTagName('h3');

for (var index = 0; index < articleHeadings.length; index++){
	articleHeadings[index].onclick = clickToShow;


}








