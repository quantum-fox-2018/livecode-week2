/*jshint esversion:6*/


class Rpg {
  constructor (name,job,health,mana,attack,money){
    this.name = name;
    this.job = job;
    this.healths = health;
    this.manas = mana;
    this.attack = attack;
    this.moneys = money;
    this.item = [];
  }

  skill(job){
    if(this.job === 'Assasin'){
      return 'Ciiiatt...! Serangan tanpa bayangan!';
    }
    else if(this.job === 'Knight'){
      return 'Lemparan perisai suci';
    }
    else if(this.job === 'Mage'){
      return 'Terimalah serangan sihir ini...';
    }
  }

  buyItem(nama,health,mana,attack,money){
    this.item.push(nama);
    this.healths += health;
    this.manas += mana;
    this.attack += attack;
    this.moneys -= money;
  }
}



let player1 = new Rpg('Rikimaru','Assasin',1200,543,431,1200);
let player2 = new Rpg('Leonidas','Knight',3213,126,431,1700);
let player3 = new Rpg('Gandalf', 'Mage' , 1130,603,231,2500);
let player4 = new Rpg('Ezio', 'Assasin', 1250,523,431,2100);
// let item1 = new item('swords', 500 , 300 , 300 ,300);

console.log(player1.buyItem('swords', 500 , 300 , 300 ,300))
console.log(player1.buyItem('Wand', 400 ,300, 200 ,500))
console.log(player1)
// console.log(player3)
