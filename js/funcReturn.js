"use strict";
console.log("funcReturn.js");

function getSum(n1, n2, n3 = 0) {
  let sum = n1 + n2 + n3;
  console.log("sum ===", sum);
  return sum;
}
function showAvg(sum1, sum2, sum3) {
  return getSum(sum1, sum2, sum3) / 3;
}

function init() {
  let num1 = getSum(10, 20);
  let num2 = getSum(20, 30);
  let num3 = getSum(30, 40);
  console.log("Avg === ", showAvg(num1, num2, num3));
}

//init();
//console.log("init ===", init);

function getMulti(n1, n2) {
  let multi = n1 * n2;
  return multi;
}

let multi = getMulti(2, 6);
console.log("multi ===", multi);

function getDivide(n1, n2) {
  let divide = n1 / n2;
  return divide;
}

let divide = getDivide(2, 6);
console.log("divide ===", divide);

function getAvg(n1, n2) {
  let avg = (n1 + n2) / 2;
  return avg;
}

let avg = getAvg(2, 6);
console.log("avg ===", avg);

function getFlow(n1, n2, n3) {
  let flow = n1 + n2 + n3;
  return flow;
}

let flow = getFlow(multi, divide, avg);
let flowFixed = +flow.toFixed(2);
console.log("flowFixed ===", flowFixed);

function checkAge(age) {
  //   if (age > 18) {
  //     return true;
  //   } else {
  //     return confirm("Did parents allow?");
  //   }

  return age > 18 ? true : confirm("Did parents allow?");
}
//checkAge(19);

function min(a, b) {
  return a < b ? a : b;
}

//console.log(min(14, 9));

function calculate(num1, num2, action) {
  let sign = "";
  let rez = 0;
  if (action === "composition") {
    sign = "+";
    rez = num1 + num2;
  } else if (action === "subtraction") {
    sign = "-";
    rez = num1 - num2;
  } else if (action === "multiplication") {
    sign = "*";
    rez = num1 * num2;
  } else if (action === "division") {
    sign = "/";
    rez = num1 / num2;
  }
  return rez;
}

//console.log(calculate(100, 20, `division`));

function getFirstLetter(string) {
  let stringUpperCase = string.toUpperCase();
  let firstLetter = stringUpperCase.charAt(0);
  console.log("firstLetter ===", firstLetter);
}
getFirstLetter(`fjhsdf fkdsjfh`);

function formText(text, num) {
  //console.log(num);
  let sliced = text.slice(0, -num);
  return sliced;
}
console.log(formText(`Laba diena, nutrinti paskutines raides`, 3));

const getData = () => console.log("lalala");

console.log(getData);

let sayHi = (word) => console.log(word);

sayHi(`zodis`);

function sayHi1() {
  return console.log("Hi!");
}
sayHi1();

let sum = (n1, n2) => n1 + n2;

sum(4, 5);
console.log("sum ===", sum(4, 5));

function getAmountOfNumbers(num) {
  let string = num.toString();
  let count = string.length;
  console.log(count);
}
getAmountOfNumbers(8883);

function getGeneration(number, gender) {
  let answer = "";
  switch (number) {
    case -3:
      answer = gender === "male" ? "great grandfather" : "great grandmother";
      break;
    case -2:
      answer = gender === "male" ? "grandfather" : "grandmother";
      break;
    case -1:
      answer = gender === "male" ? "father" : "mother";
      break;
    case 0:
      answer = gender === "male" ? "brother" : "sister";
      break;
    case 1:
      answer = gender === "male" ? "son" : "daughter";
      break;
    case 2:
      answer = gender === "male" ? "grandson" : "granddaughter";
      break;
    case 3:
      answer = gender === "male" ? "great grandson" : "great granddaughter";
      break;
  }
  return answer;
}

console.log(getGeneration(2, `male`));
