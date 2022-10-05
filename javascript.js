let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = 0;

// console.log('test1');
// console.log(firstNumber);
// console.log(secondNumber);
// console.log(operator);
// console.log(result);

// firstNumber = 420;
// secondNumber = 69;
// operator = '-';

// console.log('test2');
// console.log(firstNumber);
// console.log(secondNumber);
// console.log(operator);
// console.log(result);

// operate(operator, firstNumber, secondNumber);
// console.log('test3');
// console.log(firstNumber);
// console.log(secondNumber);
// console.log(operator);
// console.log(result);

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber) {
    if ((firstNumber && secondNumber && operator) != null) {
        if (operator == '+') {
            result = add(firstNumber, secondNumber);
        }

        if (operator == '-') {
            result = subtract(firstNumber, secondNumber);
        }

        if (operator == '*') {
            result = multiply(firstNumber, secondNumber);
        }

        if (operator == '/') {
            result = divide(firstNumber, secondNumber);
        }
    }
}