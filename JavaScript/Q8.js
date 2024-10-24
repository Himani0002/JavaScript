// Taking input values num and K
let num = 10; // example value
let K = 2; // example value

// Iterating through the range [1, num]
for (let i = 1; i <= num; i++) {
    // Checking if I % K == 0
    if (i % K === 0) {
        console.log(i); // Printing the number if the condition is met
    }
}
