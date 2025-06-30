"use strict"; // treat the all js code as newer version

//alert is a function that shows an alert box with a message and this used in browser
//  but we are working using nodejs so we will not use alert.
// we will make sure code is readable and understandable and we will use proper spacing.
// console.log("Hello World!") console.log(3+3) // this is a comment and it will not be executed and this is not good way
let name = "Umais";
let rollNo = 2088;
let isLogedIn = false;
let temp = null;
let Class;

console.log([
  typeof name,        // "string"
  typeof rollNo,      // "number"
  typeof isLogedIn,   // "boolean"
  typeof temp,        // "object" (known JS quirk: typeof null is "object")
  typeof Class        // "undefined"
]);