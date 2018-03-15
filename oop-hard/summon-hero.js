class Hero {
  constructor(name, job, health, mana, attack, money) {
    this.name = name;
    this.job = job;
    this.health = health;
    this.mana = mana;
    this.attack = attack;
    this.money = money;
    this.item = '';
  }

  validateItem(item) {
    if (this.job === item.item_job) {
      return true;
    }
    return false;
  }

  moneyCheck(price) {
    if (this.money >= price) {
      return true;
    }
    return false;
  }

  updateHeroStats(item) {
    this.health += item.item_healthpoint;
    this.mana += item.item_manapoint;
    this.attack += item.item_attackpoint;
  }

  removeHeroItemStats(item) {
    this.health -= item.item_healthpoint;
    this.mana -= item.item_manapoint;
    this.attack -= item.item_attackpoint;
  }

  buyItem(item) {
    let itemValidate = this.validateItem(item);
    let moneyCheck = this.moneyCheck(item.item_price);

    if(itemValidate == true && moneyCheck == true) {
      this.item = item.item_name;
      this.money -= item.item_price;
      this.updateHeroStats(item);
      return console.log('Buy item berhasil!');
    } else if (itemValidate == false) {
      return console.log('Item tidak sesuai job!');
    } else if (moneyCheck == false) {
      return console.log('Money tidak cukup!');
    }

  }

  sellItem(item) {
    if (this.item == '' ) {
      return console.log('Hero tidak memiliki item!');
    } else if (this.item == item.item_name) {
      this.item = '';
      this.removeHeroItemStats(item);
      this.money += item.item_price
      return console.log(`Berhasil menjual item ${item.item_name}`);
    } else {
      return console.log('Hero tidak memiliki item tersebut');
    }
  }

  attack() {
    if (this.job == 'Assassin') {
      console.log('Ciat..! Serangan tanpa bayangan..');
    } else if (this.job == 'Knight') {
      console.log('Lemparan Perisai Suci..');
    } else if (this.job == 'Mage') {
      console.log('Terimalah serangan sihir ini..');
    }

    return this.attack;
  }
}

class Assassin extends Hero {
  constructor(name, job, health, mana, attack, money) {
    super(name, job, health, mana, attack, money);
  }
}

class Knight extends Hero {
  constructor(name, job, health, mana, attack, money) {
    super(name, job, health, mana, attack, money);
  }
}

class Mage extends Hero {
  constructor(name, job, health, mana, attack, money) {
    super(name, job, health, mana, attack, money);
  }
}

class Item {
  constructor(itemName, itemJob, itemPrice, itemHealth, itemMana, itemAttack) {
    this.item_name = itemName;
    this.item_job = itemJob;
    this.item_price = itemPrice;
    this.item_healthpoint = itemHealth;
    this.item_manapoint = itemMana;
    this.item_attackpoint = itemAttack;
  }
}

class Broadsword extends Item {
  constructor() {
    super('Broadsword', 'Knight', 1400, 0, 0,300);
  }
}

class Robe extends Item {
  constructor() {
    super('Robe', 'Mage', 1500, 0, 200, 0)
  }
}

class Monster {
  constructor(name, health, attack, weakness) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.weakness = weakness;
  }

  attack() {
    console.log('Monster menyerang!');

    return this.attack;
  }
}

class Darklord extends Monster {
  constructor() {
    super('Darklord', 9999, 200, 'Knight');
  }
}

class Darkling extends Monster {
  constructor() {
    super('Darkling', 500, 50, 'Mage');
  }
}

var heroes = [];
var monsters = [];
//hero
var rikimaru = new Assassin('Rikimaru', 'Assassin', 1200, 543, 431, 1200);
var leonidas = new Knight('Leonidas', 'Knight', 3213, 126, 431, 1700);
var gandalf = new Mage('Gandalf', 'Mage', 1130, 603, 231, 2500);
var ezio = new Assassin('Ezio', 'Assassin', 1250, 523, 431, 2100);
var darklord = new Darklord();
var darkling = new Darkling();
heroes.push(rikimaru, leonidas, gandalf, ezio);
heroes.push(darklord, darkling);
// console.log(heroes);

//item
var broadsword = new Broadsword();
var robe = new Robe();

//buy success
leonidas.buyItem(broadsword);
console.log(leonidas);
console.log();
//buy fail
rikimaru.buyItem(robe);
console.log(rikimaru);
console.log();
//sell item
leonidas.sellItem(broadsword)
console.log(leonidas);


while (darklord.health > 0) {
  for (let i in heroes) {
    let heroDamage = heroes[i].attack;
    for (let j in monsters) {
      if (monsters[j].weakness == heroes[i].job) {
        heroDamage += heroDamage * 0.5;
      }
      monsters[j].health -= heroDamage;
      console.log(`**Kamu Berhasil Menyerang ${monsters[j].name} dengan jumlah serangan ${heroDamage}. Darah kamu terisaa ${heroes[i].health} jadi barhati-hatilah**`);
      if (monsters[j].health <= 0) {
        monsters[j].health = 0;
        console.log(`**Kamu berhasil membunuh monster ${monsters[j].name}. dan sisa darah kamu adalah ${heroes[i].health}**`);
        monsters.splice(j, 1);
      }
    }
  }
}
