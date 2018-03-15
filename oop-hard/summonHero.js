'use strict'

class Hero{
  constructor(name, job, health, mana, attack, money, items){
    this.name = name
    this.job = job
    this.health = health
    this.mana = mana
    this.attack = attack
    this.money = money
    this.items = this.item
  }

  get Heros(){
    let paraPahlawan = []
    paraPahlawan.push(assassin,knight,mage,assassin2)
    return paraPahlawan
  }

  // setiap item memiliki attribute nama, job, detail, healthpoint, manapoint, attackpoint, price,
  get item(nama,){
    this._nama = 'test dono'
    this._job = 'test indro'
    this._detail = 'test indro'
    this._healthpoint = 'test indro'
    this._manapoint = 'test indro'
    this._attackpoint = 'test indro'
    this._price = 'test indro'
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

let assassin = new Assassin('Rikimaru','Assassin',1200,543,431,1200)
let knight = new Knight('Leonidas','Knight',3213,126,431,1700)
let mage = new Mage('Gandalf','Mage',1130,603,231,2500)
let assassin2 = new Assassin('Ezio','Assassin',1250,523,431,2100)
let hero = new Hero()
console.log(hero.Heros)
