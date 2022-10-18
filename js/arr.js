"use strict";
console.log("arr.js");

let nums = [5, -4, 3, 10, -7, 14];

function getPositivesArr(nums) {
  const positives = [];
  for (let num of nums) {
    if (num > 0) {
      positives.push(num);
    }
  }
  //console.log("positives ===", positives);
  return positives;
}

let teigiami = getPositivesArr(nums);
console.log("teigiami ===", teigiami);

let skaicius = 3;
function checkType(skaicius) {
  if (typeof skaicius === "string") {
    return `Ne skaicius`;
  }
  if (typeof skaicius === "number") {
    return Number(skaicius).toFixed(2);
  }
  return "klaida";
}
console.log(checkType(skaicius));

function getPlotas(r) {
  return Math.PI * r * r;
}
console.log(getPlotas(12));

let numbers = [5, -4, 3, 10, -7, 14];
// function includes(array, searchElement) {
//   let ret = false;
//   for (let element of array) {
//     console.log("element ===", element);
//     console.log("searchElement ===", searchElement);
//     if (element === searchElement) {
//       ret = true;
//     }
//   }
//   return ret;
// }
// console.log(includes(numbers, 31));

function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element)) output.push(element);
  return output;
}
console.log(except(numbers, [1, 10]));

let votes = { upvotes: 30, downvotes: 15 };
function getVotes(votes) {
  return -votes.downvotes + votes.upvotes;
}

console.log(getVotes(votes));

function reverseArr(numbers) {
  let reversed = [];
  for (let num of numbers) {
    reversed.unshift(num);
  }
  return reversed;
}
console.log(reverseArr(nums));
