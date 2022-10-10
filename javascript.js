let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = 0;

const clear = document.querySelector('.clear');
const negate = document.querySelector('.negate');
const percent = document.querySelector('.percent');

const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const point = document.querySelector('.point');
const equal = document.querySelector('.equal');

const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

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