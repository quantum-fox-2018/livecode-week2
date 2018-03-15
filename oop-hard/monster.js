class Monster {
  constructor(objMonster) {
    this.name = objMonster.name;
    this.health = objMonster.health;
    this.attack = objMonster.attack;
    this.weakness = objMonster.weakness;
  }
}

module.exports = {
  Monster
};
