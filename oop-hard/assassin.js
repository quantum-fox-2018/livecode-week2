const Hero = require('./hero.js')

class Assassin extends Hero{
  constructor(name, health, mana, attack, money){
    super(name, health, mana, attack, money, "Ciat..! Serangan tanpa bayangan..", "assassin")
  }
}

module.exports = Assassin
