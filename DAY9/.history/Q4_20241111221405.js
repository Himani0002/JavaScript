// let url = "https://dog.ceo/api/breeds/image/random";

let url = "https://dog.ceo/api/breeds/image/random";

btn.addE
async function getImage() {
  try {
    let res = await axios.get(url);
    return res;
  } catch (e) {
    console.log("Error -", e);
    return "/";
  }
}
getImage();