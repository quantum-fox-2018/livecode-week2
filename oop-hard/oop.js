class Hero {
  constructor() {
    this.name = ''
    // this.job = ''
    // this.health = 0
    // this.mana = 0
    // this.attack = 0
    // this.money = 0
    // this.items = []
    this.skill = ''
  }
  skill() {
    console.log(this.skill);
  }
}

class Assassin extends Hero {
  constructor() {
    super()
      this.name = 'Assassin'
      this.skill = 'Ciat..! Serangan tanpa bayangan..'
  }
}

class Knight extends Hero {
  constructor() {
    super()
      this.name = 'Knight'
      this.skill = 'Lemparan Perisai Suci'
  }
}

class Mage extends Hero {
  constructor() {
    super()
      this.name = 'Mage'
      this.skill = 'Terimalah serangan sihir ini..'
  }
}

//------------------------------karakter------------------
class Karakter {
  constructor() {
    this.Name = ''
    this.Job = ''
    this.Health = 0
    this.Mana = 0
    this.Attack = 432
    this.Money = 0
    this.items = []
  }

  buyItem(item) {
    if (item.job.includes(this.Job) === true) {
      if ((this.Money - item.price) >= 0 ) {
        this.Health += item.healthpoint
        this.Mana += item.manapoint
        this.Attack += item.attackpoint
        this.Money -= item.price
        this.items.push(item.name)
      } else {
        console.log('Uang tidak cukup untuk membeli');
      }
    } else {
      console.log('Item ini tidak cocok untuk tipe Hero ini...');
    }
  }
  sellItem(item) {
    if (this.items.includes(item.name) === true) {
      this.Health -= item.healthpoint
      this.Mana -= item.manapoint
      this.Attack -= item.attackpoint
      this.Money += ((item.price)/2)
      let index = 0
      for (var i = 0; i < this.item.length; i++) {
        if(this.item[i] === item.name) {
          index = i
        }
      }
      this.item.splice(index,1)
    } else {
      console.log('Karakter tidak memiliki item tersebut');
    }
  }

  serang(monster) {
    // let status = false
    // for (var i = 0; i < monster.weakness.length; i++) {
    //   if(monster.weakness[i] === this.Job) {
    //     status = true
    //   }
    // }
    //
    // if (status === true) {
    //   this.Attack = (this.Attack+(this.Attack/2))
    // }


    monster.health -= this.Attack
    console.log(`**Kamu Berhasil Menyerang ${monster.name} dengan jumlah serangan ${this.Attack} Darah kamu terisaa ${this.Health} jadi barhati-hatilah**`)
    if (monster.health > 0) {
      this.Health -= monster.attack

    } else if (monster.health <= 0) {
      return `**Kamu berhasil membunuh monster ${monster.name}. dan sisa darah kamu adalah ${this.Health}**`
    }

    if (this.Health <= 0 || monster.attack > this.Health) {
      return '**Kamu kalah sebaiknya pulang ke kota dan beli item lagi**'
    }

  }
}

class Rikimaru extends Karakter {
  constructor() {
    super()
      this.Name = 'Rikimaru'
      this.Job = 'Assassin'
      this.Health = 1200
      this.Mana = 543
      // this.Attack = 431
      this.Money = 1200
      this.items = []
  }
}
class Leonidas extends Karakter {
  constructor() {
    super()
    this.Name = 'Leonidas'
    this.Job = 'Knight'
    this.Health = 3213
    this.Mana = 126
    // this.Attack = 431
    this.Money = 1700
    this.items = []
  }
}
class Gandalf extends Karakter {
  constructor() {
    super()
    this.Name = 'Gandalf'
    this.Job = 'Mage'
    this.Health = 1130
    this.Mana = 603
    this.Attack = 231
    this.Money = 2500
    this.items = []
  }
}
class Ezio extends Karakter {
  constructor() {
    super()
    this.Name = 'Ezio'
    this.Job = 'Assassin'
    this.Health = 1250
    this.Mana = 523
    // this.Attack = 431
    this.Money = 2100
    this.items = []
  }
}
//---------------------------------item---------------

class Item {
  constructor() {
    this.name = ''
    this.job = []
    this.price = 0
    this.healthpoint = 0
    this.manapoint = 0
    this.attackpoint = 0
  }
}

class Balmung extends Item {
  constructor() {
    super()
      this.name = 'Balmung'
      this.job = ['Knight', 'Mage']
      this.price = 2000
      this.healthpoint = 300
      this.manapoint = 300
      this.attackpoint = 200
  }
}

class DeathBringer extends Item {
  constructor() {
    super()
      this.name = 'DeathBringer'
      this.job = ['Knight', 'Assassin']
      this.price = 1500
      this.healthpoint = 200
      this.manapoint = 150
      this.attackpoint = 300
  }
}
//--------------------Monster---------
class Monster {
  constructor() {
    this.name = ''
    this.health = 0
    this.attack = 0
    this.weakness = []
  }
}

class Poring extends Monster {
  constructor() {
    super()
      this.name = 'Poring'
      this.health = 1000
      this.attack = 100
      this.weakness = ['Mage']
  }
}

class Baphomet extends Monster {
  constructor() {
    super()
      this.name = 'Baphomet'
      this.health = 1200
      this.attack = 150
      this.weakness = ['Knight', 'Assassin']
  }
}

let leonidas = new Leonidas()
let balmung = new Balmung()
let deathbringer = new DeathBringer()
let bapho = new Baphomet()

leonidas.buyItem(deathbringer)
console.log(leonidas);

// leonidas.serang(bapho)

while ( leonidas.Health > 0 || bapho.health > 0 ) {
  leonidas.serang(bapho)
}
