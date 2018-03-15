function generateAlphabetBoard(input){
    let row = input*input;
    let column = row;
    let arrBox = [];
    for(let rowIndex = 0; rowIndex<row; rowIndex++){
        let arrColumn = [];
        for(let columnIndex =0; columnIndex<column; columnIndex++){
            let alphabet = String.fromCharCode(Math.floor(Math.random()*25) + 65)
            arrColumn.push(alphabet);
        }
        arrBox.push(arrColumn);
    }

    return arrBox;
}

function showBoard(input){
    console.log(generateAlphabetBoard(input));
}

function checkConsonantInBox(input, row, column){
    theBox = generateAlphabetBoard(input);
    showBoard(input);

    let boxRowCheck = Math.floor(row/input);
    let boxColCheck = Math.floor(column/input);

    for(let indexRow=boxRowCheck; indexRow<boxRowCheck+input; indexRow++){
        for(let indexColumn = boxColCheck; indexColumn<boxColCheck+input; indexColumn++){
            if(theBox[indexRow][indexColumn] === "A"){
                return false;
            }else if(theBox[indexRow][indexColumn] === "I"){
                return false;
            }else if(theBox[indexRow][indexColumn] === "U"){
                return false;
            }else if(theBox[indexRow][indexColumn] === "E"){
                return false;
            }else if(theBox[indexRow][indexColumn] === "O"){
                return false;
            }
        }
    }

    return true;
}


console.log(checkConsonantInBox(3, 1, 3));