let url = "https://catfact.ninja/fact";

async function getFacts()
{
  let res=await axios.get(url)
  console.log(res.data.fact)
}
