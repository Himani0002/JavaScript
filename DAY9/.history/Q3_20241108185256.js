// Import axios (Not needed in browser environments, only for Node.js)
// const axios = require("axios");

let btn = document.querySelector("button");

btn.addEventListener("click", async function () {
  let fact = await getFacts();
  console.log(fact);
  let result = document.querySelector("#result");
  result.innerText = fact;
});

// Corrected URL for cat facts
let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    // Get data from API and log only the data part
    const response = await axios.get(url);
    return response.data.fact; // Access the 'fact' property directly
  } catch (e) {
    console.log("Error -", e.message);
    return "Data was not found";
  }
}

// Removed initial call to getFacts, as it should only be called on button click
