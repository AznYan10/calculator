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

const operate = function (x, y, operator) {
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
    }
}

operate();