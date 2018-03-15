const Assassin = require('./assassin.js')
const Knight = require('./knight.js')
const Mage = require('./mage.js')
const Item = require('./item.js')
const Monster = require('./monster.js')

//create hero
//name, health, mana, attack, money
var assassinRiki = new Assassin("Rikimaru", 1200, 543, 431, 1200 )
var knightLeo = new Knight("Leonidas", 3213, 126, 431, 1700 )
var mageGan = new Mage("Gandalf", 1130, 603, 231, 2500 )
var assassinEzio = new Assassin("Ezio", 1250, 523, 431, 2100 )

//create item
// name, job, detail, price, healthPoint, attackPoint, manaPoint
var sword = new Item("Samurai", "knight", "crafted in JAPAN", 1000, 300, 150, 250)
var stick = new Item("Voldemort's Wand", "mage", "stolen from Voldemort", 1000, 300, 150, 150)

//create monster
// name, health, attack, weakness
var killerDog = new Monster("killerDog", 1500, 100, "knight")
var killerBird = new Monster("killerBird", 9000, 5000, "assassin")

//pakai useSkill
console.log(assassinRiki.name, assassinRiki.useSkill());
console.log(knightLeo.name, knightLeo.useSkill());
console.log(mageGan.name, mageGan.useSkill());
console.log(assassinEzio.name, assassinEzio.useSkill());

//beli item
console.log(knightLeo);
knightLeo.buyItem(sword)

console.log("setelah beli");
console.log(knightLeo);

console.log("beli lagi")
knightLeo.buyItem(sword)

console.log("setelah jual")
knightLeo.sellItem(sword)
console.log(knightLeo);

console.log("assassin coba beli stick")
assassinRiki.buyItem(stick)

//serangan pertama
knightLeo.attackMonster(killerDog)
//serangan kedua, monster mati
knightLeo.attackMonster(killerDog)
//serang monster pertama, diserang balik, hero mati
mageGan.attackMonster(killerBird)
