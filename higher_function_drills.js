'use strict';

// function repeat (fn, n) {
//   for(let i=1; i<=n; i++) {
//     fn();}
//   return;
// }

// function hello () {
//   console.log('Hello world');
// }

// function goodbye () {
//   console.log('Goodbye world');
// }

// repeat(hello, 5);


// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
  // This is a "predicate function" - it's a function that only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']

// TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
  let filteredArr = [];
  for(let i=0; i<arr.length; i++) {
    let nameR = arr[i];
    if(fn(nameR)) {
      filteredArr.push(nameR);
    }
  }
  return filteredArr;	
}

console.log(filteredNames);
//Ask about bonus

