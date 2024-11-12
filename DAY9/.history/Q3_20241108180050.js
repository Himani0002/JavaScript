// Import axios
let btn = document.querySelector("buttton");

btn.addEventListener("click", function () {
  let fact=getfact();
});

const axios = require("axios");

let url = "http://universities.hipolabs.com";

async function getFacts() {
  try {
    // Get data from API and log only the data part
    const response = await axios.get(url);
    return response.data.fact;
  } catch (e) {
    console.log("Error -", e.message);
  }
}

getFacts();
