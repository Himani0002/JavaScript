let url = "https://catfact.ninja/fact";
async function getfact() {
  try {
    let res = await axios.get(url);
    console.log(res.data.fact);
  } catch (e) {
    console.log("Error - ", e);
  }
}
getfact();
