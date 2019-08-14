let playerName = "Patrik Laine is lame";
let teams =
  "New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins";
let message = "Winnipeg is the best Canadian city, Go Winnipeg";

console.log(playerName.slice(0, 15));
console.log(teams.slice(46, 50));
console.log(message.slice(12, 20));
console.log(message.slice(34, 38));

let team = playerName.slice(0, 12).toLocaleUpperCase();
let isStatement = playerName.slice(13, 15);
let jets = teams.slice(46, 50);
let message1 = message.slice(12, 20);
let message2 = message.slice(34, 38);
console.log(
  team +
    " " +
    isStatement +
    " " +
    message1 +
    " jets player" +
    message2 +
    " " +
    jets
);
