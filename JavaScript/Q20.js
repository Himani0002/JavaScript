const favMovie = "avatar";

let guess = prompt("guess my favorite movie :- ");

while (guess != favMovie && guess != "quit") {
  guess = prompt("Wrong gress .please try again");
}

if (guess == favMovie) {
  console.log("Congrats!!");
} else {
  console.log("You quit");
}
