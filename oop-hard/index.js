"use strict"

class Item{
  contructor(nama, job, healthpoint, manapoint, attackpoint, price,){
    this.nama = nama
    this.job = job
    this.healthpoint = healthpoint
    this.manapoint = manapoint
    this.attackpoint = attackpoint
    this.price = price
  }

  buyItem(){
  }

  sellItem(){

  }
}
class Hero {
  constructor(name, job, health, mana, attack, money) {
    this.name = name;
    this.job = job;
    this.health = health;
    this.mana = mana;
    this.attack = attack;
    this.items = 0
    this.money = money;
  }
}

class Assassin extends Hero{
  contructor(name, job, health, mana, attack, money){
  }

  skill(){
    return 'Ciat..! Serangan tanpa bayangan..'
  }
}

class Knight extends Hero {
  contructor(name, job, health, mana, attack, money){
    // super(name, job, health, mana, attack, money)
  }

  skill(){
    return 'Lemparan Perisai Suci'
  }
}

class Mage extends Hero {
  contructor(name, job, health, mana, attack, money){
    // super(name, job, health, mana, attack, money)
  }

  skill(){
    return 'Terimalah serangan sihir ini..'
  }
}

let assassin = new Assassin('Rikimaru', 'Assassin', 1200, 543, 431, 1200)
console.log(assassin);
console.log(assassin.skill());
//////////////
let knight = new Knight('Leonidas', 'Knight', 3213, 126, 431, 1700)
console.log(knight);
console.log(knight.skill());
///////////////
let mage = new Mage('Rikimaru', 'Assassin', 1200, 543, 431, 1200)
console.log(mage);
console.log(mage.skill());
/////////////////////
let assassin2 = new Assassin('Rikimaru', 'Assassin', 1200, 543, 431, 1200)
console.log(assassin2);
console.log(assassin2.skill());
