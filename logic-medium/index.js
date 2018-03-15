var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var vocal_alphabet = 'aiueo';

function generateAlphabetBoard(num) {
    let boardSize = num * num;

    let arrBoard = [];
    for (let j = 0; j < boardSize; j++) {
        let arrInner = [];

        // let index = 0
        for (let i = 0; i < boardSize; i++) {
            let randomIndex = Math.round(Math.random()*25);
            arrInner.push(alphabet[randomIndex]);
            
            // // TO TEST BOX
            // arrInner.push(alphabet[index]);
            // if (index == 25) {
            //     index = 0;
            // } else {
            //     index ++;
            // }

        }
        arrBoard.push(arrInner);
    }
    return arrBoard;
}


function checkConsonantInBox (row,col) {
    let board = generateAlphabetBoard(3);
    console.log(board);

    function obtainGrid(row,col) {
        let r = Math.floor(row/3) * 3;
        let c = Math.floor(col/3) * 3;

        let testbox = [];
        for (let i = r; i < r+3; i++) {
            for (let j = c; j < c+3; j++) {
                testbox.push(board[i][j]);
            }
        }
        return testbox;
    }

    let grid = obtainGrid(row,col);
    console.log(grid);

    let status = true;
    let count = grid.length * vocal_alphabet.length;
    while (count >= 0) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < vocal_alphabet.length; j++) {
                if (grid[i] == vocal_alphabet[j]) {
                    // console.log('test')
                    status = false
                    break;
                } else {
                    // console.log(grid[i],vocal_alphabet[j])
                }
                count--;
            }       
            return status;
        }
    }
}


console.log(checkConsonantInBox(0,0));
