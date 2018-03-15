class Hero {
  constructor(player) {
    this.name = player.name
    this.job = player.job
    this.health = player.health
    this.mana = player.mana
    this.attack = player.attack
    this.money = player.money
    this.item = []
  }

  skill() {
    switch (this.job) {
      case 'Assassin': return "Ciat..! Serangan tanpa bayangan.."; break;
      case 'Knight': return "Lemparan Perisai Suci"; break;
      case 'Mage': return "Terimalah serangan sihir ini.."; break;
      default: return "Saya belum mempunyai skill"; break;
    }
  }

  buyItem(item) {
    if(this.job == item.job) {
      if(this.money >= item.price) {
        this.health += item.healthpoint
        this.mana += item.manapoint
        this.attack += item.attackpoint
        this.money -= item.price
        this.item.push(item)
        return `Kamu berhasil menggunakan ${item.name}`
      }
      return 'Uang kamu tidak cukup untuk membeli item ini'
    }
    return 'Job kamu tidak sesuai dengan item ini'
  }

  sellItem(item) {
    for(let i=0; i<this.item.length; i++) {
      if(this.item[i].name == item.name) {
        this.health -= item.healthpoint
        this.mana -= item.manapoint
        this.attack -= item.attackpoint
        this.money += (item.price/2)
        this.item.splice(i,1)
        return `Kamu berhasil menjual ${item.name} seharga ${(item.price/2)}`
      }
    }
    return `kamu tidak memiliki ${item.name}`
  }

  attackMonster(monster) {
    if(monster.weakness == this.job) {
      this.attack += (this.attack/2)
    }

    while(this.health >= 0 || monster.health >= 0) {
      let currentHealthMonster = monster.health - this.attack
      if(currentHealthMonster <= 0) {
        this.attack -= (this.attack/2)
        return `Kamu berhasil membunuh monster ${monster.name}. dan sisa darah kamu adalah ${this.health}`
      } else {
        monster.health -= this.attack
        let currentHealthPlayer = this.health - monster.attack
        if(currentHealthPlayer <= 0) {
          return `Kamu kalah sebaiknya pulang ke kota dan beli item lagi`
        }
        this.health -= monster.attack
      }
      console.log(`Kamu Berhasil Menyerang ${monster.name} dengan jumlah serangan ${this.attack} Darah kamu terisaa ${this.health} jadi barhati-hatilah`)
    }
  }

}

class Assassin extends Hero {
  constructor(player) {
    super(player)
  }
}

class Knight extends Hero {
  constructor(player) {
    super(player)
  }
}

class Mage extends Hero {
  constructor(player) {
    super(player)
  }
}

let rikimaru = new Assassin({
  name: 'Rikimaru',
  job: 'Assassin',
  health: 1200,
  mana: 543,
  attack: 431,
  money: 1200
})

let leonidas = new Knight({
  name: 'Leonidas',
  job: 'Knight',
  health: 3213,
  mana: 126,
  attack: 431,
  money: 1700
})

let gandalf = new Mage({
  name: 'Gandalf',
  job: 'Mage',
  health: 1130,
  mana: 603,
  attack: 231,
  money: 2500
})

let ezio = new Assassin({
  name: 'Ezio',
  job: 'Assassin',
  health: 1250,
  mana: 523,
  attack: 431,
  money: 2100
})

class Item {
  constructor(item) {
    this.name = item.name
    this.job = item.job
    this.price = item.price
    this.healthpoint = item.healthpoint
    this.manapoint = item.manapoint
    this.attackpoint =item.attackpoint
  }
}

let blade = new Item({
  name: 'Divine Rapier',
  job: 'Assassin',
  price: 2000,
  healthpoint: 500,
  manapoint: 200,
  attackpoint: 1000
})

let ward = new Item({
  name: 'Sentry Ward',
  job: 'Mage',
  price: 1500,
  healthpoint: 300,
  manapoint: 500,
  attackpoint: 200
})

////testcase: instense Hero baru, dan menggunakan skill sesuai dengan job yang dimiliki
console.log(rikimaru)
// console.log(rikimaru.skill())
// console.log(gandalf.skill())

////testcase: instense Item baru dan method membeli (sesuai dengan job, money) dan menjualnya kembali
// console.log(blade)
// console.log(rikimaru.buyItem(blade))
// console.log(rikimaru)
// console.log(gandalf.buyItem(blade))

// console.log(ezio)
// console.log(ezio.buyItem(blade))
// console.log(ezio)
// console.log(ezio.sellItem(blade))
// console.log(ezio)
// console.log(rikimaru.sellItem(blade))


class Monster {
  constructor(monster) {
    this.name = monster.name
    this.health = monster.health
    this.attack = monster.attack
    this.weakness = monster.weakness
  }
}

let centaur = new Monster({
  name: 'Centaur',
  health: 1000,
  attack: 100,
  weakness: 'Mage'
})

let bahamut = new Monster({
  name: 'Bahamut',
  health: 4000,
  attack: 250,
  weakness: 'Knight'
})

console.log(centaur)
console.log(bahamut)

console.log(gandalf.attackMonster(centaur))
console.log(gandalf.attackMonster(bahamut))

console.log(gandalf.buyItem(ward))
console.log(gandalf.attackMonster(bahamut))
console.log(bahamut)
console.log(ezio)
console.log(ezio.attackMonster(bahamut))
console.log(bahamut)
console.log(leonidas)
console.log(leonidas.attackMonster(bahamut))