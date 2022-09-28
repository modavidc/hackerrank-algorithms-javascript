// Problem: https://www.hackerrank.com/challenges/arrays-ds/problem

/**
 * Reverse an array of integers.
 *
 * @param {array} numbersArray an array of integers.
 *
 * @notes The reverse() function of the Javascript API is used.
 */
function reverseArray(numbersArray) {
  return numbersArray.reverse();
}

/**
 * Reverse an array of integers.
 *
 * @param {array} numbersArray an array of integers.
 *
 * @notes The for loop is used.
 */
function reverseArrayAlternative(numbersArray) {
  let reversedArray = [];

  for (let i = numbersArray.length - 1; i >= 0; i--) {
    reversedArray.push(numbersArray[i]);
  }

  return reversedArray;
}

console.log(reverseArray([1, 4, 3, 2]));
console.log(reverseArrayAlternative([1, 4, 3, 2]));
