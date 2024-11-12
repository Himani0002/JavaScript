// let url = "https://dog.ceo/api/breeds/image/random";

let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
  let like = await getImage();
  console.log(link);
  let img=document.querySelector("#result");
  img.setAttribute("")
});
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
