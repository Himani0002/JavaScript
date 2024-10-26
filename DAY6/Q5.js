mergeObject = (obj1, obj2) => ({ ...obj1, ...obj2 });

console.log(mergeObject({ a: 1, b: 2, c: 4 }, { a: 2, b: 4, c: 5 }));
