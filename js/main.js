"use strict";
console.log("main.js");

function sayHi(username = "user") {
  console.log(`Hello ${username}`);
}

sayHi("Julia");

function getSum(num1, num2) {
  return num1 + num2;
}
console.log("Suma = ", getSum(12, 55));

function getSandauga(num1, num2) {
  return num1 * num2;
}

console.log("Sandauga = ", getSandauga(23, 2));

function getPow(num1, num2) {
  return Math.pow(num1, num2);
}
let num1 = 4;
let num2 = 2;
console.log(`${num1} powered by ${num2} === `, getPow(num1, num2));

function getDaugyba(num1 = 1, num2 = 1, num3 = 1) {
  let sandauga = num1 * num2 * num3;
  console.log(`${num1} * ${num2} * ${num3} = ${sandauga}`);
  return sandauga;
}
console.log("Daugyba === ", getDaugyba(2, 5));

//document.getElementById("cont").append(h2El);
//debugger;
function createHeadingElement(headingNum) {
  const hEl = document.createElement(headingNum);
  hEl.textContent = `Sveiki as esu naujas ${headingNum} elementas`;
  document.body.append(hEl);
}

function getAverage(num1, num2, num3) {
  let avg = (num1 + num2 + num3) / 3;
  let avgFixed = +avg.toFixed(2);
  let isklotine = `(${num1} + ${num2} + ${num3}) / 3 = ${avgFixed}`;
  console.log("Average === ", avgFixed);
  makeH2El(isklotine);
}
getAverage(1, 5, 9);

function makeH2El(content) {
  const h2El = document.createElement("h2");
  h2El.textContent = content;
  document.body.append(h2El);
}

console.log("type of function === ", typeof makeH2El);
