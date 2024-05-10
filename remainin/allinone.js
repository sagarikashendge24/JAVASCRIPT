// **************************************  WHAT IS JAVASCRIPT **********************************************************************
// JavaScript is a dynamic(a force that stimulates change ) programming language that's
// used for web development, in web applications, for game development,
// and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS


// ***************************************** Synchronous Transmission ***************************************************************
// 1.	In Synchronous transmission, Data is sent in form of blocks or frames.
// 2.	Synchronous transmission is fast.	
// 3.	Synchronous transmission is costly.	
// 4.	In Synchronous transmission, time interval of transmission is constant.	
// 5.	In Synchronous transmission, There is no gap present between data.	
// 6.	Efficient use of transmission line is done in synchronous transmission.
// 7.	Synchronous transmission needs precisely synchronized clocks for the information of new bytes.	


// ******************************************** Asynchronous Transmission  **********************************************************
// In asynchronous transmission, Data is sent in form of byte or character.
// Asynchronous transmission is slow.
// Asynchronous transmission is economical.
// In asynchronous transmission, time interval of transmission is not constant, it is random.
// In asynchronous transmission, There is present gap between data.
// While in asynchronous transmission, transmission line remains empty during gap in character transmission.
// Asynchronous transmission have no need of synchronized clocks as parity bit is used in this transmission for information of new bytes.



// *****************************************  Is js Synchronous or Asynchronous  ***************************************************
// JavaScript is always synchronous and single-threaded. If you're executing a JavaScript block of code on a page then no
// other JavaScript on that page will currently be executed. JavaScript is only asynchronous in the sense that it can make, 
// for example, Ajax calls

// *****************************************  How many types are ther in JS   ******************************************************
// In Javascript, there are five basic, or primitive, 
// types of data. The five most basic types of data are strings, numbers, booleans, undefined, and null.


// ***************************************** VAR ,LET ,CONST *************************************************************************
// *Scope*
// Variables declared with var are in the function scope.
// Variables declared as let are in the block scope.length.
// Variables declared as const are in the block scope.

//* Hoisting means that you can define a variable before its declaration.*
// var=Allowed
// let=Not allowed	
// const=Not allowed

// *Reassign the value*
// To reassign a value is to reassign the value of a variable.
// var=Allowed
// let=Allowed
// const=Not allowed

// *Redeclaration of the variable*
// The redeclaration of a variable means that you can declare the variable again.
// var=Allowed	
// let=Not allowed	
// const=Not allowed

// ******************************************  KEYWORDS  **************************************************************************
// Keywords are reserved words in JavaScript that you cannot use to indicate variable labels or function names. 
// There are a total of 63 keywords that JavaScript provides to programmers. All of them are shown in the below-mentioned table:


// ********************************************  OPERATORS  ************************************************************************
// arithematic
// assignment
// logical
// comparision
// string


// ******************************************  DIFFRENCE IN == AND ===  ***********************************************************
// = is used for assigning values to a variable in JavaScript.
// == is used for comparison between two variables irrespective of the datatype of variable.
// === is used for comparision between two variables but this will check strict type, 
// which means it will check datatype and compare two values.


// ****************************************  REST AND SPREAD OPERATOR ************************************************************
//**** Spread syntax (...) allows an iterable such as an array expression or string to be expanded 
// in places where zero or more arguments (for function calls) or elements (for array literals) are expected, 
// or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
// function sum(x, y, z,c) {
//     return x + y + z;
//     return c
//   } 
//   const numbers = [1, 2, 3];  
//   console.log(sum(...numbers),"string");
// ****Rest syntax looks exactly like spread syntax. In a way, rest syntax is the opposite of spread syntax. 
// Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them
// into a single element. See rest parameters.
// let dateFields = [1970, 0, 1];  // 1 Jan 1970
// let d = new Date(...dateFields);


// ***********************************************  ARRAY  *******************************************************************************
// An array is a special variable, which can hold more than one value at a time.
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

// ***********************************************  OBJECT  ************************************************************************
// In JavaScript, almost "everything" is an object.
// Booleans can be objects (if defined with the new keyword)
// Numbers can be objects (if defined with the new keyword)
// Strings can be objects (if defined with the new keyword)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects
// All JavaScript values, except primitives, are objects.

// *********************************************   DESTRUCTING ASSIGNMENT  *********************************************************
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables.

// ************************************************ MAP  *************************************************************************
// The map() method is used for creating a new array from an existing one, applying a function to 
// each one of the elements of the first array.
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(item => item * 2);
// console.log(doubled); // [2, 4, 6, 8]

// ********************************************  Filter  ***************************************************************************
// The filter() method takes each element in an array and it applies a conditional statement against it.
// If this conditional returns true, the element gets pushed to the output array. If the condition returns false, 
// the element does not get pushed to the output array.
// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(item => item % 2 === 0);
// console.log(evens); // [2, 4]

