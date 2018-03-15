class SmummonHero {
  constructor(){
    this.PlayerList = []
  }
  addHero(hero){
    this.PlayerList.push(hero)
  }
  buyItem(heroName, itemBeli){
      for(let i =0; i < hero.PlayerList.length; i++){
        if(hero.PlayerList[i].name === heroName){
            for(let j =0; j < hero.PlayerList[i].item.length; j++){
              if(itemBeli === hero.PlayerList[i].item[j].name){
                if(hero.PlayerList[i].money < hero.PlayerList[i].item[j].harga){
                      return 'maaf uang tidak cukup'
                }else{
                    hero.PlayerList[i].itemTerbeli.push(itemBeli)
                    hero.PlayerList[i].money = hero.PlayerList[i].money - hero.PlayerList[i].item[j].harga
                }
              }
            }
        }
      }
      return 'item yang dibeli tidak sesuai job'
  }
  sellItem(heroName,itemJual){
    for(let i =0; i < hero.PlayerList.length; i++){
      if(hero.PlayerList[i].name === heroName){
          for(let j =0; j < hero.PlayerList[i].itemTerbeli.length; j++){
            if(itemJual === hero.PlayerList[i].itemTerbeli[j]){
              for(let l =0; l < hero.PlayerList[i].item.length; l++){
                if(itemJual === hero.PlayerList[i].item[j].name){
                  hero.PlayerList[i].money = hero.PlayerList[i].money + (hero.PlayerList[i].item[j].harga * 50/100)
                  hero.PlayerList[i].itemTerbeli.item[j].splice(j,1);
                }
              }
            }
          }
      }
    }
    return 'item yang dijual tidak dimiliki'
  }
}

class Hero{
  constructor(name,job,healt,mana,attack,money){
      this.name = name
      this.job = job
      this.healt = healt
      this.mana = mana
      this.attack = attack
      this.money = money
      this.healtPoint = healt
      this.manaPoint = mana
      this.attackPoint = attack
  }
  minusMana(){

  }
}

class Assassin extends Hero{
  constructor(name,job,healt,mana,attack,money,listItem) {
      super(name,job,healt,mana,attack,money)
      this.item = listItem
      this.itemTerbeli = []
  }
  skill(jurus){
    return 'Ciat..! Serangan tanpa bayangan..'
  }
}

class Mage extends Hero{
  constructor(name,job,healt,mana,attack,money,listItem) {
      super(name,job,healt,mana,attack,money)
      this.item = listItem
      this.itemTerbeli = []
  }
  skill(jurus){
    return 'Terimalah serangan sihir ini..'
  }
}

class Knight extends Hero{
  constructor(name,job,healt,mana,attack,money,listItem) {
      super(name,job,healt,mana,attack,money)
      this.item = listItem
      this.itemTerbeli = []
  }
    skill(jurus){
      return 'Lemparan Perisai Suci'
    }
}
var assassinItem = [{name: 'pedang', harga: 400},{name: 'parang', harga: 700}]
var mageItem = [{name: 'magnum', harga: 600},{name: 'ketapel', harga: 800}]
var knightItem = [{name: 'golok', harga: 900},{name: 'kapak', harga: 300}]
var assassin = new Assassin('Rikimaru','Assassin', 1200,543,431,1200,assassinItem)
var knight = new Knight('Leonidas','Knight', 3213,126,431,1700,knightItem)
var mage = new Mage('Gandalf','Mage', 1130,603,231,2500,mageItem)
var assassin2 = new Assassin('Ezio','Assassin', 1250,523,431,2100,assassinItem)
var hero = new SmummonHero()
hero.addHero(assassin)
hero.addHero(knight)
hero.addHero(mage)
hero.addHero(assassin2)
hero.buyItem('Rikimaru','parang')
console.log(hero.PlayerList[0].itemTerbeli)
