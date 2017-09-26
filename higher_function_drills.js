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

// // const filteredNames = filter(myNames, function(name) {
// //   // This is a "predicate function" - it's a function that only returns a boolean
// //   return name[0] === 'R';
// // });

// const filteredNames = filter(myNames, (name) => {name[0] === 'R';});

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

/**
 *Turtle's Movement: [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]
 *.filter to remove negative (steps)
 *.map to create new array, adding total forward and left steps.
 *.forEach to log out how many steps took in each case
 */

let turtleMovement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let noNegativeSteps = turtleMovement.filter((move) => {
  let forwardPane = move[0];
  let sidePane = move[1];
  return forwardPane >= 0 && sidePane >= 0;
});
console.log(noNegativeSteps);

let totalSteps = turtleMovement.map(function(move){
  let forwardPane = move[0];
  let sidePane = move[1];
  return Math.abs(forwardPane) + Math.abs(sidePane);
});
console.log(totalSteps);

turtleMovement.forEach(function(move){
  let forwardPane = move[0];
  let sidePane = move[1];
  console.log(Math.abs(forwardPane) + Math.abs(sidePane), 'for each result');
});