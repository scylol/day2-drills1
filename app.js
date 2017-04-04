// Min Max Functions

// function max(numbers) {
//  // your code here
//   let currentMax = numbers[0];
//   let i = 0; 
//   while (i <= numbers.length) {
//     if (numbers[i] > currentMax) {
//       currentMax = numbers[i];
//     }
//     i++;
//   }
//   return currentMax;
// }


// function min(numbers) {
//  // your code here
//   let currentMin = numbers[0];
//   let i = 0;
//   while (i <= numbers.length) {
//     if (numbers[i] < currentMin) {
//       currentMin = numbers[i];
//     }
//     i++;
//   }
//   return currentMin;
// }

//-----------------------------------------------

// Average Numbers

// function average(numbers) {
  
//   var total = numbers.reduce(function(sum, n){
//     return sum + n
//   },0);
  
//  console.log(total);
// }

//----------------------------------------------

//Fizz Buzz

// function fizzBuzz(countTo) {
  
//   var result = [];
//   for (var i=1; i <= countTo; i++) {
//       switch(true) {
//         case i % 15 === 0:
//           result.push("fizzbuzz");
//           break;
          
//         case i % 3 === 0:
//           result.push("fizz");
//           break;
          
//         case i % 5 === 0:
//           result.push("buzz");
//           break;
        
//         default:
//           result.push(i);
//      }
    
//   }
//   return result;
// }

//------------------------------------------------------