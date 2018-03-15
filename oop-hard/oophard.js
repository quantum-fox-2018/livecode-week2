/*jshint esversion:6*/

class Rpg {
  constructor (name,job,health,mana,attack,money){
    this.name = name;
    this.job = job;
    this.healths = health;
    this.manas = mana;
    this.attack = attack;
    this.moneys = money;
    this.item = new Item.Items
  }

  buyItem(){

  }
}

class Item {
  static Items(){
    var barang = ['Wand','Mage',200,300,300,300];
  }
}



let player1 = new Rpg('Rikimaru','Assasin',1200,543,431,1200);
// let item1 = new Item('Swords','Assasin', 100 , 500,300,200);
// let item2 = new Item('knife','Mage', 200, 300, 300 ,300 );
// ['knife','Assasin',100,500,300,200]
['Wand','Mage',200,300,300,300]
console.log(player1)
