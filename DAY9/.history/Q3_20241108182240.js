// const axios = require("axios");
// Import axios
let btn = document.querySelector("button");

btn.addEventListener("click", async function () {
  let fact = await getFacts();
  console.log(fact);
  let result=document.querySelector("#result")
  result.inn
});

let url = "http://universities.hipolabs.com";

async function getFacts() {
  try {
    // Get data from API and log only the data part
    const response = await axios.get(url);
    return response.data.fact;
  } catch (e) {
    console.log("Error -", e.message);
    return "Data was not found";
  }
}

getFacts();
