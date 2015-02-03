


var firstFunc = function () {
	one.className = 'hide';
	two.className = 'show';
	three.className = 'hide';
	four.className = 'hide';
	five.className = 'hide';
};

var secFunc = function () {
	one.className = 'show';
	two.className = 'hide';
	three.className = 'hide';
	four.className = 'hide';
	five.className = 'hide';
};

var thirdFunc = function () {
	one.className = 'hide';
	two.className = 'hide';
	three.className = 'show';
	four.className = 'hide';
	five.className = 'hide';
};

var fourthFunc = function () {
	one.className = 'hide';
	two.className = 'hide';
	three.className = 'hide';
	four.className = 'show';
	five.className = 'hide';
};

var fifthFunc = function () {
	one.className = 'hide';
	two.className = 'hide';
	three.className = 'hide';
	four.className = 'hide';
	five.className = 'show';
};

var one = document.getElementById('firstSec');
var two = document.getElementById('secSec');
var three = document.getElementById('thirdSec');
var four = document.getElementById('fourthSec');
var five = document.getElementById('fifthSec');

var lOne = document.getElementById('pageOne');
var lTwo = document.getElementById('pageTwo');
var lThree = document.getElementById('pageThree');
var lFour = document.getElementById('pageFour');
var lFive = document.getElementById('pageFive');

lTwo.onclick = firstFunc;
lOne.onclick = secFunc; 
lThree.onclick = thirdFunc;
lFour.onclick = fourthFunc;
lFive.onclick = fifthFunc;








