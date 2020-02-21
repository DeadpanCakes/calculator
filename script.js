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

let numbers = document.getElementsByClassName("numbers")
for (i=0;i<numbers.length;i++) {
    let text = numbers[i].textContent;
    numbers[i].addEventListener("click", () => console.log(storeNumber(text)))
}

function storeNumber(number) {
    totalNumber += number
    return totalNumber
}