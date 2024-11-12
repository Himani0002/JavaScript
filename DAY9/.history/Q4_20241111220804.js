// let url = "https://dog.ceo/api/breeds/image/random";

let url = "https://dog.ceo/api/breeds/image/random";

async function getImage(params) {
  try {
    let res = await axios.get("url");
    console.log(res.data.ma);
  } catch (e) {
    console.log("Erorr -", e);
  }
}
