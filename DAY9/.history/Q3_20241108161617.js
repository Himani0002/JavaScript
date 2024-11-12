// Import axios
let btn=document.querySelector("buttton");

btn.addEventListener("click",)
const axios = require("axios");

let url = "http://universities.hipolabs.com";

async function getFacts() {
  try {
    // Get data from API and log only the data part
    const response = await axios.get(url);
    console.log(response.data.fact);
  } catch (e) {
    console.log("Error -", e.message);
  }
}

getFacts();
