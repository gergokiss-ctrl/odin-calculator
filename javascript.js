let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = 0;
let displayValue = '0';

const display = document.querySelector('.display');

const clear = document.querySelector('.clear');
const negation = document.querySelector('.negation');
const percent = document.querySelector('.percent');

const division = document.querySelector('.division');
const multiplication = document.querySelector('.multiplication');
const subtraction = document.querySelector('.subtraction');
const addition = document.querySelector('.addition');
const point = document.querySelector('.point');
const equation = document.querySelector('.equation');

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

display.textContent = displayValue;

zero.addEventListener('click', () => {
    if (display.textContent != '0') {
        displayValue = displayValue.concat('0');
        display.textContent = displayValue;
    }
})

one.addEventListener('click', () => {
    if (display.textContent == '0') {
        displayValue = '1';
    } else {
        displayValue = displayValue.concat('1');
    }
    display.textContent = displayValue;
})

two.addEventListener('click', () => {
    if (display.textContent == '0') {
        displayValue = '2';
    } else {
        displayValue = displayValue.concat('2');
    }
    display.textContent = displayValue;
})

three.addEventListener('click', () => {
    if (display.textContent == '0') {
        displayValue = '3';
    } else {
        displayValue = displayValue.concat('3');
    }
    display.textContent = displayValue;
})

four.addEventListener('click', () => {
    if (display.textContent == '0') {
        displayValue = '4';
    } else {
        displayValue = displayValue.concat('4');
    }
    display.textContent = displayValue;
})

five.addEventListener('click', () => {
    if (display.textContent == '0') {
        displayValue = '5';
    } else {
        displayValue = displayValue.concat('5');
    }
    display.textContent = displayValue;
})

six.addEventListener('click', () => {
    if (display.textContent == '0') {
        displayValue = '6';
    } else {
        displayValue = displayValue.concat('6');
    }
    display.textContent = displayValue;
})

seven.addEventListener('click', () => {
    if (display.textContent == '0') {
        displayValue = '7';
    } else {
        displayValue = displayValue.concat('7');
    }
    display.textContent = displayValue;
})

eight.addEventListener('click', () => {
    if (display.textContent == '0') {
        displayValue = '8';
    } else {
        displayValue = displayValue.concat('8');
    }
    display.textContent = displayValue;
})

nine.addEventListener('click', () => {
    if (display.textContent == '0') {
        displayValue = '9';
    } else {
        displayValue = displayValue.concat('9');
    }
    display.textContent = displayValue;
})

point.addEventListener('click', () => {
    if (displayValue.includes(".") == false) {
        displayValue = displayValue.concat('.');
        display.textContent = displayValue;
    }
})