class Hero {
  constructor() {
    this.name = ''
    this.job = ''
    this.health = 0
    this.mana = 0
    this.attack = 0
    this.money = 0
    this.items = ''
    this.skill = ''
  }
  skill() {
    return this.skill
  }
}

class Assassin extends Hero {
  constructor() {
    super()
      this.skill = 'Ciat..! Serangan tanpa bayangan..'
  }
}

class Knight extends Hero {
  constructor() {
    super()
      this.skill = 'Lemparan Perisai Suci'
  }
}

class Assassin extends Hero {
  constructor() {
    super()
      this.skill = ''
  }
}
