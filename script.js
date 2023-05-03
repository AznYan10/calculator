// All necessary elements
const buttons = document.querySelectorAll('.button');

// calculator object
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: false,
 };

 function inputDigit (digit) {
    const {displayValue} = calculator;
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
 }

function updateDisplay () {
    const display = document.querySelector('#number');
    // update the value of the diplay 
    display.value = calculator.displayValue;
}

updateDisplay();

// functions for operators 
// function add (x, y, operator) {
//     operator = x + y;
//     return operator;
// }

// function subtract (x, y, operator) {
//     operator = x - y;
//     return operator;
// }

// function multiply (x, y, operator) {
//     operator = x * y;
//     return operator;
// }

// function divide (x, y, operator) {
//     operator = x / y;
//     return operator;
// }

const keys = document.querySelector('.keys');
keys.addEventListener('click', (event) => {
    // access clicked element 
    const {target} = event;

    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        console.log('operator', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        console.log('decimal', target.value);
        return;
    }

    if (target.classList.contains('clear')) {
        console.log('clear', target.value);
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});