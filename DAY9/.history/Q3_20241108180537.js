let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  getFacts().then(fact => {
    document.getElementById('result').innerText = fact; // Display fact
  });
});

let url = "https://catfact.ninja/fact"; // Changed to a valid API for cat facts

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
