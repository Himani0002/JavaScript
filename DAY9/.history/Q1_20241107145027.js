let url = "https://catfact.ninja/fact";
async function getfact() {
  try{

    let res = await axios.get(url);
  }
  catch({
    console.log("Error - ",e)
  }
}
