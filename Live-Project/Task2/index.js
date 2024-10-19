//  Create a business name generator by combining list of adjectives and shop name and another word

rand = Math.random();

let first, second, third;


if (rand < 0.33) {
    first = "crazy";
}
else if (rand < 0.66 && rand >= 0.33) {
    first = "Amazing";
}
else {
    first = "Fire";
}

rand = Math.random();

if (rand < 0.33) {
    second = "Engine";
}
else if (rand < 0.66 && rand >= 0.33) {
    second = "Foods";
}
else {
    second = "Engine";
}

rand = Math.random();

if (rand < 0.33) {
    second = "Engine";
}
else if (rand < 0.66 && rand >= 0.33) {
    second = "Foods";
}
else {
    second = "Engine";
}

rand = Math.random();

if (rand < 0.33) {
    third = "Hub";
}
else if (rand < 0.66 && rand >= 0.33) {
    third = "Limited";
}
else {
    third = "Bros";
}
console.log(`${first} ${second} ${third}`);




