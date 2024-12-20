class Calculator {
    constructor() {
        this.result = 0;
    }

    add(num) {
        this.result += num;
    }

    subtract(num) {
        this.result -= num;
    }

    multiply(num) {
        this.result *= num;
    }

    divide(num) {
        if (num !== 0) {
            this.result /= num;
        } else {
            console.log("Cannot divide by zero!");
        }
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
        this.add(num1);
        this.multiply(num2);
        this.subtract(num3);
    }
}


class ArrayCalculator extends Calculator {
    constructor() {
        super();
    }

    calculateFromArray(numbers) {
        for (const num of numbers) {
            this.add(num);
        }
    }
}


console.log("\n------------------------------------------------------------\n");
const basicCalc = new Calculator();
basicCalc.add(5);
basicCalc.subtract(2);
console.log("Basic Calculator Result:", basicCalc.getResult()); 
basicCalc.clearResult();
console.log("Cleared Basic Calculator Result:", basicCalc.getResult()); 
console.log("\n------------------------------------------------------------\n");


console.log("\n------------------------------------------------------------\n");
const threeNumCalc = new ThreeNumCalculator();
threeNumCalc.calculate(10, 5, 2);
console.log("Three Number Calculator Result:", threeNumCalc.getResult());
console.log("\n------------------------------------------------------------\n");

console.log("\n------------------------------------------------------------\n");
const arrayCalc = new ArrayCalculator();
arrayCalc.calculateFromArray([10, 5, 2]);
console.log("Array Calculator Result:", arrayCalc.getResult());
console.log("\n------------------------------------------------------------\n");
