let a = [22, 3, 3, 2, 1, 3, 4, 4, 2];

let max = a.reduce((max, el) => {
  if (max > a) {
    return el;
  } else {
    return max;
  }
});

console.log(max);
