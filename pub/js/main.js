


var repLink = document.getElementById('repl');
var conLink = document.getElementById('conl');
var pubLink = document.getElementById('publ');

var repCon = document.getElementById('rep');
var pubCon = document.getElementById('pub');
var conCon = document.getElementById('con');

var repFunc = function () {
	repCon.className = 'show';
	pubCon.className = 'hide';
	conCon.className = 'hide';
};

var pubFunc = function () {
	repCon.className = 'hide';
	pubCon.className = 'show';
	conCon.className = 'hide';
};


var conFunc = function () {
	repCon.className = 'hide';
	pubCon.className = 'hide';
	conCon.className = 'show';
};

repLink.onclick = repFunc;
conLink.onclick = conFunc;
pubLink.onclick = pubFunc;





