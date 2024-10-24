// Q1 write a short note on array methods 

let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("\n ----------------------- 1 : push -----------------------\n")
fruits.push("Kiwi");

console.log(fruits);

console.log("\n ----------------------- 2 : pop -----------------------\n")
fruits.pop();

console.log(fruits);

console.log("\n ----------------------- 3 : length -----------------------\n")

console.log(fruits.length);

console.log("\n ----------------------- 4 : tostring -----------------------\n")

console.log(fruits.toString());

console.log("\n ----------------------- 5 : splice -----------------------\n")

console.log(fruits.splice(1));

console.log("\n ----------------------- 6 : slice -----------------------\n")

let citrus = fruits.slice(2);

console.log(citrus);

console.log("\n ----------------------- 7 : sort -----------------------\n")

let array = [1, 2, 2, 1, 2, 3];

console.log(array.sort());

console.log("\n ----------------------- 8 : shift -----------------------\n")

let shift = fruits.shift();
console.log(shift);

console.log("\n ----------------------- 9 : unshift -----------------------\n")

let unshift = fruits.unshift("Lemon");

console.log(unshift);

console.log("\n ----------------------- 10 : contact -----------------------\n")

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren);

console.log("\n ----------------------- 11 : reverse -----------------------\n")

let reverse = array.reverse();

console.log(reverse);

