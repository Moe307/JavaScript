let currentNumber = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } 
    else if (operator === "-") {
        return subtract(a, b);
    }
    else if (operator === "*") {
        return multiply(a, b);
    }
    else if (operator === "/") {
        return divide(a, b);
    }
}

const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentNumber += button.textContent;
        display.textContent = currentNumber;
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        firstNumber = currentNumber;
        operator = button.textContent;
        currentNumber = "";
    });
});    

equalsButton.addEventListener("click", () => {
    secondNumber = currentNumber;
    const result = operate(operator, Number(firstNumber),
        Number(secondNumber));
    display.textContent = result;

    currentNumber = result.toString();
});


clearButton.addEventListener("click", () => {
    currentNumber = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.textContent = "0";
});
