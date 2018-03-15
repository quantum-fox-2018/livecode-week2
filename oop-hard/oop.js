class Hero {

    constructor(nameHero, jobHero, healthHero, manaHero, attackHero, moneyHero) {

        this.name = nameHero
        this.job = jobHero
        this.health = healthHero
        this.mana = manaHero
        this.attack = attackHero
        this.money = moneyHero
        this.items = []
        this.skill = ''
    }

    buyItem(hero, item) {
        if(hero.job == item.job) {
            if(hero.money > item.price) {

                hero.health += item.healthpoint
                hero.mana += item.manapoint
                hero.attack += item.attackpoint
                hero.money -= item.price

                hero.items.push(item.name)
            } else {

                return 'duitnya ga cukup ngepet dulu sana'
            }
                
        } else {

            return 'Job tidak sesuai'
        }

        return hero
        // console.log(item)
    }

    sellItem(hero, item) {

        hero.health -= item.healthpoint
        hero.mana -= item.manapoint
        hero.attack -= item.attackpoint
        hero.price += item.price

        for (let i = 0; i < hero.items.length; i++) {
            
            if (hero.items[i] == item.name) {

                hero.items[i] = ''
            }

        }
    }

}

class Assasin extends Hero {

    constructor(nameHero, jobHero, healthHero, manaHero, attackHero, moneyHero){
    super(nameHero, jobHero, healthHero, manaHero, attackHero, moneyHero)

    this.skill = 'Ciat..! Serangan tanpa bayangan..'
    
    }
}


class Mage extends Hero {

    constructor(nameHero, jobHero, healthHero, manaHero, attackHero, moneyHero){
    super(nameHero, jobHero, healthHero, manaHero, attackHero, moneyHero)

    this.skill = 'Terimalah serangan sihir ini'

    }
}


class Knight extends Hero {

    constructor(nameHero, jobHero, healthHero, manaHero, attackHero, moneyHero){
    super(nameHero, jobHero, healthHero, manaHero, attackHero, moneyHero)

    this.skill = 'Lemparan Perisai Suci'

    }
}

/*========================================================*/

class Item {

    constructor(nameItem, jobItem, priceItem, healthPointItem, manaPointItem, attackPointItem) {

        this.name = nameItem
        this.job = jobItem
        this.price = priceItem
        this.healthpoint = healthPointItem
        this.manapoint = manaPointItem
        this.attackpoint = attackPointItem
    }
    
}

// class AssasinItem extends Item {

//     constructor(nameItem, jobItem, priceItem, healthPointItem, manaPointItem, attackPointItem){
//     super(nameItem, jobItem, priceItem, healthPointItem, manaPointItem, attackPointItem)

//     }
// }

// class KnightItem extends Item {

//     constructor(nameItem, jobItem, priceItem, healthPointItem, manaPointItem, attackPointItem){
//     super(nameItem, jobItem, priceItem, healthPointItem, manaPointItem, attackPointItem)

//     }
// }

/*========================================================*/

class Monster{

    constructor(name, health, attack, weakness){

        this.name = name
        this.health = health
        this.attack = attack
        this.weakness = weakness
    }
}

let hero = new Hero()
let assasin = new Assasin('Rikimaru','Assasin',1200,543,431,1200)
let knight = new Knight('Leonidas','Knight',3213,126,431,1700)
let mage = new Mage('Gandalf','Mage',1130,603,231,2500)
let assasin2 = new Assasin('Ezio','Assasin',1250,523,431,2100)
// console.log(knight)
// console.log(mage)
// console.log(assasin2)

let itemBiasa = new Item('Pedang Tusuk Gigi','Assasin',500,150,50,1700)
let itemRare = new Item('Perisai Anti Galau','Assasin',1200,100000,100,50)
// console.log(item)
// console.log(item2)
// console.log(itemBiasa)
hero.buyItem(assasin,itemBiasa)
hero.sellItem(assasin,itemBiasa)
// console.log(assasin)

let monsterKodok = new Monster('Kodok Ngorek',1000,200,'Assasin')
let monsterKecoa = new Monster('Kecoa Terbang',1000,200,'Mage')

// console.log(monsterKodok)