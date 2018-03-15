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
                            this._players[index].healthpoint += wep.healthpoint;
                            this._players[index].manapoint += wep.manapoint;
                            this._players[index].attackpoint += wep.attackpoint;
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
                            this._players[index].healthpoint += wep.healthpoint;
                            this._players[index].manapoint += wep.manapoint;
                            this._players[index].attackpoint += wep.attackpoint;
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
                for(let indexItem = 0; indexItem<this._players.items.length; indexItem++){
                    if(nameOfItem == this._players.items[indexItem].itemName){
                        if(nameOfItem == 'Sword'){
                            let wep = new Sword();
                            this._players.healthpoint -= wep.healthpoint;
                            this._players.manapoint -= wep.manapoint;
                            this._players.attackpoint -= wep.attackpoint;
                            this._players.money += wep.money/2;

                            let newItemArr = [];
                            for(let indexItem2 = 0; indexItem2<indexItem<this._players.items.length; indexItem2++){
                                if(indexItem2 != indexItem){
                                    newItemArr.push(this._players.items[indexItem2]);
                                }
                            }
                            this._players.items = newItemArr;
                        }
                    }
                }
                break; //Ini untuk biar yang ke jual cuman 
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
    }
}

class Knight extends Hero{
    constructor(name, job){
        super(name, job);
        this._health = Math.round(Math.random()*50)+3200;
        this._mana = Math.round(Math.random()*10)+120;
        this._attack = Math.round(Math.random()*5)+430;
    }
}

class Mage extends Hero{
    constructor(name, job){
        super(name, job);
        this._health = Math.round(Math.random()*100)+1000;
        this._mana = Math.round(Math.random()*20)+520;
        this._attack = Math.round(Math.random()*5)+430;
    }
}

class Items{
    constructor(itemName, job, price, healthpoint, manapoint, defensepoint){
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
        super('Staff','Mage', '12000', '250', '30', '15');
    }
}

class Sword extends Items{
    constructor(){
        super('Sword','Knight', '10000', '250', '30', '15');
    }
}
