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
    pushToDisplay(outcome);
    x = outcome;
}

function backspace () {
    currentArr.pop()
    currentNumber = arrToNumber(currentArr)
    pushToDisplay(currentNumber)
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

function storeNumber(character) {
    if (pendingOperator == "=") {
        let retainedNumber = currentNumber
        initialize();
        outcome = ""
        currentNumber = retainedNumber;
        console.log("tests")
    }
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
    let displayText = whiteSpace(currentNumber) + currentNumber;
    if (displayText.length > 10) {
        display.textContent = displayText.slice(0,10);
    } else {
        display.textContent = displayText
    }
}

function operatorPressed(character){
    if (character === "=") {
        if (pendingOperator === "") {
            let retainedNumber = currentNumber;
            initialize();
            currentNumber = retainedNumber
            pushToDisplay(currentNumber)
        } else if (pendingOperator !== "" && pendingOperator !== "=") {
            operate(pendingOperator,x,y)
        }
    } else if (currentNumber === "") {
        pendingOperator = character;
    } 
    if ((x !== "") && (currentNumber === "")) {
        pendingOperator = character;
    } else if (pendingOperator !== "") {
        y = currentNumber;
        operate(pendingOperator,x,y);
        emptyArr(currentArr);
        x = outcome;
    } else if (pendingOperator === "" && character === "="){
        return "";
    }
    pendingOperator = character    
    if (x === "") {
        x = currentNumber;
        emptyArr(currentArr);
        currentNumber = ""
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

function applyKeyEvent() {
    window.addEventListener("keyup", logKey)
}

function logKey (e) {
    let code = e.keyCode
    let str
    if ((Number(code) < 57) && (Number(code) > 48)) {
        str = String.fromCharCode(Number(code))
    } else if ((Number(code) > 95) && (Number(code) < 107)){
        code = Number(code) - 48
        str = String.fromCharCode(Number(code))
    } else {
        return ""
    }
    storeNumber(str)
}

applyKeyEvent()
applyNumberEvent();
applyOperatorEvent();
applyClearEvent();
applyBackEvent();