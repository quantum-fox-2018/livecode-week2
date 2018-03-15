class Players{
    constructor(){
        this._players = [];
    }

    createPlayer(name, job){
        if(job == 'Assasin'){
            this._players.push(new Assasin(name, job));
        }else if(job == 'Knight'){
            this._players.push(new Knight(name, job));
        }else if(job == 'Mage'){
            this._players.push(new Mage(name, job));
        }
    }

    showPlayers(){
        let resultStr = '';
        for(let index = 0; index<this._players.length; index++){
            resultStr += `${index+1}. Name: ${this._players[index].name}, Job: ${this._players[index].job}, Health: ${this._players[index].health}, Mana: ${this._players[index].mana}, Attack: ${this._players[index].attack}, Money: ${this._players[index].money}\n`
        }
        return resultStr;
    }

    buyItems(name, nameOfItem){
        for(let index = 0; index<this._players.length; index++){
            if(name == this._players[index].name){
                if(nameOfItem === 'Sword' && this._players[index].job != 'Knight'){
                    console.log('Cannot purchase item for different job!')
                }else if(nameOfItem === 'Staff' && this._players[index].job != 'Mage'){
                    console.log('Cannot purchase item for different job!')
                }
                else{
                    if(nameOfItem == 'Sword'){
                        let wep = new Sword();
                        let price = wep.price;
                        if(this._players[index]._money < price){
                            console.log('Cannot buy this item. Insufficient amount of money.');
                        }else{
                            this._players[index].items.push(new Sword());
                            this._players[index].money -= price;
                            this._players[index].health += wep.healthpoint;
                            this._players[index].mana += wep.manapoint;
                            this._players[index].attack += wep.attackpoint;
                            console.log('Transaction is complete!')
                        }

                    }else if(nameOfItem == 'Staff'){
                        let wep = new Staff();
                        let price = wep.price();
                        
                        if(this._players[index]._money < price){
                            console.log('Cannot buy this item. Insufficient amount of money.');
                        }else{
                            this._players[index].items.push(new Staff());
                            this._players[index].money -= price;
                            this._players[index].health += wep.healthpoint;
                            this._players[index].mana += wep.manapoint;
                            this._players[index].attack += wep.attackpoint;
                            console.log('Transaction is complete!')
                            
                        }
                    }   
                }
            }
        }  
    }

    sellItem(name, nameOfItem){
        for(let index = 0; index<this._players.length; index++){
            if(this._players[index].name == name){
                for(let indexItem = 0; indexItem<this._players[index].items.length; indexItem++){
                    if(nameOfItem == this._players[index].items[indexItem].itemName){
                        if(nameOfItem == 'Sword'){
                            let wep = new Sword();
                            this._players[index].health -= wep.healthpoint;
                            this._players[index].mana -= wep.manapoint;
                            this._players[index].attack -= wep.attackpoint;
                            this._players[index].money += wep.price/2;

                            let newItemArr = [];
                            for(let indexItem2 = 0; indexItem2<this._players[index].items.length; indexItem2++){
                                if(indexItem2 != indexItem){
                                    newItemArr.push(this._players[index].items[indexItem2]);
                                }
                            }
                            this._players[index].items = newItemArr;
                            console.log(`You have sell your ${nameOfItem}`);
                        }else if(nameOfItem == 'Staff'){
                            let wep = new Staff();
                            this._players[index].health -= wep.healthpoint;
                            this._players[index].mana -= wep.manapoint;
                            this._players[index].attack -= wep.attackpoint;
                            this._players[index].money += wep.price/2;

                            let newItemArr = [];
                            for(let indexItem2 = 0; indexItem2<this._players[index].items.length; indexItem2++){
                                if(indexItem2 != indexItem){
                                    newItemArr.push(this._players[index].items[indexItem2]);
                                }
                            }
                            this._players[index].items = newItemArr;
                            console.log(`You have sell your ${nameOfItem}`);
                        }
                    }
                    break; //Ini untuk biar yang ke jual cuman 1 item saja
                }  
            }
        }
    }

    playerAtk(name){
        for(let index = 0; index<this._players.length; index++){
            if(name == this._players[index].name){
                let meetMonster = Math.round(Math.random())

                if(meetMonster == 1){
                    let monster = new Slime();
                    let atkPts = this._players[index].attack;
                    if(this._players[index].job == monster.weakness){
                        atkPts += (this._players[index].attack / 2)
                    }
                    monster.health -= atkPts;
                    this._players.health -= monster.attack;
                    
                    if(monster.health <= 0){
                        console.log(`Kamu berhasil membunuh ${monster.name} dan sisa darah kamu adalah ${this._players[index].health}`)
                    }else if(monster.health > 0){
                        console.log(`Kamu Berhasil Menyerang ${monster.name} dengan jumlah serangan ${atkPts} Darah kamu terisaa ${this._players[index].health} jadi barhati-hatilah`)
                    }else if(this._players[index].health <= 0){
                        console.log('Kamu kalah sebaiknya pulang ke kota dan beli item lagi');
                    }
                }else if(meetMonster == 0){
                    let monster = new Wolf();
                    let atkPts = this._players[index].attack;
                    if(this._players[index].job == monster.weakness){
                        atkPts += (this._players[index].attack / 2)
                    }
                    monster.health -= atkPts;
                    this._players.health -= monster.attack;
                    
                    if(monster.health <= 0){
                        console.log(`Kamu berhasil membunuh ${monster.name} dan sisa darah kamu adalah ${this._players[index].health}`)
                    }else if(monster.health > 0){
                        console.log(`Kamu Berhasil Menyerang ${monster.name} dengan jumlah serangan ${atkPts} Darah kamu terisaa ${this._players[index].health} jadi barhati-hatilah`)
                    }else if(this._players[index].health <= 0){
                        console.log('Kamu kalah sebaiknya pulang ke kota dan beli item lagi');
                    }
                }
            }
        }
        
    }
}

