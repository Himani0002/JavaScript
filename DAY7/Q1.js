let h3 = document.createElement("h3");
h3.innerText = "I am heading";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let button = document.createElement("button");
let input = document.createElement("input");

button.innerText = "Cilck Me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "user name");

let btn = document.querySelector("#btn");

btn.style.color = "white";
btn.style.backgroundColor = "blue";

let h1 = document.createElement("h1");
h1.innerHTML = "<u>Hello<u>";
document.querySelector("body").append(h1);

let p = document.createElement("p");
p.innerHTML = "<b>Hello Apan collage <b>";
document.querySelector("body").append(p);

box = document.querySelector("heading");
box.classList.add("red");
