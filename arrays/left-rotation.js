// Problem: https://www.hackerrank.com/challenges/array-left-rotation/problem

function leftArray(d, arr) {
  let newArray = [];
  let tempArray = [];

  if (d === arr.length) {
    return arr;
  }

  for (var i = 0; i < arr.length; i++) {
    if (i + 1 <= d) {
      tempArray.push(arr[i]);
    } else {
      newArray.push(arr[i]);
    }
  }

  return newArray.concat(tempArray);
}

function leftArraySimple(d, arr) {
  if (d === arr.length) {
    return arr;
  }

  const temp = arr.splice(0, d);

  return [...arr, ...temp];
}

// test 1
let t1InputRotations = 2;
let t1InputArray = [1, 2, 3, 4, 5];

let t1Result = leftArray(t1InputRotations, t1InputArray);
console.log(t1Result);

// test 2
let t2InputRotations = 2;
let t2InputArray = [1, 2, 3, 4, 5];

let t2Result = leftArraySimple(t2InputRotations, t2InputArray);
console.log(t2Result);
