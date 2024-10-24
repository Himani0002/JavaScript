const isEven = (n) => {
  for (let i = 0; i < n; i++) {
    if (n % 2 == 0) {
      return 0;
    } else {
      return 1;
    }
  }
};

Ans = isEven(2);

if (Ans == 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}
