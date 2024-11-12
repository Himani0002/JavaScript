let url = "http://universities.hipolabs.com";

async function getfacts(params) {
  try {
    console.log(axios.get(url));
  } catch (e) {
    console.log("Error - ", e);
  }
}

getfacts();
