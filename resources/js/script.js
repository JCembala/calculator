const numButtons = document.querySelectorAll(".button__number--js");
const operators = document.querySelectorAll(".button__operator--js");
const display = document.getElementById("display");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");
const backspaceBtn = document.getElementById("backspace");
const dotBtn = document.getElementById("dot");

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
    if(firstNum) {
        result = getResult();
        clearDisplay();
        printToDisplay(result);
        isClearNeeded = true;
    }
})

clearBtn.addEventListener('click', () => {
    resetAll();
})

backspaceBtn.addEventListener('click', () => {
    if(display.textContent.length > 1) {
        tempString = display.textContent.slice(0, -1);
        clearDisplay();
        printToDisplay(tempString);
    } 
    else {
        resetAll();
    }
})

dotBtn.addEventListener('click', (e) => {
    if(display.textContent.indexOf(".") == -1) {
        printToDisplay(e.target.textContent);
    }
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
        if(secondNum == 0) {
            alert("You shouldn't divide by 0!")
            return 0;
        }
        return divide(firstNum, secondNum);
        break;
        
        default:
        return null;
        break;
    }
}