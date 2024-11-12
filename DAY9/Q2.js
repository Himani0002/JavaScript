let url = "https://catfact.ninja/fact";

async function getCatFact() {
  try {
    let res = await axios.get(url);
    console.log(res.data.fact); // Adjusted to access the fact directly
  } catch (err) {
    console.error("Error fetching cat fact:", err); // Using console.error for errors
  }
}

getCatFact();
