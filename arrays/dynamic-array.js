// Problem: https://www.hackerrank.com/challenges/dynamic-array/problem

function dynamicArray(n, queries) {
    // Declare a 2-dimensional array, *arr*, of *n* empty arrays. All arrays are zero indexed.
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push([]);
    }
    // Declare an integer, lastAnswer, and initialize it to 0.
    let lastAnswer = 0;
    // Declare an array for store the new values of lastAnswer
    let lastAnswers = [];

    for(let j=0; j<queries.length; j++) {
        let queryType = queries[j][0];
        let x = queries[j][1];
        let y = queries[j][2];
        
        let idx = ((x ^ lastAnswer) % n);
        
        // Query: 1 x y
        if( queryType == '1') {
            arr[idx].push(y);
        } 
        // Query: 2 x y
        else {
            lastAnswer = arr[idx][ y % arr[idx].length];
            lastAnswers.push(lastAnswer);
        }
    }

    return lastAnswers;
}

// test 1
let t1Size = 2;
let t1Array = new Array(new Array(1, 0, 5), new Array(1, 1, 7), new Array(1, 0, 3), new Array(2, 1, 0 ), new Array(2, 1, 1 ));

let t1Result = dynamicArray(t1Size, t1Array);
console.log(t1Result);
