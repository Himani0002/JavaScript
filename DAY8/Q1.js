// let jsonres =
//   '{"fact": "A happy cat holds her tail high and steady.", "length": 43}';

// let validRes = JSON.parse(jsonres);

// console.log(validRes.fact);

// let student = {
//   name: "Himani",
//   marks: 90,
// };

// console.log(JSON.stringify(student));

// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async function getFacts() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res1 = await fetch(url);
//     let data2 = await res.json();
//     console.log(data2.fact);
//   } catch (e) {
//     console.log("Error - ", e);
//   }
// }

async function data() {
  let row = fetch("https://randomuser.me/api/");
  let ans = row.json();
  console.log(ans);
}
