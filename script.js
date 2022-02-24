const display = document.querySelector(".display");
const currentOp = document.querySelector(".current-op");
const lastOp = document.querySelector(".last-op");
const del = document.querySelector("#del");
const clear = document.querySelector("#clear");
const numBtn = document.querySelectorAll("[data-number]");
const operationBtn = document.querySelectorAll("[data-operation]");
const equal = document.querySelector("[data-equals]");
const body = document.querySelector("body");
const multiplyy = document.querySelector("#multiply");
const divise = document.querySelector("#divis");

let operator;
let num1Arr = [];
let num2Arr = [];
let num1;
let num2;
let num1Split = [];
let answer;
let equation;

const add = function (num1 = 0, num2) {
  return num1 + num2;
};

const subtract = function (num1 = 0, num2) {
  return num1 - num2;
};

const multiply = function (num1 = 0, num2) {
  return num1 * num2;
};

const division = function (num1 = 0, num2) {
  if (num2 === 0) {
    return "Error: DivByZero";
  } else {
    return num1 / num2;
  }
};

const operate = function (operator, num1, num2) {
  if (operator === "+") {
    equation = `${num1} ${operator} ${num2} =`;
    return add(num1, num2);
  } else if (operator === "-") {
    equation = `${num1} ${operator} ${num2} =`;
    return subtract(num1, num2);
  } else if (operator === "x") {
    equation = `${num1} ${operator} ${num2} =`;
    return multiply(num1, num2);
  } else if (operator === "÷") {
    equation = `${num1} ${operator} ${num2} =`;
    return division(num1, num2);
  }
};

// Keyboard support

body.addEventListener("keydown", (e) => {
  numBtn.forEach((btn) => {
    if (e.key === btn.textContent) btn.click();
  });

  if (e.key === "/") {
    divise.click();
  } else if (e.key === "*") {
    multiplyy.click();
  } else if (e.key === "Enter" || e.key === "=") {
    equal.click();
  } else if (e.key === "Backspace") {
    del.click();
  } else if (e.key === "Escape") {
    clear.click();
  }

  operationBtn.forEach((btn) => {
    if (e.key === btn.textContent) btn.click();
  });
});

numBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.textContent === "." && currentOp.textContent.includes(".")) {
      return;
    } else if (
      currentOp.innerText === "0" ||
      lastOp.innerText.split("").pop() === "="
    ) {
      currentOp.textContent = "";
      lastOp.textContent = "";
      num1Arr = [];
      currentOp.append(btn.innerText);
      num1Arr.push(btn.innerText);
      num1 = Number(num1Arr.join(""));
      clear.classList.remove("now-clear");
    } else if (lastOp.innerText === "") {
      currentOp.append(btn.innerText);
      num1Arr.push(btn.innerText);
      num1 = Number(num1Arr.join(""));
    } else if (lastOp.innerText !== "") {
      num2Arr.push(btn.innerText);
      currentOp.append(btn.innerText);
      num2 = Number(num2Arr.join(""));
      num1Split = lastOp.textContent.split(" ");
      answer = operate(num1Split[1], num1, num2);
    }
  });
});

operationBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (lastOp.innerText === "" && currentOp.innerText === "0") {
      lastOp.textContent = `0 ${btn.textContent}`;
      currentOp.textContent = "";
      num1 = 0;
      clear.classList.remove("now-clear");
    } else if (
      lastOp.innerText === "" &&
      currentOp.innerText !== "" &&
      currentOp.innerText !== "0"
    ) {
      lastOp.textContent = `${num1} ${btn.textContent}`;
      currentOp.textContent = "";
      clear.classList.remove("now-clear");
    } else if (lastOp.innerText !== "" && currentOp.innerText === "") {
      lastOp.textContent = `${num1} ${btn.textContent}`;
      clear.classList.remove("now-clear");
    } else if (lastOp.innerText !== "") {
      num2Arr = [];
      lastOp.textContent = `${answer} ${btn.textContent}`;
      currentOp.textContent = "";
      num1Split = lastOp.textContent.split(" ");
      num1 = Number(num1Split[0]);
      clear.classList.remove("now-clear");
    }
  });
});

equal.addEventListener("click", function () {
  if (lastOp.textContent.includes("=") || num2 === 0) {
    return;
  } else {
    currentOp.textContent = operate(num1Split[1], num1, num2);
    lastOp.textContent = equation;
    num1 = answer;
    num2 = 0;
    num2Arr = [];
    clear.classList.add("now-clear");
  }
});

del.addEventListener("click", function () {
  if (currentOp.textContent !== "" && lastOp.textContent == "") {
    const currentOpArr = currentOp.innerText.split("");
    currentOpArr.pop();
    const currentOpJoin = currentOpArr.join("");
    currentOp.textContent = currentOpJoin;
    num1Arr.pop();
    num1 = Number(num1Arr.join(""));
  } else if (currentOp.textContent !== "" && lastOp.textContent !== "") {
    const currentOpArr = currentOp.innerText.split("");
    currentOpArr.pop();
    const currentOpJoin = currentOpArr.join("");
    currentOp.textContent = currentOpJoin;
    num2Arr.pop();
    num2 = Number(num2Arr.join(""));
  }
});

clear.addEventListener("click", function () {
  num1Arr = [];
  num2Arr = [];
  num1 = 0;
  num2 = 0;
  num1Split = [];
  answer = "";
  currentOp.textContent = num1;
  lastOp.textContent = "";
  clear.classList.remove("now-clear");
});
