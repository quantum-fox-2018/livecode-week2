const Hero = require('./hero.js')

class Knight extends Hero{
  constructor(name, health, mana, attack, money){
    super(name, health, mana, attack, money, "Lemparan Perisai Suci", "knight")
  }
}

module.exports = Knight
