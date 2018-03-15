class Game {
    constructor(){
        this._player = [];
    }

    addPLayer(players){
        if(players.job == 'Assassin'){
            let assasin = new Assasin(players)
            this._player.push(assasin)
        } else if(players.job == 'Knight'){
            let knight = new Knight(players)
            this._player.push(knight)
        } else if(players.job == 'Mage'){
            let mage = new Mage(players)
            this._player.push(mage)
        }
    }

    get player(){
        return this._player
    }

    buyItem(buyer, item){
        for(let i=0; i<this._player.length; i++){
            // validasi job
            if(this._player[i].job != item.itemJob){
                return console.log('Senjata tidak sesuai')
            }

            // validasi uang
            if(this._player[i].money < item.price){
                return console.log('Uang tidak cukup')
            }
            
        }
    }
}

class Hero {
    constructor(player){
        this.name = player.name
        this.job = player.job
        this.healthpoint = player.health
        this.manapoint = player.mana
        this.defensepoint = player.defense
        this.money = player.money
        this.items = [];
    }

}

class Assasin extends Hero {
    constructor(player){
        super(player)
        this.skill = 'Ciaattt... Serangan tanpa bayangan'
    }
}

class Knight extends Hero {
    constructor(player){
        super(player)
        this.skill = 'Lemparan perisai suci'
    }
}

class Mage extends Hero {
    constructor(player){
        super(player)
        this.skill = 'Terimalah serangan suci ini'
    }    
}

class Items {
    constructor(item){
        this.itemName = item.name
        this.itemJob = item.job
        this.itemPrice = item.price
        this.itemHealthPoint = item.healthpoint
        this.itemManaPoint = item.manapoint
        this.itemDefensePoint = item.defensepoint
    }
}

let player1 = {
    name : 'Rikimaru',
    job : 'Assassin',
    health : 1200,
    mana : 543,
    defense : 431,
    money : 1200
}
let player2 = {
    name : 'Leonidas',
    job : 'Knight',
    health : 3213,
    mana : 126,
    defense : 431,
    money : 1700
}
let player3 = {
    name : 'Gandalf',
    job : 'Mage',
    health : 1130,
    mana : 603,
    defense : 231,
    money : 2500
}
let player4 = {
    name : 'Ezio',
    job : 'Assassin',
    health : 1250,
    mana : 523,
    defense : 431,
    money : 2100
}

// add player
let game = new Game();
game.addPLayer(player1)
game.addPLayer(player2)
game.addPLayer(player3)
game.addPLayer(player4)


// buat item
let pedang1 = {
    name: 'Pedang Sakti',
    job: 'Knight',
    price: 150,
    healthpoint: 1000,
    manapoint: 15,
    defensepoint: 35
};
let pedang2 = {
    name: 'Pedang Langit',
    job: 'Assassin',
    price: 150,
    healthpoint: 1000,
    manapoint: 15,
    defensepoint: 35
};

// // beli item
let pedangKnight = new Items(pedang1)
let sabitMaut = new Items(pedang2)




console.log(game.player)


game.buyItem('Leonidas',pedangKnight)