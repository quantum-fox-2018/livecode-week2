const {Pahlawan} = require('./pahlawan.js');

class Knight extends Pahlawan {
  constructor(objKnight) {
    super(objKnight);
    this.skill = "Lemparan perisai suci";
  }
}

module.exports = {
  Knight
};
