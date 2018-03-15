class SmummonHero {
  constructor(){
    this.PlayerList = []
  }
  addHero(hero){
    this.PlayerList.push(hero)
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
  }
}

class Assassin extends Hero{
  constructor(name,job,healt,mana,attack,money) {
      super(name,job,healt,mana,attack,money)
  }
  skill(jurus){
    return 'Ciat..! Serangan tanpa bayangan..'
  }
}

class Mage extends Hero{
  constructor(name,job,healt,mana,attack,money) {
      super(name,job,healt,mana,attack,money)
  }
  skill(jurus){
    return 'Terimalah serangan sihir ini..'
  }
}

class Knight extends Hero{
  constructor(name,job,healt,mana,attack,money) {
      super(name,job,healt,mana,attack,money)
  }
    skill(jurus){
      return 'Lemparan Perisai Suci'
    }
}

var assassin = new Assassin('Rikimaru','Assassin', 1200,543,431,1200)
var knight = new Knight('Leonidas','Knight', 3213,126,431,1700)
var mage = new Mage('Gandalf','Mage', 1130,603,231,2500)
var assassin2 = new Assassin('Ezio','Assassin', 1250,523,431,2100)
console.log(assassin)
