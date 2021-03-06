'use strict';

// function max(numbers) {
//   //Return largest number in lising using while
//   //Run through array and compare current value to Largest var
//   //If empty, return null
//   if (numbers.length === 0) {
//     return null;
//   }
//   let largest = numbers[0];
//   let i = 0;
//   while (i < numbers.length) {
//     if (numbers[i] > largest) {
//       largest = numbers[i];
//     }
//     i++;
//   }
//   return largest;
// }


// function min(numbers) {
//   //Return smallest number in list, using while
//   //If empty, return null
//   if (numbers.length === 0) {
//     return null;
//   } 
//   let smallest = numbers[0];
//   let i = 0;
//   while (i < numbers.length) {
//     if (numbers[i] < smallest) {
//       smallest = numbers[i];
//     }
//     i++;
//   }
//   return smallest;
// }


// //Test//

// function testFunctionWorks(fn, input, expected) {
//   if (fn(input) === expected) {
//     console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
//     return true;
//   }
//   else {
//     console.log(
//       'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
//             ' but was ' + fn(input)
//     );
//     return false;
//   }
// }


// (function runTests() {
//   // we'll use the variables in our test cases
//   const numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
//   const realMin1 = numList1[3];
//   const realMax1 = numList1[6];
//   const numList2 = [0, 1, 2, 3, 4];
//   const realMin2 = numList2[0];
//   const realMax2 = numList2[4];

//   const testResults = [
//     testFunctionWorks(max, numList1, realMax1),
//     testFunctionWorks(max, numList2, realMax2),
//     testFunctionWorks(min, numList1, realMin1),
//     testFunctionWorks(min, numList2, realMin2),
//   ];

//   const numPassing = testResults.filter(function (result) { return result; }).length;
//   console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
// })();

// function average(numbers) {
//   // GOAL: Takes numbers (array) and return average - using WHILE
//   // Run through array > add each number to sum >> divide by length of array
//   // Try Array.forEach() method as BONUS
// //   let sum = 0, i =0;
// //   while(i < numbers.length) {
// //     sum += numbers[i];
// //     i++;
// //   }
// //   return sum/numbers.length;
//   let sum = 0;
//   numbers.forEach((a) =>
//     sum += a);
//   return sum/numbers.length;
// }
  
// /* From here down, you are not expected to 
//      understand.... for now :)  
     
     
//      Nothing to see here!
     
//   */
  
  
// // tests
  
// function testFunctionWorks(fn, input, expected) {
//   if (fn(input) === expected) {
//     console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
//     return true;
//   }
//   else {
//     console.log(
//       'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
//         ' but was ' + fn(input)
//     );
//     return false;
//   }
// }
  
// (function runTests() {
//   const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const correctAns1 = 5.5;
//   const numList2 = [0, -1, 1];
//   const correctAns2 = 0;
    
//   const testResults = [
//     testFunctionWorks(average, numList1, correctAns1),
//     testFunctionWorks(average, numList2, correctAns2)
//   ];
//   const numPassing = testResults.filter(function(result){ return result; }).length;
//   console.log(numPassing + ' out of ' + testResults.length + ' tests passing.')
// })();
  

function fizzBuzz(countTo) {
  //run through array
  //divisible by 3, 'fizz'
  //divisible by 5, 'buzz'
  //divisible by 15, 'fizzbuzz
  //console.log numbers
  //use SWITCH instead of if/else
  //switch on single result
  //something divisible by 5 & 3, what is lowest possible number
	let arr = [];
	let fizzStr = 'fizz';
  for(let i=1; i<=countTo; i++) {
		switch(true) {
    case (i % 15 === 0):
      arr.push('fizzbuzz');
      break;
    case (i % 5 === 0):
      arr.push('buzz');
      break;
    case (i % 3 === 0):
      arr.push(fizzStr);
      break;
    default:
      arr.push(i);
    }
	}
	return arr;
}

  
/* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
  
  
// tests
(function testFizzBuzz() {
  // we'll use the variables in our test cases
  const countTo = 16;
  const expected = [
    1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
    'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
  ];
  
  const actual = fizzBuzz(countTo) || [];
    
  if (
    expected.length === actual.length &&
      expected.every(function(item, index) {
        return actual[index] === item;}) ) {
      
    console.log('SUCCESS: fizzBuzz is working');
  }
  else {
    console.log('FAILURE: fizzBuzz is not working');
  }  
})();