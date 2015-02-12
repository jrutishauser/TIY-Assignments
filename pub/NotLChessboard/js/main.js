$(document).ready(function() {
var assert = require('chai').assert;


	var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
	
	
	
	function Piece(color, name, position){
		this._color = color;
		this._name = name;
		this._position = position;
	}

	var whiteKing = new Piece('white', 'king');
	var whitePawn = new Piece('white', 'pawn');
	var whiteRook = new Piece('white', 'rook');



whiteKing.should.be.a('Object');
assert.equal(3, 3, '3 equals 3');

});
