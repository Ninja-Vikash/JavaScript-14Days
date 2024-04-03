/**
 *  Async JS
 */

// Most common example for understanding Asynchronous nature

// var info = setTimeout(() => {
//     console.log("Hello, This is Async JS")
// }, 2000);

// clearTimeout(info)

// console.log("I am 2nd")
// console.log("I am 3rd")
// console.log("I am 4th")

// function greet(){
//     console.log("Hello I am Vikash")
// }

// setTimeout(greet, 1000)

// var Welcome = setInterval(() => {
//     console.log("Hello World!")
// }, 1000);

// clearInterval(Welcome)

/**
 *  PROJECT
 */

// setTimeout(()=> {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   function Table(n) {
//     let table = arr.map((e) => e * n);
//     console.log(`Table of ${n}`);

//     table.forEach((element) => {
//       console.log(element);
//     });
//   }

//   // Pass value for getting the table
//   Table(2);
// }, 1000);

// setTimeout(()=> {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   function Table(n) {
//     let table = arr.map((e) => e * n);
//     console.log(`Table of ${n}`);

//     table.forEach((element) => {
//       console.log(element);
//     });
//   }

//   // Pass value for getting the table
//   Table(7);
// }, 1000);

/**
 *  Callback Fn()
 */
// // Function with a callback parameter
// function fetchData(callback) {
//   // Simulating asynchronous operation
//   setTimeout(function() {
//     const data = 'Some data retrieved from server';
//     callback(data); // Calling the callback function with the retrieved data
//   }, 2000); // Simulating a 2-second delay
// }

// // Callback function
// function processData(data) {
//   console.log('Data received:', data);
// }

// // Calling the function with the callback
// fetchData(processData);

function readName (username){
  setTimeout(() => {
    const myName = "Vikash Kumar";
    username(myName)
  }, 1000);
}

function getName(username){
  console.log("Your name is:", username)
}

readName(getName)

/**
 *  PROJECT
 */

// function getValue(val, number) {
//   setTimeout(() => {
//     let n = val;
//     number(n);
//   },[]);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function Table(n) {
//   let table = arr.map((e) => e * n);
//   console.log(`Table of ${n}`);

//   table.forEach((element) => {
//     console.log(element);
//   });
// }

// function Square(n){
//   console.log(`Square of ${n} is ${n**2}`)
// }

// getValue(11,Square);
// getValue(11,Table);

// /**
//  *  IMPORTANT : Pass number as first argument and operation as second argument
//  */
