const display = document.querySelector('.display');

const clear = document.querySelector('.clear');
const negation = document.querySelector('.negation');
const percent = document.querySelector('.percent');

const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
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
const point = document.querySelector('.point');

display.textContent = 0;

let firstNum = null;
let secondNum = null;
let operator = null;
let clearContent = 0;

function add(n1, n2) {
    return n1 + n2;
}

function sub(n1, n2) {
    return n1 - n2;
}

function mul(n1, n2) {
    return n1 * n2;
}

function div(n1, n2) {
    return n1 / n2;
}

function operate() {
    if ((firstNum && secondNum && operator) != null) {
        if (operator === '+') {
            display.textContent = add(firstNum, secondNum);
        }

        if (operator === '-') {
            display.textContent = sub(firstNum, secondNum);
        }

        if (operator === '*') {
            display.textContent = mul(firstNum, secondNum);
        }

        if (operator === '/') {
            display.textContent = div(firstNum, secondNum);
        }
    }
}

addition.addEventListener('click', () => {
    if (firstNum != null && secondNum === null) {
        secondNum = Number(display.textContent);
    }

    if (firstNum === null) {
        firstNum = Number(display.textContent);
    }

    operate();
    operator = '+';
    firstNum = Number(display.textContent);
    secondNum = null;
    clearContent = 1;
})

subtraction.addEventListener('click', () => {
    if (firstNum != null && secondNum === null) {
        secondNum = Number(display.textContent);
    }

    if (firstNum === null) {
        firstNum = Number(display.textContent);
    }

    operate();
    operator = '-';
    firstNum = Number(display.textContent);
    secondNum = null;
    clearContent = 1;
})

multiplication.addEventListener('click', () => {
    if (firstNum != null && secondNum === null) {
        secondNum = Number(display.textContent);
    }

    if (firstNum === null) {
        firstNum = Number(display.textContent);
    }

    operate();
    operator = '*';
    firstNum = Number(display.textContent);
    secondNum = null;
    clearContent = 1;
})

division.addEventListener('click', () => {
    if (firstNum != null && secondNum === null) {
        secondNum = Number(display.textContent);
    }

    if (firstNum === null) {
        firstNum = Number(display.textContent);
    }

    operate();
    operator = '/';
    firstNum = Number(display.textContent);
    secondNum = null;
    clearContent = 1;
})

equation.addEventListener('click', () => {
    secondNum = Number(display.textContent);
    operate();
    firstNum = null;
    secondNum = null;
    operator = null;
})

negation.addEventListener('click', () => {
    display.textContent = Number(display.textContent) * -1;
})

zero.addEventListener('click', () => {
    if (clearContent === 1) {
        display.textContent = "0";
        clearContent = 0;
    }

    if (display.textContent != "0") {
        display.textContent = display.textContent.concat(0);
    }
})

one.addEventListener('click', () => {
    if (display.textContent === "0" || clearContent === 1) {
        display.textContent = 1;
        clearContent = 0;
    } else {
        display.textContent = display.textContent.concat(1);
    }
})

two.addEventListener('click', () => {
    if (display.textContent === "0" || clearContent === 1) {
        display.textContent = 2;
        clearContent = 0;
    } else {
        display.textContent = display.textContent.concat(2);
    }
})

three.addEventListener('click', () => {
    if (display.textContent === "0" || clearContent === 1) {
        display.textContent = 3;
        clearContent = 0;
    } else {
        display.textContent = display.textContent.concat(3);
    }
})

four.addEventListener('click', () => {
    if (display.textContent === "0" || clearContent === 1) {
        display.textContent = 4;
        clearContent = 0;
    } else {
        display.textContent = display.textContent.concat(4);
    }
})

five.addEventListener('click', () => {
    if (display.textContent === "0" || clearContent === 1) {
        display.textContent = 5;
        clearContent = 0;
    } else {
        display.textContent = display.textContent.concat(5);
    }
})

six.addEventListener('click', () => {
    if (display.textContent === "0" || clearContent === 1) {
        display.textContent = 6;
        clearContent = 0;
    } else {
        display.textContent = display.textContent.concat(6);
    }
})

seven.addEventListener('click', () => {
    if (display.textContent === "0" || clearContent === 1) {
        display.textContent = 7;
        clearContent = 0;
    } else {
        display.textContent = display.textContent.concat(7);
    }
})

eight.addEventListener('click', () => {
    if (display.textContent === "0" || clearContent === 1) {
        display.textContent = 8;
        clearContent = 0;
    } else {
        display.textContent = display.textContent.concat(8);
    }
})

nine.addEventListener('click', () => {
    if (display.textContent === "0" || clearContent === 1) {
        display.textContent = 9;
        clearContent = 0;
    } else {
        display.textContent = display.textContent.concat(9);
    }
})

point.addEventListener('click', () => {
    if (clearContent === 1) {
        display.textContent = "0.";
        clearContent = 0;
    }

    if (display.textContent.includes(".") === false) {
        display.textContent = display.textContent.concat(".");
    }
})