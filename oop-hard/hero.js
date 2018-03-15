'use strict'
class Hero{
  constructor(name, job, health, mana, attack, money){
    this._name=name
    this._job=job
    this._health=health
    this._mana=mana
    this._attack=attack
    this._money=money
    this._items=[]
  }

  buyItem(item){
    if(this._job===item._job && this._money-item._price>=0){
      this._health+=item._healthpoint
      this._mana+=item._manapoint
      this._attack+=item._attackpoint
      this._money-=item._price
      this._items.push(item)
    }

  }

  attack(monster){
    if(monster._weakness===this._job){
      var addAttack =Math.ceil(this._attack/2)
      this._attack=this._attack+addAttack
    }
    if(monster._health-this._attack>0 && this._health-monster._attack>0){
      this._health-=monster._attack
      monster._health-=this._attack
      console.log('Kamu Berhasil Menyerang '+monster._name+' dengan jumlah serangan '+this._attack+' Darah kamu tersisa '+this._health+' jadi berhati-hatilah');
    }
    else if(monster._health-this._attack<=0 && this._health-monster._attack>0){
      this._health-=monster._attack
      monster._health-=this._attack
      console.log('Kamu berhasil membunuh monster '+monster._name+'. dan sisa darah kamu adalah '+this._health);
    }
    else if(monster._health-this._attack>0 && this._health-monster._attack<=0){
      this._health-=monster._attack
      monster._health-=this._attack
      console.log('Kamu kalah sebaiknya pulang ke kota dan beli item lagi');
    }

  }

}

class Assassin extends Hero{
  constructor(name, job, health, mana, attack, money){
    super(name, job, health, mana, attack, money)


  }
  skill(){
    return 'Ciat..! Serangan tanpa bayangan..'
  }
}

class Mage extends Hero{
  constructor(name, job, health, mana, attack, money){
    super(name, job, health, mana, attack, money)

  }
    skill(){
      return 'Terimalah serangan sihir ini..'
    }
}


class Knight extends Hero{
  constructor(name, job, health, mana, attack, money){
    super(name, job, health, mana, attack, money)
  }

  skill() {
    return 'Lemparan Perisai Suci'
  }

}


class Item{
  constructor(nama,job,price,healthpoint,manapoint,attackpoint){
    this._nama=nama
    this._job=job
    this._price=price
    this._healthpoint=healthpoint
    this._manapoint=manapoint
    this._attackpoint=attackpoint
  }
}

class Monster{
  constructor(name, health, attack, weakness){
    this._name=name
    this._health=health
    this._attack=attack
    this._weakness=weakness
  }
}



// 1. Name: Rikimaru, Job: Assassin, Health: 1200, Mana: 543, attack: 431, Money: 1200
// 2. Name: Leonidas, Job: Knight, Health: 3213, Mana: 126, attack: 431, Money: 1700
// 3. Name: Gandalf, Job: Mage, Health: 1130, Mana: 603, attack: 231, Money: 2500
// 4. Name: Ezio, Job: Assassin, Health: 1250, Mana: 523, attack: 431, Money: 2100

let rikimaru = new Assassin('Rikimaru','Assassin',1200,543,431,1200)
let leonidas = new Knight('Leonidas','Knight',3213,126,431,1700)
let gandalf = new Mage('Gandalf','Mage',1130,603,231,2500)
let ezio = new Assassin('Ezio','Assassin',1250,523,431,2100)

console.log(rikimaru.skill());
console.log(leonidas.skill());
console.log(gandalf.skill());
console.log(ezio.skill());

// nama: untuk menyimpan nama dari item tersebut
// job: untuk mentukan job apa saya yang bisa menggunakan item ini
// price: adalah harga dari item tersebut
// healthpoint: jumlah health yang akan bertambah ke dalam health karakter
// manapoint: jumlah mana yang akan bertambah ke dalam mana karakter
// attackpoint: jumlah attack yang akan bertambah ke dalam attack karakter

let sword = new Item('Sword','Knight',511,50,20,50)
let stick = new Item('Stick','Mage',411,40,30,40)

leonidas.buyItem(sword)
rikimaru.buyItem(stick)
gandalf.buyItem(stick)

// console.log(leonidas);
// console.log(rikimaru);

let dementor = new Monster('Dementor', 900, 300,'Knight')
let draco = new Monster('Draco', 800, 200,'Assasin')

leonidas.attack(dementor)
leonidas.attack(dementor)

console.log(leonidas);
console.log(dementor);
