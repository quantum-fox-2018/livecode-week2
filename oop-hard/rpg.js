class Hero {
 constructor(name, health, mana, defense, money) {
   this.name = name;
   this.job = job;
   this.health = health;
   this.mana = mana;
   this.attack = attack;
   this.money = money;
   this.items = items;
 }
}

class Assassin extends Hero {
  contructor(name, health, mana, attack, money) {
    super(name, health, mana, attack, money)
    this.skill = 'Ciat..! Serangan tanpa bayangan..';
    this.job = 'Assassin';
  }
}

class Knight extends Hero {
  contructor(name, health, mana, attack, money) {
    super(name, health, mana, attack, money)
    this.skill = 'Lemparan Perisai Suci';
    this.job = 'Knight';
  }
}

class Mage extends Hero {
  contructor(name, health, mana, attack, money) {
    super(name, health, mana, attack, money);
    this.skill = 'Terimalah serangan sihir ini..';
    this.job = 'Mage';
  }
}

class Character{
  constructor() {
    this.heroes = [];
    this.items = [];
  }

  addHero(hero) {
    this.heroes.push(hero);
  }

  addItem(item) {
    this.items.push(item);
  }

  // buyItem(item, money) {
  //   for(var i = 0; i < this.items.length; i++) {
  //     if(this.items[i].job)
  //   }
  // }
}

class Item {
  constructor(itemName, heroJob, price, healthPoint, manaPoint, attackPoint) {
    this.itemName = itemName;
    this.heroJob = heroJob;
    this.itemPrice = price;
    this.healthPoint = healthPoint;
    this.manaPoint = manaPoint;
    this.defensePoint = defensePoint;
  }
}

class Pedang extends Item {
  constructor(itemName, heroJob, price, healthPoint, manaPoint, attackPoint) {
    super(itemName, heroJob, price, healthPoint, manaPoint, attackPoint)
  }
}

var mage = new Mage('Gandalf', 1130, 603, 231, 2500);
var knight = new Knight('Leonidas', 3213, 126, 431, 1700);
var assassin = new Assassin('Rikimaru', 1200, 543, 431, 1200);
var chars = new Character();
var item = Item.heroItem('pedang', 'Assassin', 200, 1000, 550, 345);
// chars.addItem(item);
chars.addHero(mage);
// chars.addHero(knight);
// chars.addHero(assassin);
console.log(chars);
