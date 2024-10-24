country = ["India", "Germany", "United states of Ameriaca"];

function longestName() {
  let ansIdx = 0;

  for (let i = 0; i < country.length; i++) {
    
    let ansLen = country[ansIdx].length;
    console.log("ansLen :- " + ansLen);

    let currLen = country[i].length;
    console.log("currlen :-" + currLen);

    if (currLen > ansLen) {
      ansIdx = i;
    }
  }
  return country[ansIdx];
}

console.log(longestName(country));
