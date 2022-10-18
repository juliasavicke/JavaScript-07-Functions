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
  console.log("positives ===", positives);
}
