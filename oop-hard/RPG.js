class RpgHero{
  constructor(name,job,health,mana,attack,money){
    this.nama = name
    this.job = job
    this.health = health
    this.mana = mana
    this.attact = attack
    this.money = money
  }

  class assasin extends RpgHero{
    constructor(name,job,health,mana,attack,money,skill){
      this.skill = skill
    }
  }

  class Knight extends RpgHero{
    constructor(name,job,health,mana,attack,money,skill){
        this.skill = skill
    }
  }

  class Mage extends RpgHero{
    constructor(name,job,health,mana,attack,money,skill){
        this.skill = skill
    }
  }

}

let rpgHero = new RpgHero()

console.log(rpgHero);
