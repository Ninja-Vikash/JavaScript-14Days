/**
 *  Variables
 */
// var myName = "Vikash"
// let myAge = 20
// const gender = "male"

var username = prompt("Enter Your username")
var age = prompt("Enter your age")
confirm("Do you want to see details?")
alert("Your name is "+username+" and you are "+age+ " old.")
console.log("Your name is "+username+" and you are "+age+ " old.")

/**
 *  Rules for variable declaration
 */
// let myName = "Vikash"
// let myname = "ninja"
// let MyName = "ninja-vikash"
// // let 2ndCar = "BMW"
// let car2 = "BMW"
// // let @user = "vika"
// // let user& = "vikash"
// let user_name = "Vikash"
// let user_address = "JSR"
// let user_age = 20
// let _name = "vika"

/**
 *  var is old method of declaration
 *  let | const are the modern method of declaration
 */

/**
 *  Difference between var and let & const
 */
// variables declared using var can be accessible inside of a block as well as outside of a block
// var myName = "Vikash Kumar"
// console.log(myName)
// {
//     console.log(myName)
// }
// {
//     console.log(username)
//     {
//         var username = "akash"
//         console.log(myName)
//     }
// }
// console.log(username)
// variables declared using let can't be accessible inside of a block but can't accessible outside
// let username = "ninja-vikash"
// console.log(username)
// {
//     console.log(username)
// }
// {
//     let username = "vikash"
//     {
//         console.log(username)
//     }
//     console.log(username)
// }
// {
//     {
//         let age = 20
//         console.log(age)
//     }
//     console.log(age)
// }
// console.log(username)
// variables declared using const can be accessible inside of a block but can't accessible outside
// const password = 123
// console.log(password)
// {
//     console.log(password)
// }
// {
//     const password = 199
//     console.log(password)
// }
// console.log(password)

/**
 *  Hoisting
 */
// console.log(myName)
// var myName = "Vikash"

// console.log(myName)
// const myName = "ninja-vikash"

// var & let supports re-assigning but const doesn't
// var num = 12
// num = 5
// console.log(num)

// let n = 19
// n = 21
// console.log(n)

// const a = 2
// a = 23
// console.log(a)

/**
 *  DATA Types in Java Script
 */
// let myName = "Vikash"
// let age = 20
// let bool = true
// let car = {
//     wheel : 4,
//     color : "red"
// }
// let arr = ["1", {username : "vikash", password : 123}, 4]
// let nul = null
// let und = undefined

// console.log(typeof(und))

/**
 *  Operators in JavaScript
 */
// let a = 4
// let b = 5
// let c = a + b

// console.log(c)

/**
 *  Arithmetic Operator
 */
// let num1 = 4
// let num2 = 2

// console.log(num1 + num2)            // For addition
// console.log(num1 - num2)            // For subtraction
// console.log(num1 * num2)            // For multiplication
// console.log(num1 / num2)            // For division
// console.log(num1 ** num2)           // For exponential
// console.log(num1 % num2)            // For modulas

/**
 *  Comparision Operator
 */
// let num1 = 20
// let num2 = 20
// let num3 = 21
// let num4 = "21"

// console.log(num1 > num2)                // Greater than
// console.log(num1 < num3)                // Less than
// console.log(num1 >= num2)               // Greater than Equal to
// console.log(num2 <= num3)               // Less than Equal to
// console.log(num1 == num2)               // Equal to
// console.log(num1 != num2)               // Not Equal to
// console.log(num3 == num4)               // Equality check based on value 
// console.log(num3 === num4)              // Equality check based on type
// console.log(num3 !== num4)              // Not Equality check based on type

/**
 *  Assignment Operator
 */
// let val1 = 0
// val1 = 123
// console.log(val1)
// val1 += 12                                  // val1 = val1 + 12
// console.log(val1)
// val1 -= 100                                 // val1 = val1 - 100
// console.log(val1)
// val1 *= 2                                   // val1 = val1 * 2
// console.log(val1)
// val1 /= 5                                   // val1 = val1 / 5
// console.log(val1)
// val1 **= 2                                  // val1 = val1 ** 2
// console.log(val1)
// val1 %= 9                                   // val1 = val1 % 9
// console.log(val1)

/**
 *  Logical Operator
 */
// console.log(true && true)                   // When all the conditions are true then the output will true
// console.log(false || true)                  // When any one condition is true then the output will true
// console.log(!true)                          // Invert the condition
// console.log(true || true && !true)

/**
 *  Unary Operator
 */
// let number = 12
// number++
// console.log(number) 
// number++
// console.log(number)
// number--
// console.log(number)

/**
 *  Ternary Operator
 */
// let age = 19
// console.log(age>=18?"Eligible":"Not Eligible")