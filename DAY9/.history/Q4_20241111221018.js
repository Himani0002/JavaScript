let url = "https://dog.ceo/api/breeds/image/random";

async function getImage() {
  try {
    let res = await axios.get(url);
    console.log(res.data.message);
  } catch (e) {
    console.log("Error -", e);
  }
}
getImage();
