let url = "http://universities.hipolabs.com";

async function name(params) {
  try {
    conawait axios.get(url);
  } catch (e) {
    console.log("Error - ", e);
  }
}
getFact;
