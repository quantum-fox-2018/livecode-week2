/*jshint esversion:6*/

class Character {
  constructor(name, job, health, mana, attack, money, items, skill) {
    this.name = name;
    this.job = job;
    this.health = health;
    this.mana = mana;
    this.attack = attack;
    this.money = money;
    this.items = items;
    this.skill = skill;
  }

  skill() {
    if (job == 'Assassin') {
      skill = `Ciat..! Serangan tanpa bayangan..`;
      return this;
    } else if (job == 'Knight') {
      skill = `Lemparan Perisai Suci`;
      return this;
    } else {
      skill = `Terimalah serangan sihir ini..`;
      return this;
    }
  }
}

let character1 = new Character('Rikimaru', 'Assassin', 1200, 543, 431, 1200);
let character2 = new Character('Leonidas', 'Knight', 3213, 126, 431, 1700);
let character3 = new Character('Gandalf', 'Mage', 1130, 603, 231, 2500);
let character4 = new Character('Ezio', 'Assassin', 1250, 523, 431, 2100);


console.log(character1);
console.log(character2);
console.log(character3);
console.log(character4);