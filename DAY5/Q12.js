let a = [22, 3, 3, 2, 1, 2, 3];

tendev = a.every((ei) => {
  ei % 10 == 0;
});

console.log(tendev);
