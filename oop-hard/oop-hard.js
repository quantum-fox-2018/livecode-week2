class Character{
  constructor(characterName,health,mana,defense,money,items){
    this.characterName = characterName;
    this.health = null;
    this.mana = null;
    this.defense = null;
    this.money = 0;
    this.items = [];
  }

  skill(){
    return 'belum ada skill';
  }
}

class Assassin extends Character{
  constructor(characterName,health,mana,defense,money,items){
    super(characterName,health,mana,defense,money,items)
    this.characterName = characterName;
    this.job = 'Assassin';
    this.health = health;
    this.mana = mana;
    this.defense = defense;
    this.money = money;
    this.items = [];
  }
  skill(){
    return 'Ciat..! Serangan tanpa bayangan..'
  }
}

class Knight extends Character{
  constructor(characterName,health,mana,defense,money,items){
    super(characterName,health,mana,defense,money,items)
    this.characterName = characterName;
    this.job = 'Knight';
    this.health = health;
    this.mana = mana;
    this.defense = defense;
    this.money = money;
    this.items = [];
  }
  skill(){
    return 'Lemparan Perisai Suci'
  }
}

class Mage extends Character{
  constructor(characterName,health,mana,defense,money,items){
    super(characterName,health,mana,defense,money,items)
    this.characterName = characterName;
    this.job = 'Mage';
    this.health = health;
    this.mana = mana;
    this.defense = defense;
    this.money = money;
    this.items = [];
  }
  skill(){
    return 'Terimalah serangan sihir ini..'
  }
}
//
// nama: untuk menyimpan nama dari item tersebut
// job: untuk mentukan job apa saya yang bisa menggunakan item ini
// price: adalah harga dari item tersebut
// healthpoint: jumlah health yang akan bertambah ke dalam health karakter
// manapoint: jumlah mana yang akan bertambah ke dalam mana karakter
// defensepoint: jumlah defense yang akan bertambah ke dalam defense karakter

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

let rikimaru = new Assassin('Rikimaru',1200,543,431,1200,[]);
let leonidas = new Knight('Leonidas',3213,126,431,1700,[]);
let gandalf = new Mage('Gandalf',1130,603,231,2500,[]);
let ezio = new Assassin('Ezio',1250,523,431,2100,[]);
