class Assassin {
  constructor(heroName, job, healthPoint, manaPoint, attack, money){
    this.heroName = heroName;
    this.job = job;
    this.healthPoint = healthPoint;
    this.manaPoint = manaPoint;
    this.attack = attack;
    this.money = money;
    this.items = [];
  }

  heroSkill(){
    return 'ciat..! Serangan tanpa bayangan..';
  }
}

class Knight {
  constructor(heroName, job, healthPoint, manaPoint, attack, money){
    this.heroName = heroName;
    this.job = job;
    this.healthPoint = healthPoint;
    this.manaPoint = manaPoint;
    this.attack = attack;
    this.money = money;
    this.items = [];
  }

  heroSkill(){
    return 'Lemparan Perisai Suci';
  }
}

class Mage {
  constructor(heroName, job, healthPoint, manaPoint, attack, money){
    this.heroName = heroName;
    this.job = job;
    this.healthPoint = healthPoint;
    this.manaPoint = manaPoint;
    this.attack = attack;
    this.money = money;
    this.items = [];
  }

  heroSkill(){
    return 'Terimalah serangan sihir ini..';
  }
}

class Item{
  constructor(itemName, job, price, healthPoint, manaPoint, attack){
    this.itemName = itemName;
    this.job = job || 'AllHero';
    this.price = price;
    this.healthPoint = healthPoint;
    this.manaPoint = manaPoint;
    this.attack = attack;
  }
}

class ItemShop{
  constructor(){
    this.itemList = [];
  }

  addItem(item){
    this.itemList.push(item);
  }

  buyItem(){

  }
}

//Heroes
let riki_assasin = new Assassin('Rikimaru', 'Assassin', 1200, 543, 431, 1200);
let leo_knight = new Knight('Leonidas', 'Knight', 3213, 126, 431, 1700);
let gandalf_mage = new Mage('Gandalf', 'Mage', 1130, 603, 231, 2500);
let ezio_assassin = new Assassin('Ezio', 'Assassin', 1250, 523, 431, 2100);

//Items
let buffAll = new Item('Elixir', '', 1000, 1200, 500, 210);
let poison = new Item('Poison', 'Assassin', -400, -500, -100, -120);
let itemShop = new ItemShop();
itemShop.addItem(buffAll);
itemShop.addItem(poison);
console.log(itemShop);








//
