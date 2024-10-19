let max = prompt("Enter the number :- ");
let random = Math.floor(Math.random() * max) + 1;

console.log(random);

let guess = prompt("Guess the number :- ");
while (true) {
  if (guess == "quit") {
    console.log("user quit");
    break;
  }
  if (random == guess) {
    console.log("You guess rigth number ");
    break;
  } else if (random > guess) {
    guess = prompt("You guess was too small.please try again");
  } else {
    guess = prompt("you guess was too large. please try again");
  }
}
