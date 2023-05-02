// All necessary elements
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equal');
const clrBtn = document.querySelector('.clear');
const delBtn = document.querySelector('.delete');
const plusMinusBtn = document.querySelector('plusminus');

// calculator object
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: false,
 };

// functions for operators 
function add (x, y, operator) {
    operator = x + y;
    return operator;
}

function subtract (x, y, operator) {
    operator = x - y;
    return operator;
}

function multiply (x, y, operator) {
    operator = x * y;
    return operator;
}

function divide (x, y, operator) {
    operator = x / y;
    return operator;
}

numbers.forEach(button => {
    button.addEventListener('click', () => {
    
    })
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {

    })
});

equalBtn.addEventListener('click', button => {

});

clrBtn.addEventListener('click', button => {

});

delBtn.addEventListener('click', button => {

});
