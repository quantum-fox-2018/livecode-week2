/*
Simple PSEUODOCODE
1. Buatlah class hero sesuai characteristic. Job adalah properties bukan sebuah child dari class Hero

*/

class Hero {
    constructor(name,health,mana,attack,money) {
        this._name = name,
        this._job = '',
        this._health = health,
        this._mana = mana,
        this._attack = attack,
        this._money = money,
        this._items = [];
    }

    buyItem(objItem) {
        for (let i = 0; i < objItem._job.length; i++) {
            if (objItem._job[i] == this._job && this._money >= objItem._price) {
                this._health += objItem._healthpoint;
                this._mana += objItem._manapoint;
                this._attack += objItem._attackpoint;
                this._money -= objItem._price;
                this._items.push(objItem);
                return console.log(`Anda berhasil membeli ${objItem._nama} !`)
            } else if (objItem._job[i] != this._job) {
                return console.log('Job Anda tidak sesuai untuk membeli item ini !')
            } else if (this._money < objItem._price) {
                return console.log('Uang Anda tidak cukup untuk membeli item ini !')
            }
        }
    }

    attackMonster(objMonster) {
        let statusAttack = true;
        while(this._health > 0 || objMonster._health > 0 && statusAttack == true) {
            if (objMonster._weakness == this._job) {
                this._attack = (this._attack * 1.5);
                objMonster._health -= this._attack;
                console.log(`Kamu Berhasil Menyerang ${objMonster._name} dengan jumlah serangan ${this._attack} Darah kamu terisaa ${this._health} jadi barhati-hatilah`)
                this._health -= objMonster._attack;
                console.log(`Monster ${objMonster._name} menyerang balik sebesar ${objMonster._attack} ! Sisa nyawa monster adalah ${objMonster._health}. Sisa nyawa Anda adalah ${this._health}`)
                
                if (objMonster._health <= 0) {
                    console.log(`Kamu berhasil membunuh monster ${objMonster._name}. dan sisa darah kamu adalah ${this._health}`);
                    statusAttack = false;
                } else if (this._health <= 0) {
                    console.log(`Kamu kalah sebaiknya pulang ke kota dan beli item lagi`);
                    statusAttack = false;
                }
        
            } else {
                objMonster._health -= this._attack;
                console.log(`Kamu Berhasil Menyerang ${objMonster._name} dengan jumlah serangan ${this._attack} Darah kamu terisaa ${this._health} jadi barhati-hatilah`)
                this._health -= objMonster._attack;
                console.log(`Monster ${objMonster._name} menyerang balik sebesar ${objMonster._attack} ! Sisa nyawa monster adalah ${objMonster._health}. Sisa nyawa Anda adalah ${this._health}`)    
            }

            if (objMonster._health <= 0) {
                console.log(`Kamu berhasil membunuh monster ${objMonster._name}. dan sisa darah kamu adalah ${this._health}`);
                statusAttack = false;
            } else if (this._health <= 0) {
                console.log(`Kamu kalah sebaiknya pulang ke kota dan beli item lagi`);
                statusAttack = false;
            }
        }
    }
}

class Assassin extends Hero {
    constructor(name,health,mana,attack,money) {
        super(name,health,mana,attack,money)
        this._job = 'Assassin'
    }
}

class Knight extends Hero {
    constructor(name,health,mana,attack,money) {
        super(name,health,mana,attack,money)
        this._job = 'Knight'
    }
}

class Mage extends Hero {
    constructor(name,health,mana,attack,money) {
        super(name,health,mana,attack,money)
        this._job = 'Mage'
    }
}

class Item {
    constructor(name,job,price,healthpoint,manapoint,attackpoint) {
        this._nama = name,
        this._job = job,
        this._price = price,
        this._healthpoint = healthpoint,
        this._manapoint = manapoint,
        this._attackpoint = attackpoint
    }
}

class Monster {
    constructor(name,health,attack,weakness) {
        this._name = name,
        this._health = health,
        this._attack = attack,
        this._weakness = weakness
    }
}


// RELEASE 0
let pembunuh = new Assassin('Rikimaru',1200,543,431,1200);
let ksatria = new Knight('Leonidas',3213,126,431,1700);
let penyihir = new Mage('Gandalf',1130,603,231,2500);
let pembunuh1 = new Assassin('Ezio',1250,523,431,2100);

let pedang = new Item('Pedang Sakti Mandraguna',['Assassin','Knight'],500,700,700,700);
let tongkat = new Item('Tongkat Sihir Tokcer',['Mage'],700,700,700,700);

// console.log(pembunuh);
// console.log(ksatria);
// console.log(penyihir);
// console.log(pembunuh1);

// console.log(pedang);
// console.log(tongkat);


// RELEASE 1 OK
// penyihir.buyItem(tongkat);
// console.log(penyihir);


// RELEASE 2
let poring = new Monster('Poring',200,10,'Mage');
let spore = new Monster('Spore',700,50,'Knight');
// console.log(poring);
// console.log(spore);

penyihir.attackMonster(spore);





