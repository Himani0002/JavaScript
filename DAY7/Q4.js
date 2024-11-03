let gameseq = [];
let usreseq = [];
let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("game started");
    started = true;
    levelup();
  }
});

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 1000);
}

function levelup() {
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 4); // Fixed range to 4
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  console.log(randBtn);
  console.log(randColor);
  console.log(randIdx);

  btnflash(randBtn);
}
