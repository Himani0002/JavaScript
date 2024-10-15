let num = 1232;
let count = 0;

let copy = num;

while (copy > 0) {
  count++;
  copy = Math.floor(copy / 10);
  console.log(copy);
}

console.log(count);
