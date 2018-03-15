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

class Item {
  constructor(name, job, detail, healthpoint, manapoint, defensepoint, price) {
    this.name = name;
    this.job = job;
    this.detail = detail;
    this.healthpoint = healthpoint;
    this.namapoint = manapoint;
    this.defensepoint = defensepoint;
    this.price = price;
  }
}

class Rikimaru extends Hero {
  constructor() {
    super('Rikimaru', 'Assassin', 1200, 543, 431, 1200);
  }

  items() {
    return this.item1 = new Item('wowow', 'Assassin', 'good', 100, 100, 1, 10)
  }
}

class Leonidas extends Hero {
  constructor() {
    super('Leonidas', 'Knight', 3213, 126, 431, 1700);
  }

  items() {
    return this.item1 = new Item('ehuehue', 'Knight', 'good boy', 90, 100, 5, 20)
  }
}

class Gandalf extends Hero {
  constructor() {
    super('Gandalf', 'Mage', 1130, 603, 231, 2500);
  }
}

class Ezio extends Hero {
  constructor() {
    super('Ezio', 'Assassin', 1250, 523, 431, 2100);
  }
}

var rikimaru = new Rikimaru();

console.log(rikimaru)
