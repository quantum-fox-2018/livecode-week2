const job_list = ['assasin', 'knight', 'mage', ]

class Hero{
  constructor(name, job, health, mana, attack, money){
    this.name = name;
    this.job = job;
    this.health = health;
    this.mana = mana;
    this.attack = attack;
    this.money = money;
    this.items = [];
  }

  buyItem(items){
    for(let indexItems in items){
      if(this.money >= items[indexItems].price && this.job === items[indexItems].job){
        this.money -= items[indexItems].price;
        this.health += items[indexItems].health_point;
        this.mana += items[indexItems].mana_point;
        this.attack += items[indexItems].attack_point;
        this.items.push(items[indexItems]);
      }
    }
  }

  sellItem(item_name){
    let unselled_items = [];
    for(let indexItems in this.items){
      if(this.items[indexItems].name === item_name){
        this.money += Math.round(this.items[indexItems].price / 2);
        this.health -= this.items[indexItems].health_point;
        this.mana -= this.items[indexItems].mana_point;
        this.attack -= this.items[indexItems].attack_point;
      } else {
        unselled_items.push(this.items[indexItems])
      }
    }
    this.items = unselled_items;
  }
}

class Item{
  constructor(name, job, health_point, mana_point, attack_point, price, detail){
    this.name = name;
    this.job = job;
    this.health_point = health_point;
    this.mana_point = mana_point;
    this.attack_point = attack_point;
    this.price = price;
    this.detail = detail;
  }
}

class Monster{
  constructor(name, health, attack, weakness){
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.weakness = weakness;
  }
}

class BattleGround{
  constructor(){
    this.hero = hero;
    this.monster = monster;
  }

  heroAttack(){
    if(this.monster.weakness === this.hero.job){
      this.monster.health -= this.hero.attack + (this.hero.attack / 2);
    } else {
      this.monster.health -= this.hero.attack;
    }
    if(this.monster.health > 0){
      
    }
  }

  monsterAttack(){

  }

  battle(){
    if(this.monster.health > this.hero.attack){
      this.heroAttack();
    }
    if(this.hero.health > this.monster.attack){
      this.monsterAttack();
    }
  }
}

let buriza = new Item('buriza','assasin', 100, 50, 150,1000, 'attack always critical hit');
let dagon = new Item('dagon','mage', 10, 80, 120,1000, 'will attack enemy for 400 dmg');
let taras = new Item('taras','knight', 500, 30, 70,1250, 'give a 250 health/s regeneration');
let yasha = new Item('yasha','assasin', 400, 20, 75,1250, 'attack speed increase');
let aghanim = new Item('aghanim','mage', 50, 400, 10,1250, 'give special attack');
let vanguard = new Item('vanguard','knight', 300, 10, 100,1250, 'give special armor');

let rikimaru = new Hero('Rikimaru', 'assasin', 1200, 543, 431, 1200);
let leonidas = new Hero('Leonidas', 'knight', 3213, 126, 431, 1700);
let gandalf = new Hero('Gandalf', 'mage', 1130, 603, 231, 2500);
let ezio = new Hero('Ezio', 'assasin', 1250, 523, 431, 2100);

let kobold = new Monster('kobold',250, 300, 'mage');
let centaur = new Monster('centaur',1250, 250, 'assasin');

rikimaru.buyItem([dagon,buriza,yasha]);
leonidas.buyItem([buriza,taras,vanguard]);
gandalf.buyItem([yasha,dagon,aghanim]);
ezio.buyItem([taras,yasha,buriza]);

// rikimaru.sellItem('buriza');
// leonidas.sellItem('taras');
// gandalf.sellItem('dagon');
// ezio.sellItem('yasha');

console.log(rikimaru, leonidas, gandalf, ezio);
