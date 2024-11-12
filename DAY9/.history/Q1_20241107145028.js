let url = "https://catfact.ninja/fact";
async function getfact() {
  try{

    let res = await axios.get(url);
  }
  catch(e{
    console.log("Error - ",e)
  }
}
