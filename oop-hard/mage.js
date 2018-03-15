const {Pahlawan} = require('./pahlawan.js');

class Mage extends Pahlawan {
  constructor(objMage) {
    super(objMage);
    this.skill = "Terimalah serangan sihir ini..";
  }
}

module.exports = {
  Mage
};
