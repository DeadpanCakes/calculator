/*
    Xfunctions for add, subtract, multiply, and divide
    Xfunction for operate, to consolidate operators
    Xfunction to store numbers in a variable
    Xfunciton to concatenate stored number with subsequent input numbers
    Xfunction to break string of numbers when operator is input
function to display strings of numbers and operators
function that resolves operation when second operator is input or when equal sign is input
function to clear display and reinitialize variables when C is pressed
function to slice last num when backspace is pressed

YOU CANNOT EMPTY A GLOBAL VARIABLE FROM WITHIN A FUNCTION'S SCOPE. CHANGE YOUR CODE TO STOP RELYING ON GLOBAL VARIABLES,
AND INSTEAD CENTER THE FUNCTIONS BY USING ONLY LOCAL VARIABLES

function forfloat
Number(number).toFixed(10-whole numbers)

*/
let currentArr = []
let currentNumber = ""
let x = ""
let y = ""
let operator = ""
let outcome = ""
let pendingOperator = ""


function add (x,y) {
    return Number(x) + Number(y);
}

function subtract (x,y) {
    return Number(x) - Number(y);
}

function multiply (x,y) {
    return Number(x) * Number(y);
}

function divide (x,y) {
    if (y == 0) {
        return "Whaaaaaat?"
    } else {
    return Number(x) / Number(y);
    }
}

function operate (operator, x, y) {
    if (operator == "+") {
        outcome = add(x,y);
    } else if (operator == "-") {
        outcome = subtract(x,y);
    } else if (operator == "X") {
        outcome = multiply(x,y);
    } else if (operator == "/") {
        outcome = divide(x,y);
    }
    console.log(outcome)
    pushToDisplay(outcome);
    x = outcome;
}

function applyNumberEvent() {
    let numbers = document.getElementsByClassName("numbers")
    for (i=0;i<numbers.length;i++) {
        let character = numbers[i].textContent;
        numbers[i].addEventListener("click", () => storeNumber(character))
    }
}

function applyOperatorEvent() {
    let operators = document.getElementsByClassName("operator")
    for (i=0;i<operators.length;i++){
        let character = operators[i].textContent
        operators[i].addEventListener("click", () => operatorPressed(character))
    }
}

function applyClearEvent() {
    let clear = document.getElementById("clear")
    clear.addEventListener("click", () => initialize())
}

function applyBackEvent() {
    let back = document.getElementById("back")
    back.addEventListener("click", () => backspace())
}

function backspace () {
    currentArr.pop()
    currentNumber = arrToNumber(currentArr)
    pushToDisplay(currentNumber)
}

function storeNumber(character) {
    if (currentArr.length < 10) {
        currentArr.push(character)
    }
    currentNumber = arrToNumber(currentArr)
    pushToDisplay(currentNumber)
}

function arrToNumber(arr) {
    let convertedNumber = ""
    for(i=0;i<arr.length;i++) {
        convertedNumber += arr[i]
    }
    return convertedNumber;
}

function countWholeNumbers(currentNum) {
   let wholeNumber = Number(currentNum).toFixed()
   return wholeNumber.length
}

function emptyArr (arr) {
    let length = arr.length
    for (i=0;i<length;i++) {
        arr.pop();
    }
}

function countPlaces(currentNumber) {
    let numberLength = currentNumber.length;
    return numberLength;
}

function whiteSpace(currentNumber) {
    let space = ""
    let numberLength = countPlaces(currentNumber.toString())
    for (i=0;i<(10 - numberLength);i++){
        space += "0"
    }
    return space
}

function pushToDisplay(currentNumber) {
    let display = document.getElementById("display");
    // if ((currentNumber % 1) !== 0) {
    //     let wholeNumbers = countWholeNumbers(currentNumber)
    //     currentNumber = Number(currentNumber).toFixed(10 - wholeNumbers)
    //}
    display.textContent = whiteSpace(currentNumber) + currentNumber;
}

function operatorPressed(character){
    if (character === "=") {
        if (pendingOperator === "") {
            initialize();
        } else if (pendingOperator !== "" && pendingOperator !== "=") {
            operate(pendingOperator,x,y)
        }
    }
    if (pendingOperator !== "") {
        y = currentNumber
        operate(pendingOperator,x,y)
        emptyArr(currentArr)
        x = outcome
    } else if (pendingOperator = "" && character === "="){
        return ""
    }
    pendingOperator = character    
    if (x === "") {
        x = currentNumber
        emptyArr(currentArr)
    }
}

function checkDecimal (number) {
    let str = number.toString()
    let decimal = str.indexOf(".")
    let strOut = str.slice(decimal + 1)
    return strOut.length;
}

function ensureReadable (outcome) {
    if (((outcome % 1) > 0) && (checkDecimal(outcome)>5)) {
        return Number(Number(outcome).toFixed(5))
    }
}

function initialize() {
    emptyArr(currentArr)
    x = ""
    y = ""
    operator = ""
    pendingOperator = ""
    currentNumber = ""
    pushToDisplay(currentNumber)
}

applyNumberEvent();
applyOperatorEvent();
applyClearEvent();
applyBackEvent();