const display = document.querySelector(".display");
const currentOp = document.querySelector(".current-op");
const lastOp = document.querySelector(".last-op");
const del = document.querySelector("#del");
const clear = document.querySelector("#clear");
const one = document.querySelector("#1");
const two = document.querySelector("#2");
const three = document.querySelector("#3");
const four = document.querySelector("#4");
const five = document.querySelector("#5");
const six = document.querySelector("#6");
const seven = document.querySelector("#7");
const eight = document.querySelector("#8");
const nine = document.querySelector("#9");
const zero = document.querySelector("#0");
const decimal = document.querySelector("#decimal");
const equal = document.querySelector("#equal");
const plus = document.querySelector("#plus");
const subtr = document.querySelector("#subtr");
const times = document.querySelector("#multiply");
const divise = document.querySelector("#divise");

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
  let operator;
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return division(num1, num2);
  }
};
