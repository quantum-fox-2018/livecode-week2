class Item {
  constructor(objItem) {
    this.name = objItem.name;
    this.job = objItem.job;
    this.price = objItem.price;
    this.healthpoint = objItem.healthpoint;
    this.manapoint = objItem.manapoint;
    this.attackpoint = objItem.attackpoint;
  }
}

module.exports = {
  Item
};
