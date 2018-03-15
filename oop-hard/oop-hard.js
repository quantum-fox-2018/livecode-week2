class Character{
  constructor(characterName,job,health,mana,defense,money,items){
    this.characterName = characterName;
    this.job = '';
    this.health = 0;
    this.mana = 0;
    this.defense = 0;
    this.money = 0;
    this.items = [];
  }

  skill(){
    return 'belum ada skill';
  }

  itemsImproveStatus(){

    for(let i=0;i<this.items.length;i++){

      for(let j=0;j<this.items[i].itemsJob.length;j++){
        if(this.items[i].itemsJob[j] == this.job){
          this.health = this.health + this.items[i].itemsHealthPoint;
          this.mana = this.mana + this.items[i].itemsManaPoint;
          this.defense = this.defense + this.items[i].itemsDefensePoint;
          break;
        }
      }
    }
  }

  buyItem(newItems){
    if(this.money >= newItems.itemsPrice){
      this.money = this.money - newItems.itemsPrice;
      this.items.push(newItems);
      this.itemsImproveStatus();
    }
    else{
      console.log('gak ada uang');
    }
  }

  sellItem(itemsTerjual){
    // - kurangkan status health karakter berdasarkan healthpoint item
    // - kurangkan status mana karakter berdasarkan manapoint item
    // - kurangkan status defense karakter berdasarkan defensepoint item
    // - tambahkan uang karakter berdasarkan 50% dari harga item.
    // - kurangkan object item dari properti items

    var initialItems = this.items;
    this.items =[];
    this.itemsImproveStatus();

    this.money = this.money + itemsTerjual.itemsPrice;

    for(let i=0;i<initialItems.length;i++){
      if(initialItems[i].itemsName == itemsTerjual.itemsName){
        initialItems.splice(i,1);
      }
    }
    this.items=initialItems
    this.itemsImproveStatus();
  }
}

class Assassin extends Character{
  constructor(characterName,job,health,mana,defense,money,items){
    super(characterName,job,health,mana,defense,money,items)
    this.characterName = characterName;
    this.job = job;
    this.health = health;
    this.mana = mana;
    this.defense = defense;
    this.money = money;
    this.items = items;
    this.itemsImproveStatus();
  }
  skill(){
    return 'Ciat..! Serangan tanpa bayangan..'
  }
}

class Knight extends Character{
  constructor(characterName,job,health,mana,defense,money,items){
    super(characterName,job,health,mana,defense,money,items)
    this.characterName = characterName;
    this.job = job;
    this.health = health;
    this.mana = mana;
    this.defense = defense;
    this.money = money;
    this.items = items;
    this.itemsImproveStatus();

  }
  skill(){
    return 'Lemparan Perisai Suci'
  }
}

class Mage extends Character{
  constructor(characterName,job,health,mana,defense,money,items){
    super(characterName,job,health,mana,defense,money,items)
    this.characterName = characterName;
    this.job = job;
    this.health = health;
    this.mana = mana;
    this.defense = defense;
    this.money = money;
    this.items = items;
    this.itemsImproveStatus();
  }
  skill(){
    return 'Terimalah serangan sihir ini..'
  }
}

class Items{
  constructor(itemsJob,itemsPrice,itemsHealthPoint,itemsManaPoint,itemsDefensePoint){
    this.itemsName = ''
    this.itemsJob = ''
    this.itemsHealthPoint = 0;
    this.itemsManaPoint = 0;
    this.itemsDefensePoint=0;
    this.itemsPrice =0;
  }
}

class Pedang extends Items{
  constructor(itemsName,itemsJob,itemsPrice,itemsHealthPoint,itemsManaPoint,itemsDefensePoint){
    super(itemsJob,itemsPrice,itemsHealthPoint,itemsManaPoint,itemsDefensePoint);
    this.itemsName = itemsName;
    this.itemsJob = itemsJob;
    this.itemsHealthPoint = itemsHealthPoint;
    this.itemsManaPoint = itemsManaPoint;
    this.itemsDefensePoint= itemsDefensePoint
    this.itemsPrice = itemsPrice;
  }
}

class TongkatSihir extends Items{
  constructor(itemsName,itemsJob,itemsPrice,itemsHealthPoint,itemsManaPoint,itemsDefensePoint){
    super(itemsJob,itemsPrice,itemsHealthPoint,itemsManaPoint,itemsDefensePoint);
    this.itemsName = itemsName;
    this.itemsJob = itemsJob;
    this.itemsHealthPoint = itemsHealthPoint;
    this.itemsManaPoint = itemsManaPoint;
    this.itemsDefensePoint= itemsDefensePoint
    this.itemsPrice = itemsPrice;
  }
}

let pedang = new Pedang('Pedang',['Assassin','Knight'],300,200,100,150)
let magicRod = new TongkatSihir('Magic Rod',['Mage'],250,100,300,50);

let rikimaru = new Assassin('Rikimaru','Assassin',1200,543,431,1200,[pedang,magicRod]);
let leonidas = new Knight('Leonidas','Knight',3213,126,431,1700,[pedang]);
let gandalf = new Mage('Gandalf','Mage',1130,603,231,2500,[pedang]);
let ezio = new Assassin('Ezio','Assassin',1250,523,431,2100,[magicRod]);

gandalf.buyItem(magicRod);
console.log(gandalf);
gandalf.sellItem(magicRod)
console.log(gandalf);
