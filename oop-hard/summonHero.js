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

class Rikimaru extends Hero {
  constructor() {
    super('Rikimaru', 'Assassin', 1200, 543, 431, 1200);
  }
}

class Leonidas extends Hero {
  constructor() {
    super('Leonidas', 'Knight', 3213, 126, 431, 1700);
  }
}

class Gandalf extends Hero {
  constructor() {
    super('Gandalf', 'Mage', 1130, 603, 231, 2500);
  }
}

var rikimaru = new Rikimaru();

console.log(rikimaru)
