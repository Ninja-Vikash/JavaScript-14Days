/**
 *  IMPLICIT NATURE OF JAVASCRIPT
 */
// let username = "vikash kumar"
// let age = 30

/**
 *  We don't need to deploy variable type explicitly because JavaScript variable has implicit nature for identifying type of variable
 */

/**
 *  STRING
 */
// let str = "This is a string"
// let myName = "Vikash"
// let Age = "20"

// console.log("Data Type of "+ Age +" is " + typeof(Age))
/**
 *  What ever written inside Quotes is a string
 *  String can be written between single or double quotes in JavaScript
 */

/**
 *  CONCATENATION
 */
// let FName = "Vikash"
// let LName = "Kumar"
// let Add = "I live in JSR"
// let country = "INDIA"
// let FullName = FName + LName
// console.log(FullName)
// FullName = FName + " " + LName
// console.log(FullName)

// let FullName = FName.concat(" ", LName, " ", Add, " ", country )
// console.log(FullName)

/**
 *  TEMPLATE LITERALS
 */
// let FName = "Vikash"
// let LName = "Kumar"
// let FullName = `My name is ${FName} ${LName}`
// console.log(FullName)

/**
 *  CODE FOR WELCOME
 */
let FName = prompt("Enter your first name")
let LName = prompt("Enter your last name")

let WelcomeNote = `Hello, ${FName} ${LName}. You are on the path of learning JavaScript`
console.log(WelcomeNote)
alert(WelcomeNote)

/**
 *  ESCAPE SEQUENCE
 */
console.log("Hello I am \"Vikash\"")
console.log("Hello,\nMy name is vikash kumar.\nI am based in India.\nI am a Web Developer.")

/**
 *  STRING METHODS
 */
let myName = "Vikash Kumar"
let fName = "Vikash"
let lName = " Kumar"

// console.log(myName.length)
// console.log(myName.charAt(4))
// console.log(myName.indexOf("a"))
// console.log(myName.lastIndexOf("a"))
// console.log(myName.toUpperCase())
// console.log(myName.toLowerCase())
// console.log(myName.slice(0, 6))
// console.log(fName.concat(lName))
// console.log(myName.split(" "))
// console.log(myName.replace("Vikash Kumar", "Ninja-Vikash"))

/**
 *  CONDITIONALS 
 */

/**
 *  if-else statement
 */

// Single if statement
// let Age = 18
// if (Age >= 18)
// console.log("You are eligible for voting")

// if-else statement
// let Age = 10
// let canVote = 18-Age
// if (Age >= 18){
//     console.log("You are eligible for voting")
// }
// else{
//     console.log("Sorry")
//     console.log(`You can vote after ${canVote} years`)
// }

/**
 *  Conditional Operator
 */
// let age = 20
// console.log((age>=18)?"You are eligible":"You are not eligible")

// if-else ladder
// let Age = 25

// if (Age < 18){
//     console.log("You can't join Indian Army")
// }
// else
// if(Age >= 18 && Age < 24){
//     console.log("You can join Indian Army")
// }
// else {
//     console.log("Your age is exceeded")
// }

/**
 *  Switch case statement
 */

// let dayName = "SUN"
    
// switch (dayName) {
//     case "SUN":
//         console.log("LEG WORKOUT DAY")
//         break;
//     case "MON":
//         console.log("LEG WORKOUT DAY")
//         break;
//     case "TUE":
//         console.log("REST")
//         break;
//     case "WED":
//         console.log("BICEP & BACK WORKOUT DAY")
//         break;
//     case "THU":
//         console.log("BICEP & BACK WORKOUT DAY")
//         break;
//     case "FRI":
//         console.log("CHEST WORKOUT DAY")
//         break;
//     case "SAT":
//         console.log("CHEST WORKOUT DAY")
//         break;
//     default:
//         console.log("PLEASE ENTER A VALID DAY.")
//         break;
// }

/**
 *  Functions
 */

// function addNumbers(a, b) {
//     let result = a + b;
//     return result;
//   }
  
// // Call the function
// let sum = addNumbers(3, 4);
// console.log(sum);

// function Welcome(user){
//     console.log(`Hello ${user}!`)
//     console.log("Now, You are a part of JavaScript 14Days Challenge!")
//     console.log("Keep Learning.")
// }

// Welcome("Vikash")

/**
 *  explicit return
 */

// function addNumbers(a, b) {
//     return a+b;
// }

// console.log(addNumbers(19, 21))

/**
 *  implicit return
 */
const addNumbers = (a, b)=> a+b

// console.log(addNumbers(19, 21))