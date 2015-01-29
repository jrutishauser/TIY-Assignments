var _ = require('lodash');


function print(board){
  // Before any rows are printed, print the `<table>`...
  console.log('<table class="chessboard">');

  _.forEach(board, function(row, rank){
      
      // Before any cells are printed...

      _.forEach(row, function(square, file){

          // In here, we have `rank`, `file`, and `square`...

      }); // END foreach(row)

      // After all the cells are printed...

  }); // END foreach(board)

  // After all the rows are printed...
  console.log('</table> <!-- .chessboard -->');
} // END print