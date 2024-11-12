let url = "https://catfact.ninja/fact";
async function getfact() {
  let res = await axios.get(url);
}
