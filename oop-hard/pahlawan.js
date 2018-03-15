class Pahlawan {
  constructor(objPahlawan) {
    this.name = objPahlawan.name;
    this.job = objPahlawan.job;
    this.health = objPahlawan.health;
    this.mana = objPahlawan.mana;
    this.attack = objPahlawan.attack;
    this.money = objPahlawan.money;
    this.skill = objPahlawan.skill;
    this.items = [];
  }

  buyItem(newItem) {
    if(newItem.job.indexOf(this.job) === -1) {
      return `${this.job} tidak dapat membeli ${newItem.name}`;
    } else {
      if(this.money < newItem.price) {
        return `Uang tidak cukup`;
      } else {
        this.money -= newItem.price;
        this.health += newItem.healthpoint;
        this.mana += newItem.manapoint;
        this.attack += newItem.attackpoint;
        this.items.push(newItem);
      }
    }
  }

  sellItem(deleteItem) {
    let isFind = false;
    for(let i in this.items) {
      if(this.items[i].name == deleteItem.name) {
        isFind = true;
      }
    }
    if(isFind){
      this.money += Math.round(deleteItem.price/2);
      this.health -= deleteItem.healthpoint;
      this.mana -= deleteItem.manapoint;
      this.attack -= deleteItem.attackpoint;
      for(let i in this.items) {
        if(this.items[i].name === deleteItem.name) {
          this.items.splice(i, 1);
        }
      }
    } else {
      return "item tidak ada"
    }
  }

  attackMonster(monster) {
    let isWeakness;
    let jumlahAttack;
    let isAlive = true;
    let isMonsterAlive = true;
    if(monster.weakness.indexOf(this.job) === -1) {
      isWeakness = false;
    } else {
      isWeakness = true;
    }
    console.log("Weakness?? ", isWeakness);
    while(isAlive && isMonsterAlive) {
      //pahlawan Menyerang
      if(isWeakness) {
        jumlahAttack = this.attack*1.5;
      } else {
        jumlahAttack = this.attack;
      }
      if(isAlive) {
        monster.health -= jumlahAttack;
        if(monster.health <= 0) {
          isMonsterAlive = false;
        }
      }
      if(isMonsterAlive) {
        this.health -= monster.attack;
        if(this.health <= 0) {
          isAlive = false;
        }
      }
      console.log(`Kamu berhasil menyerang ${monster.name} dengan jumlah serangan ${jumlahAttack}. Darah kamu tersisa ${this.health} jadi berhati-hatilah.`);
    }
    if(isAlive) {
      console.log(`Kamu berhasil membutuh ${monster.name}. dan sisa darah kamu adalah ${this.health}.`);
    }
    if(isMonsterAlive) {
      console.log(`Kamu kalah sebaiknya pulang ke kota dan beli item lagi.`);
    }
  }
}

module.exports = {
  Pahlawan
};
