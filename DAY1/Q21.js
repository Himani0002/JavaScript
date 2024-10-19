let todo = [];

let req = prompt("please enter your request :- ");

while (true) {
  if (req == "quit") {
    console.log("Quitting app");
    break;
  }
  if (req == "list") {
    console.log("-----------------------------");

    for (let i = 0; i < todo.lengthl; i++) {
      {
        console.log(i, todo[i]);
      }
    }
    console.log("-----------------------------");
  } else if (req == "add") {
    let task = prompt("please enter the task you want to add :- ");
    todo.push(task);
    console.log("tack added");
  } else if (req == "delete") {
    let idx = prompt("please Enter the task index :- ");
    todo.slice(idx, 1);
    console.log("task deleted");
  }
}
