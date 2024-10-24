// Function to convert a word to lowercase using built-in toLowerCase method
function wordToLowerCase(word) {
    return word.toLowerCase();
}

// Function to convert an array of strings to an array of lowercase strings
function arrayToLowerCase(array) {
    let lowercaseArray = [];
    for (let i = 0; i < array.length; i++) {
        lowercaseArray.push(wordToLowerCase(array[i]));
    }
    return lowercaseArray;
}

// Sample Input
var array = ["RED", "AND", "WHITE"];

// Convert array of strings to an array of lowercase strings
var lowercaseArray = arrayToLowerCase(array);

// Output
console.log(lowercaseArray.join("\n"));
