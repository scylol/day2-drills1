function max(numbers) {
   let currentMax = numbers[0];
   let i = 0; 
   while (i <= numbers.length) {
     if (numbers[i] > currentMax) {
       currentMax = numbers[i];
     }
     i++;
   }
   return currentMax;
 }


function min(numbers) {
   let currentMin = numbers[0];
   let i = 0;
   while (i <= numbers.length) {
     if (numbers[i] < currentMin) {
       currentMin = numbers[i];
     }
     i++;
   }
   return currentMin;
 }

function average(numbers) {
  
   var total = numbers.reduce(function(sum, n){
     return sum + n
   },0);
  
  return total / numbers.length;
 }

function fizzBuzz(countTo) {
  
   var result = [];
   for (var i=1; i <= countTo; i++) {
   	let number = i % 15;
       switch(number) {
         case 3:
         case 6:
         case 9:
         case 12:
           result.push("fizz");
           break;
          
         case 5:
         case 10:
           result.push("buzz");
           break;
          
         case 0:
           result.push("fizzbuzz");
           break;
        
         default:
           result.push(i);
      } 
   }
  return result;
 }
