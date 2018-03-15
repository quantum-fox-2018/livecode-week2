"use strict"

class Hero {
  constructor(name, job, health, mana, attack, money) {
    this.name = name;
    this.job = job;
    this.health = health;
    this.mana = mana;
    this.attack = attack;
    this.money = money;
  }
}

class Assassin extends Hero{
  contructor(name, job, health, mana, attack, money){
    super(name, job, health, mana, attack, money)
  }

  skill(){
    return 'Ciat..! Serangan tanpa bayangan..'
  }
}

// class Knight extends Hero {
//   contructor(name, job, health, mana, attack, money){
//     super(name, job, health, mana, attack, money)
//   }
//
//   skill(){
//     return 'Lemparan Perisai Suci'
//   }
// }
//
// class Mage extends Hero {
//   contructor(name, job, health, mana, attack, money){
//     super(name, job, health, mana, attack, money)
//   }
//
//   skill(){
//     return 'Terimalah serangan sihir ini..'
//   }
// }

let assassin = new Assassin('Rikimaru', 'Assassin', 1200, 543, 431, 1200)
console.log(assassin);
console.log(assassin.skill());
