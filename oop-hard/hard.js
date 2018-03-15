class Hero {
  constructor(name,job,health,mana,attack,money) {
    this.name = name
    this.job = job
    this.health = health
    this.mana = mana
    this.attack = attack
    this.money = money
    this.items = []
  }

  buyItems(){
    for(let i=0; i<specialItems.length; i++){
      for(let j=0; j<specialItems[i].jobs.length; j++){
        if(specialItems[i].jobs[j]==this.job){
          this.items.push(specialItems[i])
          this.health += specialItems[i].healthpoint
          this.mana += specialItems[i].manapoint
          this.attack += specialItems[i].attackpoint
          this.money -= specialItems[i].price
        }
      }
    }
  }

  sellItems(name){
    let newArray = []
    for(let i=0; i<this.items.length; i++){
      if(name==this.items[i].nama){
        this.health -= specialItems[i].healthpoint
        this.mana -= specialItems[i].manapoint
        this.attack -= specialItems[i].attackpoint
        this.money += specialItems[i].price
      } else {
        newArray.push(this.items[i])
      }
    }
    this.items = newArray
  }
}

class Assassin extends Hero {
  constructor(name,job,health,mana,attack,money) {
    super(name,job,health,mana,attack,money)
  }
}

class Knight extends Hero {
  constructor(name,job,health,mana,attack,money) {
    super(name,job,health,mana,attack,money)
  }
}

class Mage extends Hero {
  constructor(name,job,health,mana,attack,money) {
    super(name,job,health,mana,attack,money)
  }
}

class EditHero {
  static makeHero(name,job,health,mana,attack,money){
    let heroes;
    if(job=='Assassin'){heroes = new Assassin(name,job,health,mana,attack,money)}
    if(job=='Knight'){heroes = new Knight(name,job,health,mana,attack,money)}
    if(job=='Mage'){heroes = new Mage(name,job,health,mana,attack,money)}
    return heroes
  }

  static buyItems(heroName){
    for(let i=0; i<specialItems.length; i++){
      for(let j=0; j<specialItems[i].jobs.length; j++){
        if(specialItems[i].jobs[j]==heroName.job){
          heroName.items.push(specialItems[i])
          heroName.health += specialItems[i].healthpoint
          heroName.mana += specialItems[i].manapoint
          heroName.attack += specialItems[i].attackpoint
          heroName.money -= specialItems[i].price
        }
      }
    }
  }

  static sellItems(item, heroName){
    let newArray = []
    for(let i=0; i<heroName.items.length; i++){
      if(item.nama==heroName.items[i].nama){
        heroName.health -= item.healthpoint
        heroName.mana -= item.manapoint
        heroName.attack -= item.attackpoint
        heroName.money += item.price
      } else {
        newArray.push(this.items[i])
      }
    }
    heroName.items = newArray
  }

}

var specialItems = [{
    nama:'Pedang Sakti',
    jobs:['Knight', 'Assassin'],
    price:1000,
    healthpoint:300,
    manapoint:100,
    attackpoint:100
  },{
    nama:'Armor Sakti',
    jobs:['Mage', 'Knight'],
    price:800,
    healthpoint:800,
    manapoint:100,
    attackpoint:0
  }]

let rikimaru = EditHero.makeHero('Rikimaru','Assassin',1200,543,431,1200)
let leonidas = EditHero.makeHero('Leonidas','Knight',3213,126,431,1700)
let gandalf = EditHero.makeHero('Gandalf','Mage',1130,603,231,2500)
let ezio = EditHero.makeHero('Ezio','Assassin',1250,523,431,2100)

EditHero.buyItems(rikimaru)
// nama: untuk menyimpan nama dari item tersebut
// job: untuk mentukan job apa saya yang bisa menggunakan item ini
// price: adalah harga dari item tersebut
// healthpoint: jumlah health yang akan bertambah ke dalam health karakter
// manapoint: jumlah mana yang akan bertambah ke dalam mana karakter
// defensepoint: jumlah defense yang akan bertambah ke dalam defense karakter

console.log(rikimaru)
console.log(leonidas)
console.log(gandalf)
console.log(ezio)
