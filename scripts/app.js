// // // -------------- 1. Verbal Questions ---------------

// /* 1. A parameter is a placehoder for what is going to be fed into a function once it's invoked (stated when the function is declared or expressed). An argument is the information that is fed into the function (replacing the parameters) when a function is called (or invoked). */ 

// /* 2. Both return and console.log are an action for returning a value. Console.log is only used when testing code so that we (the programmers) can see the return values. 'Return' holds the same value in the computer's memory, but we are unable to see the immediate results. */

// /* 3. Functions keep code organized and are useful in creating a return value that can be used elsewhere in a more compact form than the code block that runs inside the function. They are reusable, as are their return values. They can create multiple return values, depending on the arguments that are passed into them. */

// // // ----------- Palindrome again -------------------

// function checkPalindrome(str) {
//   const upper = str.toUpperCase()
//   const bkwrds = str.split("").reverse().join("");
//   const bUpper = bkwrds.toUpperCase();
//   if (upper === bUpper) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// } 
// console.log(checkPalindrome('RaCeCar')); 

// // // ----------------- Digit Sum -------------------

// // write function -  accepts number
// function sumDigits(num) {
// // must split num into individuals digits, but first turn number into string in order to do so.
//   const str = ('' + num).split("");
// // I now have a new array with strings in each index. Must turn strings back to number in order to add. Iterate through array to do so.
//   for (i = 0; i < str.length; i++) {
//     str[i] = Number(str[i]);
//   }
// // I now have an array of numbers in each index. Now I have to add them together. I can use .reduce() which contains a function that iterates through the array adding the previous sum of two indexes to the next index.
//   console.log(str.reduce((a, b) => a + b));
//   };
// sumDigits(3674);

// // // ----------------- Pythagoras -------------------

// function calculateSide(sideA, sideB) {
//   console.log('sideC = ' + Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2)));
//  }
//  calculateSide(8, 6);


// // // ----------------- Sum Array -----------------------
 
// function sumArray(arr) {
//   let sum = 0;
//   for (i = 0; i < (arr.length); i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// }
// sumArray([1, 2, 3, 4, 5, 6]);



