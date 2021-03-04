const numButtons = document.querySelectorAll(".button__number--js");
const operators = document.querySelectorAll(".button__operator--js");
const display = document.getElementById("display");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");
const backspaceBtn = document.getElementById("backspace");

let firstNum = 0;
let operationSign = '';
let result = 0;
let isClearNeeded = true;

numButtons.forEach((numButton) => {
    numButton.addEventListener('click', (e) => {
        if(isClearNeeded) clearDisplay()
        printToDisplay(e.target.textContent);
        isClearNeeded = false;
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        setFirstNum(display.textContent);
        setSign(e.target.textContent);
        isClearNeeded = true;
    })
})

equalBtn.addEventListener('click', () => {
    result = getResult();
    clearDisplay();
    printToDisplay(result);
    isClearNeeded = true;
})

clearBtn.addEventListener('click', () => {
    resetAll();
})

backspaceBtn.addEventListener('click', () => {
    //check if something is to delete
    //if there is something then delete else dont
})

function resetAll() {
    clearDisplay();
    
    firstNum = 0;
    operationSign = '';
    result = 0;
    display.textContent = "0";
    isClearNeeded = true;
}

function getResult() {
    return operate(operationSign, firstNum, Number(display.textContent));
}

function setFirstNum(value) {
    firstNum = Number(value);
}

function setSign(sign) {
    operationSign = sign;
}

function printToDisplay(value) {
    display.textContent += value;
}

function clearDisplay() {
    display.textContent = "";
}

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

function operate(operator, firstNum, secondNum) {
    
    switch (operator) {
        case '+':
        return add(firstNum, secondNum);
        break;
        
        case '-':
        return subtract(firstNum, secondNum);
        break;
        
        case '*':
        return multiply(firstNum, secondNum);
        break;
        
        case '/':
        if(secondNum == 0) return null;
        
        return divide(firstNum, secondNum);
        break;
        
        default:
        return null;
        break;
    }
}