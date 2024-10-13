let str = " himani ";

if (str === " ") {
  console.log("String in empty");
} else {
  console.log("String is not empty");
}

if (str.toLowerCase() === str) {
  console.log("String is lowercase");
} else {
  console.log("String is uppercase");
}

let str1 = "  Himani  ";

console.log(`original String = ${str}`);
console.log(`String without spaces=${str.trim()}`);
