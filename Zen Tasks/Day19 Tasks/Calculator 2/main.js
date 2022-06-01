function createEle(type, attribute, value) {
  let ele = document.createElement(type);
  ele.setAttribute(attribute, value);
  return ele;
}

function creaetButton(type, attribute, value, content) {
  let ele = document.createElement(type);
  ele.setAttribute(attribute, value);
  ele.innerText = content;
  return ele;
}

let mainDiv = createEle("div", "class", "calculator-grid");
document.body.append(mainDiv);

let keyboardInput = createEle("input", "type", "text");
keyboardInput.style.height = "80px";
keyboardInput.setAttribute("class", "outputKey");
keyboardInput.setAttribute("id", "outputKey2");
keyboardInput.setAttribute("placeholder", "Enter Here");

let outputDiv = createEle("div", "class", "output");
let preDiv = createEle("div", "class", "previous-operand");
preDiv.setAttribute("data-previous-operand", "");
let curDiv = createEle("div", "class", "current-operand");
curDiv.setAttribute("data-current-operand", "");
outputDiv.append(preDiv, curDiv);

let button1 = creaetButton("button", "data-all-clear", "", "AC");
button1.setAttribute("class", "span-two");
let button2 = creaetButton("button", "data-delete", "", "DEL");
let button3 = creaetButton("button", "data-operation", "", "÷");
let button4 = creaetButton("button", "data-number", "", "1");
let button5 = creaetButton("button", "data-number", "", "2");
let button6 = creaetButton("button", "data-number", "", "3");
let button7 = creaetButton("button", "data-operation", "", "*");
let button8 = creaetButton("button", "data-number", "", "4");
let button9 = creaetButton("button", "data-number", "", "5");
let button10 = creaetButton("button", "data-number", "", "6");
let button11 = creaetButton("button", "data-operation", "", "+");
let button12 = creaetButton("button", "data-number", "", "7");
let button13 = creaetButton("button", "data-number", "", "8");
let button14 = creaetButton("button", "data-number", "", "9");
let button15 = creaetButton("button", "data-operation", "", "-");
let button16 = creaetButton("button", "data-number", "", ".");
let button17 = creaetButton("button", "data-number", "", "0");
let button18 = creaetButton("button", "data-equals", "", "=");
button18.setAttribute("class", "span-two");
let button19 = creaetButton("button", "data-number", "", "(");
let button20 = creaetButton("button", "data-number", "", ")");

mainDiv.append(
  keyboardInput,
  outputDiv,
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
  button10,
  button11,
  button12,
  button13,
  button14,
  button15,
  button16,
  button17,
  button18,
  button19,
  button20
);

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand + number;
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
    
  }


  computeInfix(){
    let computation;
    this.currentOperand.split("").map(Number).join("");
    computation = Math.abs(this.currentOperand);
    console.log(this.currentOperand);
    console.log(computation);
  }
  compute() {
    let computation;
    let prev = parseFloat(this.previousOperand);
    let current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  updataDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    this.previousOperandTextElement.innerText = this.previousOperand;
  }
}

let numberButtons = document.querySelectorAll("[data-number]");
let operationButtons = document.querySelectorAll("[data-operation]");
let equalsButton = document.querySelector("[data-equals]");
let deleteButton = document.querySelector("[data-delete]");
let allClearButton = document.querySelector("[data-all-clear]");
let previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
let currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

// let infixButton = document.querySelectorAll("[data-infix]");

let calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updataDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updataDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.computeInfix();
  calculator.updataDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updataDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updataDisplay();
});

// infixButton.forEach((button) => {
//   button.addEventListener("click",()=>{
//     calculator.appendNumber(button.innerText);
//     calculator.updataDisplay();
//   })
// })

let log = document.createElement("log");
log.addEventListener("keyup", (e) => {
  calculator.appendNumber(log);
});

let keyBoard = document.querySelector(".outputKey");

keyBoard.addEventListener("keyup", (e) => {
  if (e.keyCode == 8) {
    calculator.delete();
    calculator.updataDisplay();
  } else if (
    e.key == "1" ||
    e.key == "2" ||
    e.key == "3" ||
    e.key == "4" ||
    e.key == "5" ||
    e.key == "6" ||
    e.key == "7" ||
    e.key == "8" ||
    e.key == "9" ||
    e.key == "0"
  ) {
    calculator.appendNumber(e.key);
    calculator.updataDisplay();
  } else if (e.key === "*" || e.key === "+" || e.key === "-" || e.key === "/") {
    calculator.chooseOperation(e.key);
    calculator.updataDisplay();
  } else if (e.key == "Enter") {
    calculator.compute();
    calculator.updataDisplay();
  } else {
    window.alert("Only Numbers Are Allowed");
    console.log(e);
  }
});
