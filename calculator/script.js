let currentNumber = "";

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

function operate(operate, a, b) {
    if (operate === "+") {
        return add(a, b);
    } 
    else if (operate === "-") {
        return subtract(a, b);
    }
    else if (operate === "*") {
        return divide(a, b);
    }
}

const display = document.querySelector("#display");
const numberButtons = document.querySelector(".number");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentNumber += button.textContent;
        display.textContent = currentNumber;
    });
});