//step1
function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    if(b === 0){
        throw new Error('Division by Zero!');
    }
    return a / b;
}

//step 2

function calculate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1,num2);
            case '-':
            return subtract(num1,num2);
            case '*':
            return multiply(num1,num2);
            case '/':
            return divide(num1,num2);
            default:
                throw new Error('Invalid operator');
    }
}

//step 3

try {
    console.log('Addition:', calculate('+',5,3));
    console.log('subtraction:', calculate('-',10,4));
    console.log('Multiplication:', calculate('*',7,2));
    console.log('Division:', calculate('/',12,3));
    console.log('Division by zero:', calculate('/',5,0));
} catch (error) {
    console.log('Error:', error.message);
}