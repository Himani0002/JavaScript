let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breed/hound/images";


btn.addEventListener("click", async () => {
  let fact = await getFacts();
  // console.log(fact);
  
  // let p = document.querySelector("#result");
  // p.innerHTML = fact;


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
