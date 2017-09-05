
var userInput = Number(process.argv[2]);

function diceRoll(numberOfDice) {
  var result = "";
  for (var i = 1; i <= numberOfDice; i++) {
    if (i !== numberOfDice) {
      result += Math.floor(Math.random() * 6 + 1) + ", ";
    } else if (i === numberOfDice) {
      result += Math.floor(Math.random() * 6 + 1);
    }
  }
  return result;
}

console.log("Rolled " + userInput + " dice: " + diceRoll(userInput));