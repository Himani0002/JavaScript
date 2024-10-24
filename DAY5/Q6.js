let id = setInterval(() => {
  console.log("Hello world");
}, 2000);

setTimeout(() => {
  clearInterval(id);
  console.log("Clear Interval run ");
}, 10000);
