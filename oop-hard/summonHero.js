"use strict"

class CharacterGame {
    constructor(name, job, health, mana, attack, money) {
        this.name = name;
        this.job = job;
        this.health = health;
        this.mana = mana;
        this.attack = attack;
        this.money = money;
    }

    buyItem() {
        let sword = new Sword();
        let stuff = new Stuff();

        if (this.job === sword.item_job_name && this.money >= sword.item_price) {
            this.health += sword.item_healthpoint;
            this.mana += sword.item_manapoint;
            this.attack += sword.item_attackpoint;
            this.money -= sword.item_price;
        }

        if (this.job === stuff.item_job_name && this.money >= stuff.item_price) {
            this.health += stuff.item_healthpoint;
            this.mana += stuff.item_manapoint;
            this.attack += stuff.item_attackpoint;
            this.money -= stuff.item_price;
        }
    }
}

class Rikimaru extends CharacterGame {
    constructor() {
        super('Rikimaru', 'Assassin', 1200, 543, 431, 1200);
    }

    // buyItem() {
    //     let sword = new Sword();
    //     let stuff = new Stuff();

    //     if (this.job === sword.item_job_name && this.money >= sword.item_price) {
    //         this.health += sword.item_healthpoint;
    //         this.mana += sword.item_manapoint;
    //         this.attack += sword.item_attackpoint;
    //         this.money -= sword.item_price;
    //     }

    //     if (this.job === stuff.item_job_name && this.money >= stuff.item_price) {
    //         this.health += stuff.item_healthpoint;
    //         this.mana += stuff.item_manapoint;
    //         this.attack += stuff.item_attackpoint;
    //         this.money -= stuff.item_price;
    //     }
    // }
}

class Leonidas extends CharacterGame {
    constructor() {
        super('Leonidas', 'Knight', 3213, 126, 431, 1700);
    }
}

class Gandalf extends CharacterGame {
    constructor() {
        super('Gandalf', 'Mage', 1130, 603, 231, 2500);
    }
}

class Ezio extends CharacterGame {
    constructor() {
        super('Ezio', 'Assassin', 1250, 523, 431, 2100);
    }
}

class Job {
    constructor(skill) {
        this.skill = skill;
    }
}

class Assassin extends Job{
    constructor() {
        super('Ciat..! Serangan tanpa bayangan..')
    }
}

class Knight extends Job{
    constructor() {
        super('Lemparan Perisai Suci')
    }
}

class Mage extends Job{
    constructor() {
        super('Terimalah serangan sihir ini..')
    }
}

class Item {
    constructor(item_name, item_job_name, item_price, item_healthpoint, item_manapoint, item_attackpoint) {
        this.item_name = item_name;
        this.item_job_name = item_job_name;
        this.item_price = item_price;
        this.item_healthpoint = item_healthpoint;
        this.item_manapoint = item_manapoint;
        this.item_attackpoint = item_attackpoint;
    }
}

class Sword extends Item{
    constructor() {
        super('Excalibur', 'Knight', 1500, 200, 100, 300);
    }
}

class Stuff extends Item{
    constructor() {
        super('Forcestuff', 'Mage', 1300, 300, 400, 200);
    }
}

let rikimaru = new Rikimaru();
let charGame = new CharacterGame();

rikimaru.buyItem();