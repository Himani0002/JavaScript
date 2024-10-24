//Q1. Calculator using Opps


class Calculator {
    constructor() {
        this.result = 0;
    }

    add(num1, num2) {
        this.result = num1 + num2;
    }

    subtract(num1, num2) {
        this.result = num1 - num2;
    }

    multiply(num1, num2) {
        this.result = num1 * num2;
    }

    divide(num1, num2) {
        this.result = num1 / num2;
    }

    getResult() {
        return this.result;
    }

    clearResult() {
        this.result = 0;
    }
}

class ThreeNumCalculator extends Calculator {
    constructor() {
        super();
    }

    calculate(num1, num2, num3) {
        this.add(num1, num2);
        this.subtract(num1, num3);
    }
}

class ArrayCalculator extends Calculator {
    constructor() {
        super();
    }

    calculateFromArray(numbers) {
        for (const num of numbers) {
            this.add(num, this.result);
        }
    }
}


// 1.

console.log("\n------------------------------------------------------------\n");
const basicCalc = new Calculator();

basicCalc.add(5, 3);
console.log("Basic Calculator Result:", basicCalc.getResult());

basicCalc.clearResult();
console.log("Cleared Basic Calculator Result:", basicCalc.getResult());
console.log("\n------------------------------------------------------------\n");

// 2.

console.log("\n------------------------------------------------------------\n");
const threeNumCalc = new ThreeNumCalculator();
threeNumCalc.calculate(10, 5, 2);
console.log("Three Number Calculator Result:", threeNumCalc.getResult());
console.log("\n------------------------------------------------------------\n");


// 3.

console.log("\n------------------------------------------------------------\n");
const arrayCalc = new ArrayCalculator();
arrayCalc.calculateFromArray([10, 5, 2]);
console.log("Array Calculator Result:", arrayCalc.getResult());
console.log("\n------------------------------------------------------------\n");
