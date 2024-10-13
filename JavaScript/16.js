let arr = [7, 9, 0, -2];
n = 3;

let ans1 = arr.slice(0, n);
console.log(ans1);

let ans2 = arr.shift();

console.log(arr);

let ans3 = arr.slice(arr.length - n);

console.log(ans3);

let item = 7;

//1
if (arr === item) {
  console.log(` array is exists ${item}`);
} else {
  console.log(`array is not exits ${item}`);
}

//2
if (arr.indexOf(item) != -1) {
  console.log(` array is exists ${item}`);
} else {
  console.log(`array is not exits ${item}`);
}
