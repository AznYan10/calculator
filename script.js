// All necessary elements
const buttons = document.querySelectorAll('.button');

// calculator object
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
 };

 function inputDigit (digit) {
    const { displayValue, waitingForSecondOperand, } = calculator;
    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }

    console.log(calculator);
 }

 function inputDecimal (dot) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = '0';
        calculator.waitingForSecondOperand = false;
        return;
    }

    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
 }

 function handleOperator (nextOperator) {
    // destruct calculator object 
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }

    if (firstOperand == null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);

        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
 }

 function calculate (firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    }

    return secondOperand;
 }

function deleteNumber (number) {
    number = calculator.displayValue.slice(0 ,-1);
    calculator.firstOperand = parseInt(number);
    calculator.displayValue = number;
    console.log(calculator);
}

function resetCalculator () {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
 }

function updateDisplay () {
    const display = document.querySelector('#number');
    // update the value of the diplay 
    display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.keys');
keys.addEventListener('click', (event) => {
    const {target} = event;
    const { value } = target;

    if (!target.matches('button')) {
        return;
    }

    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
            handleOperator(value);
            break;
        case '.':
            inputDecimal(value);
            break;
        case 'clear':
            resetCalculator();
            break;
        case 'delete':
            deleteNumber();
        default:
            // check if key is an integer
            if (Number.isInteger(parseFloat(value))) {
                inputDigit(value);
            }
    }

    updateDisplay();
});