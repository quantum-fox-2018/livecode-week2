function generateAlphabetBoard(input){
    let draft = input * input
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let arrBoard = []

    for(let i=0; i<draft; i++){
        let inside = []
        for(let j=0; j<draft; j++){
            let random = alphabet.charAt(Math.floor(Math.random() * 26))
            inside.push(random)
        }
        arrBoard.push(inside.join(' '))
    }
    return arrBoard
    
}

console.log(generateAlphabetBoard(3))