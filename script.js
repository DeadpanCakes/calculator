/*
functions for add, subtract, multiply, and divide
function for operate, to consolidate operators
function to store numbers in a variable
funciton to concatenate stored number with subsequent input numbers
function to break string of numbers when operator is input
function to display strings of numbers and operators
function that resolves operation when second operator is input or when equal sign is input
function to clear display and reinitialize variables when C is pressed
function to slice last num when backspace is pressed
*/
function add (x,y) {
    return x + y;
}

function subtract (x,y) {
    return x - y;
}

function multiply (x,y) {
    return x * y;
}

function divide (x,y) {
    return x / y;
}

function operate (operator, x, y) {
    if (operator == "add") {
        return add(x,y);
    } else if (operator == "subtract") {
        return subtract(x,y);
    } else if (operator == "multiply") {
        return multiply(x,y);
    } else if (operator == "divide") {
        return divide(x,y);
    }
}

let totalNumber = ""


function applyEvent() {
    let numbers = document.getElementsByClassName("numbers")
    for (i=0;i<numbers.length;i++) {
        let text = numbers[i].textContent;
        numbers[i].addEventListener("click", () => storeNumber(text))
    }
}

applyEvent();

function storeNumber(number) {
    totalNumber += number;
    pushToDisplay(totalNumber);
    return totalNumber;
}

function countPlaces(totalNumber) {
    let numberLength = totalNumber.length;
    return numberLength;
}

function whiteSpace(totalNumber) {
    let space = ""
    let numberLength = countPlaces(totalNumber)
    for (i=0;i<(10 - numberLength);i++){
        space += "0"
    }
    return space
}

function pushToDisplay(totalNumber) {
    let display = document.getElementById("display");
    display.textContent = whiteSpace(totalNumber) + totalNumber;
}