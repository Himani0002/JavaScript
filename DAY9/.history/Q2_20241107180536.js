let url = "https://catfact.ninja/fact";

async function getJokes() {
  try {
    let res = await axios.get(url);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

get
