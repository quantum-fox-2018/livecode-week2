const {Assassin} = require('./assassin.js');
const {Mage} = require('./mage.js');
const {Knight} = require('./knight.js');
const {Item} = require('./item.js');
const {Monster} = require('./monster.js');

let rikimaru = new Assassin({
  name: "Rikimaru",
  job: "Assassin",
  health: 1200,
  mana: 543,
  attack: 432,
  money: 1200
});

let leonidas = new Knight({
  name: "Leonidas",
  job: "Knight",
  health: 3213,
  mana: 126,
  attack: 431,
  money: 1700
});

let gandalf = new Mage({
  name: "Gandalf",
  job: "Mage",
  health: 1120,
  mana: 603,
  attack: 231,
  money: 2500
});

let ezio = new Assassin({
  name: "Rikimaru",
  job: "Assassin",
  health: 1250,
  mana: 543,
  attack: 431,
  money: 2100
});

let refresh = new Item({
  name: "Refresh",
  job: ["Assassin", "Mage"],
  price: 400,
  healthpoint: 300,
  manapoint: 100,
  attackpoint: 0
});

let attackk = new Item({
  name: "Attack",
  job: ["Assassin", "Knight", "Mage"],
  price: 1000,
  healthpoint: 0,
  manapoint: 0,
  attackpoint: 200
});

console.log(leonidas.buyItem(refresh));

console.log(gandalf.buyItem(attackk));
console.log(gandalf.buyItem(attackk));
console.log(gandalf.buyItem(attackk));
//console.log(rikimaru.sellItem(attackk));
console.log(gandalf);

let monsterKucing = new Monster({
  name: "Monster Kucing",
  health: 3000,
  attack: 1000,
  weakness: ["Assassin", "Knight"],
});

let monsterPanda = new Monster({
  name: "Monster Panda",
  health: 2500,
  attack: 1000,
  weakness: ["Assassin", "Mage"],
});

gandalf.attackMonster(monsterKucing);
