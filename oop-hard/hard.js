class Hero {
  constructor(name,job,health,mana,attack,money) {
    this.name = name
    this.job = job
    this.health = health
    this.mana = mana
    this.attack = attack
    this.money = money
    this.skill = this.skills()
    this.items = []
  }

  skills(){
    if(this.job=='Assassin'){
      return `Ciat..! Serangan tanpa bayangan..`
    } else if(this.job=='Knight'){
      return `Lemparan Perisai Suci`
    } else if(this.job=='Mage'){
      return `Terimalah serangan sihir ini..`
    }
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
        if(specialItems[i].jobs[j]==heroName.job && heroName.money >= specialItems[i].price){
          heroName.items.push(specialItems[i])
          heroName.health += specialItems[i].healthpoint
          heroName.mana += specialItems[i].manapoint
          heroName.attack += specialItems[i].attackpoint
          heroName.money -= specialItems[i].price
        }
      }
    }
  }

  static sellItem(item, heroName){
    let newArray = []
    for(let i=0; i<heroName.items.length; i++){
      if(item.nama==heroName.items[i].nama){
        heroName.health -= item.healthpoint
        heroName.mana -= item.manapoint
        heroName.attack -= item.attackpoint
        heroName.money += item.price
      } else {
        newArray.push(heroName.items[i])
      }
    }
    heroName.items = newArray
  }

}

class Monster {
  constructor(name,health,attack,weakness) {
    this.name = name
    this.health = health
    this.attack = attack
    this.weakness = weakness
  }
}

class Battle {
  static attack(hero,monster){
    let newAttack
    if(monster.weakness == hero.job){
      newAttack = hero.attack*1.5
      monster.health -= newAttack
    } else {
      newAttack = hero.attack
      monster.health -= hero.attack
    }
    if(monster.attack>hero.health && monster.health>0){
      return `Kamu kalah sebaiknya pulang ke kota dan beli item lagi`
    }
    if(monster.health>0){
      hero.health -= monster.attack
    } else {
      return `Kamu berhasil membunuh monster ${monster.name}. dan sisa darah kamu adalah ${hero.health}`
    }
    if(hero.health==0){
      return `Kamu kalah sebaiknya pulang ke kota dan beli item lagi`
    }
    return `Kamu Berhasil Menyerang ${monster.name} dengan jumlah serangan ${newAttack} Darah kamu tersisa ${hero.health} jadi berhati-hatilah`
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

let picolo = new Monster('Picolo',1000,300,'Knight')
let bhu = new Monster('Bhu',1500,1500,'Assassin')

let pedangSakti = specialItems[0]
let armorSakti = specialItems[1]

EditHero.buyItems(rikimaru)
EditHero.buyItems(leonidas)
EditHero.buyItems(gandalf)
EditHero.buyItems(ezio)
// EditHero.sellItem(pedangSakti,leonidas)
console.log(rikimaru)
console.log(bhu)
// console.log(leonidas)
// console.log(gandalf)
// console.log(ezio)
console.log(Battle.attack(rikimaru,bhu))
