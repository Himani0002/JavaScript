let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let fact =getfact
});

const axios = require("axios");

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await axios.get(url);
    console.log(res.data.fact);
  } catch (e) {
    console.log("Error - ", e);
  }
}

getFacts();