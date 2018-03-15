class Hero {
  constructor(name, health, mana, attack, money, skill, job){
    this.name = name
    this.health = health
    this.mana = mana
    this.attack = attack
    this.money = money
    this.items = []
    this.skill = skill
    this.job = job
  }

  useSkill(){
    return this.skill
  }

  buyItem(item){
    if (item.job === this.job) {
      if (item.price <= this.money) {
        this.money = this.money - item.price
        this.health = this.health + item.healthPoint
        this.mana = this.mana + item.manaPoint
        this.attack = this.attack + item.attackPoint
        this.items.push(item)
      }else{
        console.log("uang tidak cukup")
      }
    }else{
      console.log("job tidak sesuai")
    }
  }

  sellItem(item){
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === item.name) {
        this.money = this.money + (item.price/2)
        this.health = this.health - item.healthPoint
        this.mana = this.mana - item.manaPoint
        this.attack = this.attack - item.attackPoint
        this.items.splice(i, 1)
        //i = this.items.length
      }
    }
  }

  attackMonster(monster){
    if (monster.weakness === this.job) {
      this.attack = this.attack * 1.5
    }
    monster.health = monster.health - this.attack
    if (monster.health <= 0) {
      let str = `Kamu berhasil membunuh monster ${monster.name} dan sisa darah kamu adalah ${this.health}`
      console.log(str)
    }else{
      //diserang balik
      this.health = this.health - monster.attack
      if (this.health <= 0) {
        let str = `Kamu kalah sebaiknya pulang ke kota dan beli item lagi`
        console.log(str)
      }else{
        let str = `Kamu berhasil Menyerang ${monster.name} dengan jumlah serangan ${this.attack} Darah kamu tersisa ${this.health} jadi berhati-hatilah`
        console.log(str);
      }
    }
  }
}

module.exports = Hero
