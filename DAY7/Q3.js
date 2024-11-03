let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let item = document.createElement("li");

  item.innerText = inp.value;

  let btndel = document.createElement("button");
  btndel.innerText = "delete";
  btndel.classList.add("delete");
  item.appendChild(btndel);
  ul.appendChild(item);

  inp.value = "";
});

// delBtns = document.querySelectorAll(".delete");

// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log.apply(par);
//     par.remove();
//   });
// }

ul.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    let listitme = event.target.parentElement;
    listitme.remove();
    console.log("delete");
  }
});