class Hero{
    constructor(name, job){
        this._name = name;
        this._job = job;
        this._money = 2500;
        this._items = [];
    }

    get name(){
        return this._name;
    }

    get job(){
        return this._job;
    }

    get money(){
        return this._money;
    }

    set money(money){
        this._money = money;
    }

    set items(items){
        this._items = items
    }

    get items(){
        return this._items
    }
}

class Assasin extends Hero{
    constructor(name, job){
        super(name, job);
        this._health = Math.round(Math.random()*50)+1200;
        this._mana = Math.round(Math.random()*20)+520;
        this._attack = Math.round(Math.random()*5)+430;
        this._skill = 'Ciat..! Serangan tanpa bayangan..'
    }

    get health(){
        return this._health;
    }

    get mana(){
        return this._mana;
    }

    get attack(){
        return this._attack;
    }

    set health(health){
        this._health = health;
    }

    set mana(mana){
        this._mana = mana;
    }

    set attack(attack){
        this._attack = attack;
    }
}

class Knight extends Hero{
    constructor(name, job){
        super(name, job);
        this._health = Math.round(Math.random()*50)+3200;
        this._mana = Math.round(Math.random()*10)+120;
        this._attack = Math.round(Math.random()*5)+430;
        this._skill = 'Lemparan Perisai Suci'
    }
    
    get health(){
        return this._health;
    }

    get mana(){
        return this._mana;
    }

    get attack(){
        return this._attack;
    }

    set health(health){
        this._health = health;
    }

    set mana(mana){
        this._mana = mana;
    }

    set attack(attack){
        this._attack = attack;
    }
}

class Mage extends Hero{
    constructor(name, job){
        super(name, job);
        this._health = Math.round(Math.random()*100)+1000;
        this._mana = Math.round(Math.random()*20)+520;
        this._attack = Math.round(Math.random()*5)+430;
        this._skill = 'Terimalah serangan sihir ini..'
    }
    
    get health(){
        return this._health;
    }

    get mana(){
        return this._mana;
    }

    get attack(){
        return this._attack;
    }

    set health(health){
        this._health = health;
    }

    set mana(mana){
        this._mana = mana;
    }

    set attack(attack){
        this._attack = attack;
    }
}

class Items{
    constructor(itemName, job, price, healthpoint, manapoint, attackpoint){
        this._itemName = itemName;
        this._job = job;
        this._price = price;
        this._healthpoint = healthpoint;
        this._manapoint = manapoint;
        this._attackpoint = attackpoint;
    }

    get price(){
        return this._price
    }

    get job(){
        return this._job
    }
    get itemName(){
        return this._itemName
    }

    get healthpoint(){
        return this._healthpoint
    }

    get manapoint(){
        return this._manapoint
    }

    get attackpoint(){
        return this._attackpoint
    }
}

class Staff extends Items{
    constructor(){
        super('Staff','Mage', 1200, 250, 30, 15);
    }
}

class Sword extends Items{
    constructor(){
        super('Sword','Knight', 1000, 250, 5, 30);
    }
}

class Monster{
    constructor(name, health, attack, weakness){
        this._name = name;
        this._health = health;
        this._attack = attack;
        this._weakness = weakness;
    }

    get name(){
        return this._name;
    }

    set health(health){
        this._health = health
    }

    get health(){
        return this._health;
    }

    get attack(){
        return this._attack;
    }

    get weakness(){
        return this._weakness;
    }
}

class Slime extends Monster{
    constructor(){
        super('Slime', 300, Math.floor(Math.random()*10)+20, 'Mage');
    }
}

class Wolf extends Monster{
    constructor(){
        super('Wolf', 550, Math.floor(Math.random()*10)+50, 'Assasin') 
    }
}


//DRIVER CODE
//Players:
// 1. Name: Rikimaru, Job: Assassin, Health: 1200, Mana: 543, Defense: 431, Money: 1200
// 2. Name: Leonidas, Job: Knight, Health: 3213, Mana: 126, Defense: 431, Money: 1700
// 3. Name: Gandalf, Job: Mage, Health: 1130, Mana: 603, Defense: 231, Money: 2500
// 4. Name: Ezio, Job: Assassin, Health: 1250, Mana: 523, Defense: 431, Money: 2100

//Test create player
let player = new Players();
player.createPlayer('Rikimaru', 'Assasin')
player.createPlayer('Leonidas', 'Knight')
player.createPlayer('Gandalf', 'Mage')
player.createPlayer('Ezio', 'Assasin');
console.log(player.showPlayers());

//Test Buy
player.buyItems('Leonidas', 'Sword');
console.log('\n\n================================================================\n\n',player.showPlayers());
// player.buyItems('Leonidas', 'Staff');
// player.sellItem('Leonidas', 'Sword');

// console.log('\n\n================================================================\n\n', player.showPlayers());

//Test atk
for(let atk =0; atk<2; atk++){
    player.playerAtk('Leonidas');
}
