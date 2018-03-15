const {Pahlawan} = require('./pahlawan.js');

class Assassin extends Pahlawan {
  constructor(objAssassin) {
    super(objAssassin);
    this.skill = "Ciat..! Serangan tanpa bayangan..";
  }
}

module.exports = {
  Assassin
};
