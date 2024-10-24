let sum = 0;
let avg;

const arrayAverage = (a) => {
  for (let i = 0; i <= a.length; i++) {
    sum = sum + i;
    avg = sum / a.length;
  }
  return avg;
};

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayAverage(a));
