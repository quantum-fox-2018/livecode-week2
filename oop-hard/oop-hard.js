class Hero{
  constructor(){
    this.heroName = '';
    this.job = '';
    this.healthPoint = 0;
    this.manaPoint = 0;
    this.attack = 0;
    this.money = 0;
    this.items = [];
  }

  skill(){
    let heroJob = this.job;
    switch (heroJob) {
      case 'Assassin':
          return 'ciat..! Serangan tanpa bayangan..';
          break;

      case 'Knight':
          return 'Lemparan Perisai Suci';

      case 'Mage':
          return 'Terimalah serangan sihir ini..';

      default:
          return 'Hero jobless';

    }
  }

  sellItem(ItemName){
    let heroItem = this.items;
    // console.log(this.items[0].itemName);
    for (let i = 0; i < heroItem.length; i++) {
      if(heroItem[i].itemName = ItemName){
        this.heroStatusChange(heroItem[i], this);
        heroItem.splice(i, 1);
      }
    }
  }

  heroStatusChange(itemListName, hero){
    hero.healthPoint -= itemListName.healthPoint;
    hero.manaPoint -= itemListName.manaPoint;
    hero.attack -= itemListName.attack;
    hero.money += ((itemListName.price*50) /100);

  }
}

class Assassin extends Hero{
  constructor(heroName, job, healthPoint, manaPoint, attack, money){
    super();
    this.heroName = heroName;
    this.job = job;
    this.healthPoint = healthPoint;
    this.manaPoint = manaPoint;
    this.attack = attack;
    this.money = money;
    this.items = [];
  }

}

class Knight extends Hero {
  constructor(heroName, job, healthPoint, manaPoint, attack, money){
    super();
    this.heroName = heroName;
    this.job = job;
    this.healthPoint = healthPoint;
    this.manaPoint = manaPoint;
    this.attack = attack;
    this.money = money;
    this.items = [];
  }


}

class Mage extends Hero {
  constructor(heroName, job, healthPoint, manaPoint, attack, money){
    super();
    this.heroName = heroName;
    this.job = job;
    this.healthPoint = healthPoint;
    this.manaPoint = manaPoint;
    this.attack = attack;
    this.money = money;
    this.items = [];
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

  buyItem(hero, itemName){ //itemName adalah item yang di beli oleh hero
    let itemList = this.itemList;

    let heroMoney = hero.money;
    let heroJob = hero.job;

    let itemListName = this.checkItemName(itemName);

    if(itemListName != true){
      let isHeroMatch = this.checkItemJob(heroJob, itemName, itemListName);
      let canBuyItem = this.checkMoney(itemName, heroMoney, itemListName);

      if(isHeroMatch == true && canBuyItem == true){
        hero.items.push(itemListName);
        this.heroStatusChange(itemListName, hero);
      }else{
        console.log('Hero tidak bisa memakai Item / hero money kurang');
      }
    }else{
      console.log('Nama Item yang di beli tidak ada');
      // return 'Nama Item yang di beli tidak ada';
    }

    // hero.items.push('tes dulu');
    // console.log(itemList[0].itemName);
  }

  //cek apakah item yang di beli ada atau tidak
  checkItemName(itemName){
    let itemList = this.itemList;
    for (let i = 0; i < itemList.length; i++) {
        if(itemName == itemList[i].itemName){
            return itemList[i];
        }
    }
    return false;
  }

  checkItemJob(heroJob, itemName, itemListName){
    if(itemListName.job == 'AllHero'){
        return true;
    }else if(heroJob == itemListName.job){
        return true;
    }else{
        return false;
    }
  }

  checkMoney(itemName, heroMoney, itemListName){
    if(itemListName.price <= heroMoney){
        return true;
    }else{
        return false;
    }
  }

  heroStatusChange(itemListName, hero){
    hero.healthPoint += itemListName.healthPoint;
    hero.manaPoint += itemListName.manaPoint;
    hero.attack += itemListName.attack;
    hero.money -= itemListName.price;
  }
}

class Monster{
  constructor(monsterName, healthPoint, attack, weakness){
    this.monsterName = monsterName || 'Raid Boss';
    this.healthPoint = healthPoint;
    this.attack = attack;
    this.weakness = weakness;
  }
}

//Heroes
let riki_assasin = new Assassin('Rikimaru', 'Assassin', 1200, 543, 431, 1200);
let leo_knight = new Knight('Leonidas', 'Knight', 3213, 126, 431, 1700);
let gandalf_mage = new Mage('Gandalf', 'Mage', 1130, 603, 231, 2500);
let ezio_assassin = new Assassin('Ezio', 'Assassin', 1250, 523, 431, 2100);

//Items
let buffAll = new Item('Elixir', '', 1000, 1200, 500, 210);
let poison = new Item('Poison', 'Assassin', 400, -500, -100, -120);
let itemShop = new ItemShop();
itemShop.addItem(buffAll);
itemShop.addItem(poison);
// console.log(itemShop);


itemShop.buyItem(ezio_assassin, 'Poison');
console.log(ezio_assassin);

console.log(ezio_assassin.sellItem('Poison'));

console.log(ezio_assassin);

let ogre = new Monster('Ogre', 2000, 120, 'Mage');
let raidBoss = new Monster('', 9999, 999, 'none');
console.log(raidBoss);
