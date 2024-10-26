let arr = [1, 2, 3];

const doublearg = (arr, ...arg) => [...arr, ...arg.map((v) => v * 2)];

console.log(doublearg(arr, 4, 4));
