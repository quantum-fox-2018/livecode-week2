class Heroes{
    constructor(name, job, health, mana, attack, money) {
        this._name = name
        this._job = job
        this._health = health
        this._mana =  mana
        this._attack = attack
        this._money = money
    }
}

class Rikimaru extends Heroes{
    constructor() {
        super('Rikimaru', 'Assassin', 1200, 543, 431, 1200)
    }
}

class Leonidas extends Heroes{
    constructor() {
        super('Leonidas', 'Knight', 3213, 126, 431, 1700)
    }
}

class Gandalf extends Heroes{
    constructor() {
        super('Gandalf', 'Mage', 1130, 603, 231, 2500)
    }
}

class Ezio extends Heroes{
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



let hero = new Rikimaru()
console.log(hero)


let pedang = new Items('Pedang',['Assassin','Knight'], 'Pedang Warisan Dewa', 800, 400, 1000, 900)
let tongkat = new Items('Tongkat', ['Mage'], 'Tongkat Sakti Harry Potter', 2200, 600, 200, 1500)
console.log(pedang)