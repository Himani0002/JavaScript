let a = [2, 3, 4, 2, 4, 5, 6, 7, 8, 8, 50];
// let area,
//   sum = 0,
//   avg = 0;

// const square = () => {
//   for (let i = 0; i < a.length; i++) {
//     area = a[i] * a[i];
//     sum = sum + a[i];
//     avg = sum / a.length;
//   }
//   console.log(area);
//   console.log(sum);
//   console.log(avg);
// };

// square();

const square = a.map((a) => a * a);
console.log(square);
let sum = square.reduce((acc, cur) => acc + cur);
console.log(sum);
let avg = sum / a.length;
console.log(avg);
