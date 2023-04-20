// All necessary elements
const numbers = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equal');

// operator functions
const add = function (x, y, operator) {
    operator = x + y;
    return operator;
};

const subtract = function (x, y, operator) {
    operator =  x - y;
    return operator;
};

const multiply = function (x, y, operator) {
    operator = x * y;
    return operator;
};

const divide = function (x, y, operator) {
    operator = x / y;
    return operator;
};

// function to choose which operator to use
const operate = function (x, operator, y) {
    operator = prompt('Add, subtract, multiply, or divide');
    x = parseInt(prompt('Enter 1st number: '));
    y = parseInt(prompt('Ener 2nd number: '));

    if (operator === 'add') {
         console.log(add(x,y));
    } else if (operator === 'subtact') {
        console.log(subtract(x,y));
    } else if(operator === 'multiply') {
        console.log(multiply(x,y));
    } else if(operator === 'divide') {
        console.log(divide(x,y));
    } else {
        console.log('Incorrect input');
    }equalBtn
}

// storing numbers when clicked
let num = 0;
const storeNumber = function (number) {
    num = parseInt(number.target.id);
    console.log(num);
}

// storing operator when clicked
let ope = '';
const storeOperator = function (operator) {
    ope = operator.target.id;
    console.log(ope);
}

// operates when equal button clicked
equalBtn.addEventListener('click', function () {
    operate(num, ope, num);
});

// operate();

// calling function when buttons are clicked
numbers.forEach(num => num.addEventListener('click', storeNumber));
operators.forEach(ope => ope.addEventListener('click', storeOperator));