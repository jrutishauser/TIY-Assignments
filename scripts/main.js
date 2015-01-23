var board = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
];


var printBoard = function () {
    console.log(board.join('\n') + '\n\n');
};

printBoard(); // printBoard is a function that takes no arguments since it just prints a board from the array

var moveMe = function (fromX, fromY, toX, toY) {
    fromX = fromX - 1;
    fromY = fromY - 1;
    toX = toX - 1;
    toY = toY - 1;
    board[toY][toX] = board[fromY][fromX];
    board[fromY][fromX] = ' ';
    printBoard();
};
moveMe(4, 7, 4, 5);
moveMe(7, 1, 6, 3);
moveMe(3, 7, 3, 5);
moveMe(5, 2, 5, 3);
moveMe(7, 7, 7, 6);
moveMe(4, 2, 4, 4);
moveMe(6, 8, 7, 7);
moveMe(6, 1, 5, 2);