// **********************************************  REDUCE  *************************************************************************
// The reduce() method reduces an array of values down to just one value. To get the output value, 
// it runs a reducer function on each element of the array.
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce(function (result, item) {
//   return result + item;
// }, 0);
// console.log(sum); // 10


// **********************************************  CLASS   ***********************************************************************
// JavaScript Classes are templates for JavaScript Objects.
// JavaScript Class Syntax
// Use the keyword class to create a class.
// Always add a method named constructor()
// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//   }
// var s=new Car("sagarika","2018")  
// console.log(s)


// **********************************************  FUNCTION  *********************************************************************
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).


// ****************************************************   CALLBACK  ***************************************************************
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished
// function enroll(name,call){
//   console.log("Your name is",name)
//   call()
// }
// function  roll(){
//   setTimeout(function(){
//     console.log("welcome to navgurukul")
//   },3000)
// }
// enroll("sagarika",roll)


// *********************************************   CALLBACK HELL    ***********8***************************************************
// This is a big issue caused by coding with complex nested callbacks. 
// Here, each and every callback takes an argument that is a result of the previous callbacks. 
// In this manner, The code structure looks like a pyramid, making it difficult to read and maintain. 
// Also, if there is an error in one function, then all other functions get affected.



// ************************************************  PROMISES  *****************************************************************
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise in javascript is exactly like what it sounds like .you use it to make promise to do somthing usually asynchronously .
// let arrrr = new Promise(function (resolve, reject) {
//   let am = 2;
//   if (am == 52) {
//     // console.log("your promise has been resolved")
//     resolve()
//   }
//   else {
//     // console.log(" your promise has been rejected")
//     reject()
//   }
// }
// )
//   .then(() => {
//     console.log("thanks")
//   }

//   ).catch((err) => {
//     console.log(" try again")
//   });


// ***********************************************  ASYNC & AWAIT  ************************************************************
// async makes a function return a Promise
// async function myFunction() {
//     return "Hello";
//   }
// console.log(myFunction())  

// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//       resolve("I love You !!");
//     });
//     let result=await myPromise;
//     console.log(result)
//   }
  
//   myDisplay();
// await makes a function wait for a Promise


// **************************************  CALL    ********************************************************************************
// Call( ): The call() method invokes a function with a given 'this' value and arguments provided one by one. 
// This means that we can call any function, and explicitly specify what 'this' should reference within the calling function.
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//   }
  
// function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
//   }
  
// console.log(new Food('cheese', 5));////Food { name: 'cheese', price: 5, category: 'food' }

// *************************************  APPLY   ********************************************************************************
// Apply( ): Invokes the function and allows you to pass in arguments as an array.
// const numbers = [5, 6, 2, 3, 7];
// const max = Math.max.apply(null,numbers);
// console.log(max);
// // expected output: 7
// const min = Math.min.apply(null, numbers);
// console.log(min);


// ************************************  BIND   ***********************************************************************************
// Bind(): returns a new function, allowing you to pass in an array and any number of arguments.
// const modulee = {
//     x: 42,
//     getX: function() {
//       return this.x;
//     }
//   };
  
// const unboundGetX = modulee.getX;
// console.log(unboundGetX()); ////undefined
// const boundGetX = unboundGetX.bind(modulee); 
// console.log(boundGetX()); ////45


// ************************************  HIGHER ORDER FUNCTION *******************************************************************
// A higher order function is a function that takes a function as an argument, or returns a function
// .map(),.filter()

// *************************************  PURE FUNCTION    ************************************************************************
// Pure Function is a function (a block of code ) that always returns the same result if the same arguments are passed. 
// It does not depend on any state, or data change during a program's execution rather it only depends on its input arguments
// function calculateGST( productPrice ) {
//     return productPrice * 0.05;
// }


// ******************************************  HOISTING  *************************************************************************
// Hoisting is JavaScript's default behavior of moving declarations to the top.
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.

// *******************************************   SCOPE  *************************************************************************
// Scope determines the accessibility (visibility) of variables.
// JavaScript has 3 types of scope:
// Block scope -let ,const
// Function scope -var,let,const
// Global scope - var,let ,const

// *******************************************  Blocking and non-blocking   ************************************************************
// Blocking: It refers to the blocking of further operation until the current operation finishes. 
// Blocking methods are executed synchronously. Synchronously means that the program is executed line by line. 
// The program waits until the called function or the operation returns.

// Non-Blocking: It refers to the program that does not block the execution of further operations. 
// Non-Blocking methods are executed asynchronously. Asynchronously means that the program may not necessarily execute line by line. 
// The program calls the function and move to the next operation and does not wait for it to return.


// ********************************************  CLOSURE  *********************************************************************
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state 
// (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. 
// In JavaScript, closures are created every time a function is created, at function creation time.
// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       alert(name);
//     }
//     return displayName;
//   }
  
//   var myFunc = makeFunc();
//   myFunc();

// ***************************************************  TEMPLETE  *****************************************************************
// Template Literals
// Template Strings
// String Templates
// Back-Tics Syntax


// ***********************************   WHAT IS AXIOS?        **************************************************************
// Axios is a Promise-based HTTP client for JavaScript which can be used in your front-end application and in your Node. js backend.
// By using Axios it's  easy to send asynchronous HTTP request to REST endpoints and perform 
// CRUD operations. ... Make http requests from node.




// **********************************  WHAT IS REQUIRE     ***************************************************************
// In NodeJS, require() is a built-in function to include external modules that exist in separate files. 
// require() statement basically reads a JavaScript file, executes it, and then proceeds to return the export object. require() 
// statement not only allows to add built-in core NodeJS modules but also community-based and local modules.













// let a="sagarika"+5;
// console.log(a)


// closer 
// ternary operator


