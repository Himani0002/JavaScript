let btn = document.querySelector("button");

btn.addEventListener("click", a () => {
  let fact = getFacts();
  console.log(fact);
});

const axios = require("axios");

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    return "No fact found";
  }
}
