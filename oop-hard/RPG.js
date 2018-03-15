class RpgHero{
  constructor(name,job,health,mana,attack,money){
    this.Nama = name
    this.Job = job
    this.Health = health
    this.Mana = mana
    this.Attack = attack
    this.Money = money
    this._Item = []
    
  }

  SellItem(){

  }

}

class Assasin extends RpgHero{
  constructor(name,job,health,mana,attack,money,skill){
    super(name,job,health,mana,attack,money,skill)
    this.skill = skill
  }
}

class Knight extends RpgHero{
  constructor(name,job,health,mana,attack,money,skill){
      super(name,job,health,mana,attack,money,skill)
      this.skill = skill
  }
}

class Mage extends RpgHero{
  constructor(name,job,health,mana,attack,money,skill){
      super(name,job,health,mana,attack,money,skill)
      this.skill = skill
  }
}


class ItemAttribute{
  constructor(nama, job, healthpoint, manapoint, attackpoint,price){
    this.NamaItem = nama
    this.Job = job
    this.Health = healthpoint
    this.Mana = manapoint
    this.AttackPoint = attackpoint
    this.Price = price
  }
}

let assasin = new Assasin('Rikimaru','Assassin',1200,543,431,1200,"‘Ciat..! Serangan tanpa bayangan..’",)
 //assasin= new Assasin('Ezio','Assassin',1250,523,431,2100,"‘Ciat..! Serangan tanpa bayangan..’")
let knigt = new Knight('Leonidas','Knight',3213,126,431,1700)
let mage = new Mage('Mage','Health',1130,603,231,2500)
let itemAttribute = new ItemAttribute('kapak','knight',200,150,20,`${70000000000} dollar`)

console.log(knigt);
