let num = 121;
let copy = num;

let sum = 0;

while (copy > 0) {
  let digit = copy % 10;
  sum += digit;

  copy = Math.floor(copy / 10);
}

console.log(sum);
