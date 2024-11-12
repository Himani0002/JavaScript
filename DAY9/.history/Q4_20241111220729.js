// let url = "https://dog.ceo/api/breeds/image/random";

let url = "https://dog.ceo/api/breeds/image/random";

async function getImage(params) {
  try {
    let res = awite axios.get("url");
    console.log(res);
  } catch(e){
    console.log("Erorr -", e);
  }
}
