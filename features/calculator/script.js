const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;


function sendNumberValue(number) {
    if(awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue= false;
    } else {
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}

//calculate first and second values
const calculate = {
    '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
    '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
    '=': (firstNumber, secondNumber) => secondNumber,
}

function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    //prevent multiple operators
    if(operatorValue && awaitingNextValue) {
        operatorValue = operator;
        return;
    }

    if(!firstValue) {
        firstValue = currentValue;
    } else {

        console.log(firstValue, operatorValue, currentValue);
        const calculation = calculate[operatorValue](firstValue, currentValue);
        calculatorDisplay.textContent=calculation;
        firstValue = calculation;
    }

    awaitingNextValue = true;
    operatorValue = operator;
    // console.log('firstValue', firstValue);
    // console.log('operator', operatorValue);
}

function addDecimal() {
    //if operator pressed, don't add decimal
    if (awaitingNextValue) return;
    //if no decimal, add one
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

// event listeners for numbers, operator, and decimal buttons 
inputBtns.forEach((inputBtn) => {
    if(inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if(inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    } else if(inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
    }
});

function resetAll() {
    firstValue= 0;
    operatorValue = '';
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
}

// event listeners
clearBtn.addEventListener('click', resetAll);