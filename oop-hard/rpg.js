class Heroes {
 constructor(name, health, mana, attack, money) {
   this.name = name;
   this.health = health;
   this.mana = mana;
   this.attack = attack;
   this.money = money;
 }
}

class Assassin extends Heroes {
  contructor(name, health, mana, attack, money, job) {
    super(name, health, mana, attack, money);
    this.skill = heroSkill();
    this.job = job;
  }

  heroSkill() {
    return 'Ciat..! Serangan tanpa bayangan..';
  }
}

class Knight extends Heroes {
  contructor(name, health, mana, attack, money, job) {
    super(name, health, mana, attack, money);
    this.skill = heroSkill();
    this.job = job;
  }

  heroSkill() {
    return 'Lemparan Perisai Suci';
  }
}

class Mage extends Heroes {
  contructor(name, health, mana, attack, money, job) {
    super(name, health, mana, attack, money);
    this.skill = heroSkill();
    this.job = job;
  }

  heroSkill() {
    return 'Terimalah serangan sihir ini..';
  }
}

class Items {
  constructor(itemName, typeHero, price, healthPoint, manaPoint, attackPoint) {
    this.itemName = itemName;
    this.typeHero = typeHero;
    this.itemPrice = price;
    this.healthPoint = healthPoint;
    this.manaPoint = manaPoint;
    this.defensePoint = defensePoint;
  }
}

class Pedang extends Items {
  constructor(itemName, heroJob, price, healthPoint, manaPoint, attackPoint) {
    super(itemName, heroJob, price, healthPoint, manaPoint, attackPoint)
  }
}

class Perisai extends Items {
  constructor(itemName, heroJob, price, healthPoint, manaPoint, attackPoint) {
    super(itemName, heroJob, price, healthPoint, manaPoint, attackPoint)
  }
}

class Monsters {
  constructor(monsterName, monsterHealth, monsterAttack, monsterWeakness) {
    this.monsterName = monsterName;
    this.monsterHealth = monsterHealth;
    this.monsterAttack = monsterWeakness;
  }
}

class KingCrocs extends Monsters {
  constructor(monsterName, monsterHealth, monsterAttack, monsterWeakness) {
    super(monsterName, monsterHealth, monsterAttack, monsterWeakness)
  }
}

class Dormouse extends Monsters {
  constructor(monsterName, monsterHealth, monsterAttack, monsterWeakness) {
    super(monsterName, monsterHealth, monsterAttack, monsterWeakness)
  }
}

class GameInfo {
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

  buyItem(hero, item, money) {
    canBuy = false;
    for(var i = 0; i < this.items.length; i++) {
      for(var j = 0; j < this.heroes.length; j ++) {
        if(this.heroes[j].name === hero && this.items[i].heroJob === this.heroes[j].job) {
          canBuy = true;
        }
      }
    }
  }

  sellItem() {

  }
}



var mage = new Mage('Gandalf', 1130, 603, 231, 2500, 'Mage');
var knight = new Knight('Leonidas', 3213, 126, 431, 1700, 'Knight');
var assassin = new Assassin('Rikimaru', 1200, 543, 431, 1200, 'Assassin');
var gameInfo = new gameInfo();
// var pedang = new Pedang('pedang', 'Assassin', 200, 1000, 550, 345);
// var perisai = new Perisai('perisai', 'Assassin', 200, 1000, 550, 345);

gameInfo.addHero(mage);
gameInfo.addHero(knight);
gameInfo.addHero(assassin);
// gameInfo.addItem(pedang);
// gameInfo.addItem(perisai);
console.log(gameInfo);
