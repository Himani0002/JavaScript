let a = [1, 2, 3, 4, 6, 5, 4, 3, 9];
let num = 5;

function maxnum() {
  for (let i = 0; i < a.length; i++) {
    if (a[i] < num) {
      console.log(a[i]);
    }
  }
}
