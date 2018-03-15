
class Hero {
  constructor(name, job, health, mana, attack, money, skill){
    this.name   = name;
    this.job    = job;
    this.health = health;
    this.mana   = mana;
    this.attack = attack;
    this.money  = money;
    this.Item   = '';
    this.skill  = skill;
  }

  buyItem(input){
    if(this.job == input.job){
      if(this.money >= input.price){
        this.health += input.healthpoint;
        this.mana   += input.manapoint;
        this.attack += input.attackpoint;
        this.money  -= input.price;
        this.Item   += input.name;
      }
    }
  }

  sellItem(input){
    if(this.job == input.job){
      this.health -= input.healthpoint;
      this.mana   -= input.manapoint;
      this.attack -= input.attackpoint;
      this.money  += (input.price/2);
      this.Item    = '';
    }
  }

  attackMonster(input){
    let damage = 0;
    let health = this.health - input.attack;
      if(input.weakness == this.job){
        damage = this.attack + this.attack/2;
      } else {
        damage = this.attack;
      }

    return `Kamu berhasil menyerang ${input.name} dengan jumlah serangan ${damage}, Darah kamu tersisa ${health} jadi berhati-hatilah`
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

class Monster {
  constructor(name, health, attack, weakness){
    this.name     = name;
    this.health   = health;
    this.attack   = attack;
    this.weakness = weakness;
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

//Monster
let squidward = new Monster('squidward', 3000, 200, 'Knight');
let patrick   = new Monster('patrick', 2500, 250, 'Assassin');


//console.log(rikimaru);
rikimaru.buyItem(damascus);
rikimaru.sellItem(damascus);
console.log(rikimaru);

console.log(rikimaru.attackMonster(squidward));
