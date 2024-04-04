/**
 *  Higher Order function
 */

// With normal function

// function calculate(a, b, operation){
//     return operation(a,b)
// }

// function add(a, b){
//     console.log(a+b)
// }

// function sub(a, b){
//     console.log(a-b)
// }
// function product(a, b){
//     console.log(a*b)
// }
// function div(a, b){
//     console.log(a/b)
// }
// function mod(a, b){
//     console.log(a%b)
// }
// function exp(a, b){
//     console.log(a**b)
// }

// const calculate = (a,b,operation)=> operation(a,b)   // calculate function has parameters who accepts arguments

// const add = (a, b)=> console.log(a+b)
// const sub = (a, b)=> console.log(a-b)
// const product = (a, b)=> console.log(a*b)
// const div = (a, b)=> console.log(a/b)
// const mod = (a, b)=> console.log(a%b)
// const exp = (a, b)=> console.log(a**b)

// calculate(10 , 4, exp)     // when we evoke the function we pass some arguments for some operation. And when we pass a function as argument it becomes a higher order function 

// function ObjectViewer (data, received){
//     console.log(data)
//     let status = received
//     console.log(status)
// }

// const data = {
//     name : "Vikash",
//     role : "Developer",
//     age : 20,
//     city : "Jamshedpur"
// }

// ObjectViewer(data, true)

/**
 *  Array Destructuring
 */

let arr1 = [1, 2, 3, 4, 5, 6]
let arr2 = [7 , 8, 9]


// let arr = [...arr1, ...arr2]             // Using the spread opeartor we can merge two or more arrays

// console.log(arr)

// 1 let [a,b, ...rest] = arr                  // When we destructed an array we can target the elements of an array with the assigned variable of destructed variable

// console.log(a)
// console.log(a,b)
// console.log(...rest)
// console.log(a, b, ...rest)

// let [a, b, , ...rest] = arr1                 // We can skip values of an array by skipping value, I mean by a blank space and comma separation

/** 
 *  Object Destructuring
 */

let Obj = {
    candidateName : "Vikash",
    age: 20,
    role: "Developer"
}

let Info = {
    city: "Jamshedpur",
}

let candidateInfo = {...Obj, ...Info}                  // Merging with spread operator
console.log(candidateInfo)

// let {candidateName, age}=  Obj
console.log(candidateName)
console.log(age)

// let {...rest}=  Obj
console.log(rest)

let {candidateName, age, ...rest}=  Obj
console.log(rest)

/**
 *  Object prototype
 */

// function Person(name){
//     this.name = name;
// }

// Person.prototype.greet = function(){
//     return `Hello, my name is ${this.name}`
// }

// NOTE : return for prototype won't work in arrow functions

Person.prototype.job = "Web Developer"

var vikash = new Person("Vikash")

// console.log(vikash.greet())
// console.log(vikash.job)
