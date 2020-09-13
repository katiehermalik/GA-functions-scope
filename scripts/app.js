// -------------- 1. Verbal Questions ---------------

// 1. A parameter is a placehoder for what is going to be fed into a function once it's invoked (stated when the function is declared or expressed). An argument is the information that is fed into the function (replacing the parameters) when a function is called (or invoked).

// 2. Both return and console.log are an action for returning a value. Console.log is only used when testing code so that we (the programmers) can see the return values. 'Return' holds the same value in the computer's memory, but we are unable to see the immediate results.

// 3. Functions keep code organized and are useful in creating a return value that can be used elsewhere in a more compact form than the code block that runs inside the function. They are reusable, as are their return values. They can create multiple return values, depending on the arguments that are passed into them.

// ----------- Palindrome again -------------------

function checkPalindrome(str) {
  const upper = str.toUpperCase()
  const bkwrds = str.split("").reverse().join("");
  const bUpper = bkwrds.toUpperCase();
  if (upper === bUpper) {
    console.log(true);
  } else {
    console.log(false);
  }
} 
console.log(checkPalindrome('RaCeCar')); 


