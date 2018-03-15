const Hero = require('./hero.js')

class Mage extends Hero{
  constructor(name, health, mana, attack, money){
    super(name, health, mana, attack, money, "Terimalah serangan sihir ini..", "mage")
  }
}

module.exports = Mage
