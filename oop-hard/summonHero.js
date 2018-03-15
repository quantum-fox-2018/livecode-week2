'use strict'

class Hero{
  constructor(name, job, health, mana, attack, money, items){
    this.name = name
    this.job = job
    this.health = health
    this.mana = mana
    this.attack = attack
    this.money = money
    this.items = items
  }

  get Heros(){
    let paraPahlawan = []
    paraPahlawan.push(assassin,knight,mage,assassin2)
    return paraPahlawan
  }

  // setiap item memiliki attribute nama, job, detail, healthpoint, manapoint, attackpoint, price,
  get item(){
    this._nama = ''
    this._job = ''
    this._detail = ''
    this._healthpoint = 0
    this._manapoint = 0
    this._attackpoint = 0
    this._price = 0
  }

  buyItem(){
    if(this.job === 'Assassin'){
      this.items = 'god sword'
    }else if(this.job === 'Knight'){
      this.items = 'Knight horse'
    }else {
      this.items = 'Cristal Power'
    }

    if(this.money>500){
      this.items.push('god sword')
      this.items-=500
      this.healthpoint+=3
    }
  }

  sellItem(){

  }
}

class Assassin extends Hero{
  constructor(name, job, health, mana, attack, money, items, skill){
    super(name, job, health, mana, attack, money, items)
    this.skill = 'Ciat..! Serangan tanpa bayangan..'
  }
}

class Mage extends Hero{
  constructor(name, job, health, mana, attack, money, items, skill){
    super(name, job, health, mana, attack, money, items)
    this.skill = 'Terimalah serangan sihir ini..'
  }
}

class Knight extends Hero{
  constructor(name, job, health, mana, attack, money, items, skill){
    super(name, job, health, mana, attack, money, items)
    this.skill = 'Lemparan Perisai Suci'

  }
}

class Monster{
  constructor(monsNama, monsHealth, monsAttack, monsWeakness){
    this.MonsNama = monsNama
    this.MonsHealth = monsHealth
    this.MonsAttact = monsAttack
    this.MonsWeakness = monsWeakness
  }
}


let assassin = new Assassin('Rikimaru','Assassin',1200,543,431,1200,['pedang','pisau'])
let knight = new Knight('Leonidas','Knight',3213,126,431,1700,['pedang','baju jirah'])
let mage = new Mage('Gandalf','Mage',1130,603,231,2500,['tongkat sihir', 'invisible stone'])
let assassin2 = new Assassin('Ezio','Assassin',1250,523,431,2100,['pedang','pisau'])
let hero = new Hero()
// console.log(hero.Heros)

let monster = new Monster('Barack',345,50,'Mage')
let monster2 = new Monster('Obama',545,80,'Assassin')
console.log(monster)
