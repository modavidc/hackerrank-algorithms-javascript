// Problem: https://www.hackerrank.com/challenges/arrays-ds/problem

function reverseArray(a) {
    return a.reverse();
}

function reverseArray2(a) {
    let reversedArray = [];

    for (let i = a.length - 1; i >= 0; i--) {
        reversedArray.push(a[i]);
    }
    
    return reversedArray;
}

console.log(reverseArray2([1, 4, 3, 2]));
