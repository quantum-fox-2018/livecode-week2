class rikimarues{
    constructor(name, job, health, mana, attack, money) {
        this._name = name
        this._job = job
        this._health = health
        this._mana =  mana
        this._attack = attack
        this._money = money
        this._item = []
    }

    buyItem(item){
        for(let i=0; i<item._job.length; i++){
            if(item._job[i] == this._job && item._price <= this._money){
                this._health += item._healthpoint
                this._mana += item._manapoint
                this._attack += item._attackpoint
                this._money -= item._price
                this._item.push(item)
            }
        }
    }

    sellItem(item){
        this._health -= item._healthpoint
        this._mana -= item._manapoint
        this._attack -= item._attackpoint
        this._money += item._price*(50/100)
        for(let i=0; i<this._item.length; i++){
            if(this._item[0]._name == item._name){
                let index = this._item.indexOf(item._name)
                this._item.splice(index, 1)
                // console.log(this._item)
            }
        }
    }

    attackMonster(monster){
        if(this._job == monster._weakness){
            this._attack += this._attack*(50/100)
        }
    }
    
    
}

class Rikimaru extends rikimarues{
    constructor() {
        super('Rikimaru', 'Assassin', 1200, 543, 431, 1200)
    }
}

class Leonidas extends rikimarues{
    constructor() {
        super('Leonidas', 'Knight', 3213, 126, 431, 1700)
    }
}

class Gandalf extends rikimarues{
    constructor() {
        super('Gandalf', 'Mage', 1130, 603, 231, 2500)
    }
}

class Ezio extends rikimarues{
    constructor() {
        super('Ezio', 'Assassin', 1250, 523, 431, 2100)
    }
}

class Items{
    constructor(name, job, detail, healthpoint, manapoint, attackpoint, price) {
        this._name = name
        this._job = job
        this._detail = detail
        this._healthpoint = healthpoint
        this._manapoint = manapoint
        this._attackpoint = attackpoint
        this._price = price
    }
}

class Monster{
    constructor(name, health, attack, weakness) {
        this._name = name
        this._health = health
        this._attack = attack
        this._weakness = weakness
    }
}



let rikimaru = new Rikimaru()
let leonidas = new Leonidas()
let gandalf = new Gandalf()
let ezio = new Ezio()
// console.log(rikimaru)


let pedang = new Items('Pedang',['Assassin','Knight'], 'Pedang Warisan Dewa', 800, 400, 1000, 900)
let tongkat = new Items('Tongkat', ['Mage'], 'Tongkat Sakti Harry Potter', 2200, 600, 200, 1500)
// console.log(pedang)
let monster1 = new Monster('Gorgom', 1200, 400, 'Assasin')
let monster2 = new Monster('Gintama', 1000, 300, 'Mage')


console.log('====SETELAH BELI ITEM=====')
rikimaru.buyItem(pedang)
console.log(rikimaru)
console.log('====SETELAH JUAL ITEM=====')
// rikimaru.sellItem(pedang)
// console.log(rikimaru)

console.log('=====Bertarung=====')
rikimaru.attackMonster(monster1)
console.log(rikimaru)
console.log(monster1)