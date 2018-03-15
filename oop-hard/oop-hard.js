class Hero {
  constructor(name, job, health, mana, defense, money) {

    this.name = name
    this.job = job
    this.health = health
    this.mana = mana
    this.defense = defense
    this.money = money

  }

}

class Assassin extends Hero {
  constructor() {

  }

  skill(){
    return 'Ciat..! Serangan tanpa bayangan..'
  }
}

class Knight extends Hero {
  constructor() {

  }

  skill(){
    return 'Lemparan Perisai Suci'
  }
}

class Mage extends Hero {
  constructor() {

  }

  skill(){
    return 'Terimalah serangan sihir ini..'
  }
}
