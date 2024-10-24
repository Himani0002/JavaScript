function minnum(nums) {
  let minnum = nums.reduce((min, el) => {
    if (el < min) {
      return el;
    } else {
      return min;
    }
  });

  return minnum;
}

let a = [1, 2, 3, 2, 2, 2, 1, 0, -1];
console.log(minnum(a)); // Output: -1
