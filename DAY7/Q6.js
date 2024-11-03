async function greet() {
  throw "weak connection";
  return "Hello";
}
greet()
  .then((result) => {
    console.log("proimse was resolved", result);
  })
  .catch((error) => {
    console.log("proimes was rejected", error);
  });
