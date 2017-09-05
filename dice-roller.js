//Capture 1 Parameter in command line
var userInput = process.argv[2];
//Create a function for dice roll
function diceRoll(numberOfDice) {
  //Use parameter for number of dice to roll
  //Loop through the number provided
  var result = "";
  for (var i = 1; i <= numberOfDice; i++) {
    result += Math.floor(Math.random() * 6 + 1) + ", ";
  }
  return result;
  //Use Math.random multiplied by 6 for dice roll
  //Output "Rolled (number) dice: (generated numbers)"
}
console.log("Rolled " + userInput + " dice: " + diceRoll(userInput));