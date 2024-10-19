// print table
let n = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${i * n}`);
}

for (let i = n; i <= n * 10; i = i + n) {
  console.log(i);
}
