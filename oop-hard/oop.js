
class Hero {
  constructor(name, job, health, mana, attack, money, skill){
    this.name   = name;
    this.job    = job;
    this.health = health;
    this.mana   = mana;
    this.attack = attack;
    this.money  = money;
    this.skill  = skill
  }

  buyItem(input){
    if(this.job === input.job){
      if(this.money >= input.price){
        return true;
      }
    }

  }
}

class Item {
  constructor(name, job, price, healthpoint, manapoint, attackpoint){
    this.name         = name;
    this.job          = job;
    this.price        = price;
    this.healthpoint  = healthpoint;
    this.manapoint    = manapoint;
    this.attackpoint  = attackpoint;
  }
}

//Hero
let rikimaru = new Hero('Rikimaru', 'Assassin', 1200, 543, 431, 1200, 'Ciat..! Serangan tanpa bayangan..');
let leonidas = new Hero('Leonidas', 'Knight', 3213, 126, 431, 1700, 'Lemparan Perisai Suci');
let gandalf  = new Hero('Gandalf', 'Mage', 1130, 603, 231, 2500, 'Terimalah serangan sihir ini..');
let ezio     = new Hero('Ezio', 'Assassin', 1250, 523, 431, 2100, 'Ciat..! Serangan tanpa bayangan..');

//Item
let damascus = new Item('Damascus', 'Assassin', 500, 150, 100, 2000);
let mjolnir  = new Item('Mjolnir', 'Knight', 600, 200, 120, 1500);

console.log(rikimaru.buyItem(damascus));
