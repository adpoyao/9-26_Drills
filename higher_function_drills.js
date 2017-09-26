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


// // Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function(name) {
//   // This is a "predicate function" - it's a function that only returns a boolean
//   return name[0] === 'R';
// });

// console.log(filteredNames); // => ['Rich', 'Ray']

// // TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
// function filter(arr, fn) {
//   let filteredArr = [];
//   for(let i=0; i<arr.length; i++) {
//     let nameR = arr[i];
//     if(fn(nameR)) {
//       filteredArr.push(nameR);
//     }
//   }
//   return filteredArr;	
// }

// console.log(filteredNames);
// //Ask about bonus

// function hazardWarningCreator(typeOfWarning) {
//   let warningCounter = 0;
//   let counter = '';
//   return function(location) {
//     warningCounter ++;
//     console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}!"`);
//     if(warningCounter === 1){
//       counter = 'time';
//     } else {
//       counter = 'times';
//     }
//     console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${counter} today!`);
//   };
// }

// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const sharksWarning = hazardWarningCreator('Shark Attack');
// const pigsWarning = hazardWarningCreator('Pig Stampede');

// rocksWarning('Main st and Pacific Ave');
// rocksWarning('Centinela Ave and Olympic Blvd');
// sharksWarning('Ponds of Big Bear');
// sharksWarning('Crescent bays of Channel Islands');
// pigsWarning('Ol\' McDonald\'s Farm');
// pigsWarning('my Sister\'s barn wedding');