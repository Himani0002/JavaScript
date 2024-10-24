// Q5. Minimum in array

var arr = [2, 3, 4, 5, 6, 9, 10, 3];

let min = arr[0];

for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < min) {
        min = a[i];
    }
}

console.log("\n---------------------------------------\n");
console.log("Minimum :- " + min);
console.log("\n---------------------------------------\n");