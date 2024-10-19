let a = 20;
let b = 30;
let c = 23;
let s = (a + b + c) / 2;

let temp = s * (s - a) * (s - b) * (s - c);
let Area = Math.sqrt(temp);
console.log(Area);
