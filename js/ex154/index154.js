let player = {
  name: null,
  energy: 100,
  lives: 3,
  loseEnergy: function(value) {
    if (value >= 0 && value <= 100) {
      this.energy -= value;
    }
    if (this.energy <= 0) this.lives -= 1;
  },
  recoverEnergy: function(value) {
    if (value >= 0 && value <= 100) {
      this.energy += value;
    }
  },
  loseLife: function() {
    this.lives -= 1;
  },
  recoverLife: function() {
    this.lives += 1;
  }
};
player.name = "chris";
console.log(
  `The player  ${player.name} has ${player.energy} energy and ${player.lives} lives`
);
player.loseLife();
console.log(
  `The player ${player.name} has ${player.energy} energy and ${player.lives} lives`
);
player.loseEnergy(10);
console.log(
  `The player ${player.name} has ${player.energy} energy and ${player.lives} lives`
);
player.loseEnergy(5);
console.log(
  `The player ${player.name} has ${player.energy} energy and ${player.lives} lives`
);
player.loseEnergy(15);
console.log(
  `The player ${player.name} has ${player.energy} energy and ${player.lives} lives`
);
player.loseEnergy(20);
console.log(
  `The player ${player.name} has ${player.energy} energy and ${player.lives} lives`
);
player.recoverEnergy(10);
console.log(
  `The player ${player.name} has ${player.energy} energy and ${player.lives} lives`
);
player.loseEnergy(30);
console.log(
  `The player ${player.name} has ${player.energy} energy and ${player.lives} lives`
);
player.loseEnergy(40);
console.log(
  `The player ${player.name} has ${player.energy} energy and ${player.lives} lives`
);
player.loseLife();
console.log(
  `The player ${player.name} has ${player.energy} energy and ${player.lives} lives`
);
player.recoverLife();
console.log(
  `The player ${player.name} has ${player.energy} energy and ${player.lives} lives`
);
player.recoverLife();
console.log(
  `The player ${player.name} has ${player.energy} energy and ${player.lives} lives`
);
