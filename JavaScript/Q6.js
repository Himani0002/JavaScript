// Q6. Maximum in array

var arr = [2, 3, 4, 5, 6, 9, 10, 3];

let mix = arr[0];

for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > mix) {
        mix = arr[i];
    }
}

console.log("\n---------------------------------------\n");
console.log(" Maximum :- " + mix);
console.log("\n---------------------------------------\n");