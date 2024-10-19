let sum = 0;

function add(n) {
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log("Sum = " + add(10));
