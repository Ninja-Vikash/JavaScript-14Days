##### JavaScript-14Days Challenge🏋️‍♂️
# Getting Started🚀
## What's Inside🎁
- [What is variable?](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2002#what-is-variable)
- [Rules for nameing of a variable](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2002#rules-for-naming-of-a-variable)
- [Code for data viewer](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2002#01-project--details-viewer)
- [Difference between var and let & const](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2002#difference-between-var-and-let--const)
- [Data Types](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2002#data-types)
- [Operators](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2002#operator)
    - [Arithmetic](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2002#arithmetic-operator)
    - [Comparision](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2002#comparision-operator)
    - [Assignment](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2002#assignment-operator)
    - [Logical](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2002#logical-operator)
    - [Unary](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2002#unary-operator)
    - [Ternary](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2002#ternary-operator)

***
### What is variable?
Variables are like containers used to store some data.

There are 3 Major types of variable in JavaScript.
- var
- let
- const
> [!IMPORTANT]\
> `var` is old method of declaration. `let` & `const` are modern methods of declaration.
***
### Rules for naming of a variable
- You can use `uppercase`, `lowercase` letters for creating variable's name
    ```js
    var myName = "Vikash"       // CAMEL-CASE VARIABLE NAME
    let age = 20                
    const Gender = "M"          
    let MyExpertise = ["HTML", "CSS", "JAVASCRIPT"]         // PASCAL-CASE VARIABLE NAME
    ```
- Variable's name should not be a `reserved keyword` in JavaScript
    ```js
    let function = "Marriage"       // WRONG
    let for = 23                    // WRONG etc..
    ```
- Variable's name should not start with `number`
    ```js
    let 2ndCar = "BMW"              // WRONG
    let car2 = "BMW"                // RIGHT
    ```
- Variable's name should not contain a `special chracter` except `underscore`
    ```js
    let @user = "vika"              // WRONG
    let user& = "vikash"            // WRONG
    let user_age = 20               // RIGHT
    ```
***
#### **#01 Project** : Details Viewer🌱
```js
var username = prompt("Enter Your username")
var age = prompt("Enter your age")
confirm("Do you want to see details?")
alert("Your name is "+username+" and you are "+age+ " old.")
console.log("Your name is "+username+" and you are "+age+ " old.")
```

***
### Difference between var and let & const
- **var** supports `global level scoping` while **let** & **const** supports `block level scoping`
#### Declaration using var
```js
var myName = "Vikash Kumar"
console.log(myName)                 // Vikash Kumar
{
    console.log(myName)             // Vikash Kumar
}
{
    console.log(username)           // Undefined
    {
        var username = "akash"
        console.log(myName)         // Vikash Kumar
    }
}
console.log(username)               // akash
```
> [!NOTE]\
> Variables declared using `var` can be accessible inside or outside of a blocks
#### Declaration using let
```js
let username = "ninja-vikash"
console.log(username)               // ninja-vikash
{
    console.log(username)           // ninja-vikash
}
{
    let username = "vikash"
    {
        console.log(username)       // vikash
    }
    console.log(username)           // vikash
}
{
    {
        let age = 20
        console.log(age)            // age
    }
    console.log(age)                // age is not defined
}
console.log(username)               // ninja-vikash
```
> [!NOTE]\
> Variables declared using `let` can't be accessible inside of a block but can't accessible outside of a block\
> Also we can re-declare let variable inside a block
#### Declaration using const
```js
const password = 123
console.log(password)               // 123
{
    console.log(password)           // 123
}
{
    const password = 199
    console.log(password)           // 199
}
console.log(password)               // 123
```
> [!IMPORTANT]\
> Variables declared using `const` can be accessible inside of a block but can't accessible outside of a block\
> Also we can re-declare const variable inside a block

- **var** uses `hoisting` method for declaration variables while **let** & **const** don't.
```js
console.log(myName)
var myName = "Vikash"
```
> [!NOTE]\
> We can access variable before initializing by the sake of hoisting but the `console` will print undefined value
#### Hoisting
```js
// Hoisting does
var myName = "Vikash"
// To
var myName
myName = "Vikash"
```
> [!NOTE]\
> `var myName` automatically stick on the top of the js document
```js
console.log(myName)                 // Undefined
const myName = "ninja-vikash"
```
> [!WARNING]\
> We can't access const & let variables before declaration

- You can `re-assign` **var** & **let** after declaration but **const** can't.
```js
var num = 12
num = 5
console.log(num)         // 5

let n = 19
n = 21
console.log(n)           // 21

const a = 2
a = 23
console.log(a)           // Error
```
***
### Data Types
Data has two types `Primitive` and `Non-Primitive`
#### Primitive data types
- String
- Number
- Boolean
- Undefined
- Null
- Symbol
```js
let str = "I am string"
let num = 143
let bool = true // or false
let und = undefined
let nul = null
```
> [!NOTE]\
> To check data type of any variable just simply use the `typeof()` function
```js
let myName = "Vikash"
console.log(typeof(myName))
```
> [!IMPORTANT]\
> Data type of `Null` is `Object`.

#### Non-Primitive data types
- Object
- Array

Example of an object :
```js
let car = {
    wheel : 4,
    color : "red"
}
```
> [!NOTE]\
> Object has `key: value` pairs

Example of an Array :
```js
let arr = ["1", {username : "vikash", password : 123}, 4]
```
> [!NOTE]\
> In array we can store object as an element
***
### Operator
Operators are used to perform some logic in JavaScript
```js
let a = 4
let b = 5
let c = a + b           // 'a', 'b' are operands and '+' is an operator

console.log(c)
```

**Operators in JavaScript**
- Arithmetic Operator
- Comparison Operator
- Assignment Operator
- Logical Operator
- Unary Operator
- Ternary Operator
- Bitwise Operator

#### Arithmetic Operator
Arithmetic Operator used to get some return value after execution.
```js
let num1 = 4
let num2 = 2

console.log(num1 + num2)            // For addition
console.log(num1 - num2)            // For subtraction
console.log(num1 * num2)            // For multiplication
console.log(num1 / num2)            // For division
console.log(num1 ** num2)           // For exponential
console.log(num1 % num2)            // For modulas
```
> [!IMPORTANT]\
> There must be two operand in **Arithmetic Operation**

#### Comparision Operator
Comparision Operator used to compare two values
```js
let num1 = 20
let num2 = 20
let num3 = 21
let num4 = "21"

console.log(num1 > num2)                // Greater than
console.log(num1 < num3)                // Less than
console.log(num1 >= num2)               // Greater than Equal to
console.log(num2 <= num3)               // Less than Equal to
console.log(num1 == num2)               // Equal to
console.log(num1 != num2)               // Not Equal to
console.log(num3 == num4)               // Equality check based on value 
console.log(num3 === num4)              // Equality check based on type
console.log(num3 !== num4)              // Not Equality check based on type
```
> [!NOTE]\
> It will return always boolean value either `true` or `false`

#### Assignment Operator
Assignment Operator used to assign values in variables
```js
let val1 = 0
val1 = 123
console.log(val1)
val1 += 12                                  // val1 = val1 + 12
console.log(val1)
val1 -= 100                                 // val1 = val1 - 100
console.log(val1)
val1 *= 2                                   // val1 = val1 * 2
console.log(val1)
val1 /= 5                                   // val1 = val1 / 5
console.log(val1)
val1 **= 2                                  // val1 = val1 ** 2
console.log(val1)
val1 %= 9                                   // val1 = val1 % 9
console.log(val1)
```

#### Logical Operator
Logical Operator used to check conditions
```js
console.log(true && true)                   // When all the conditions are true then the output will true
console.log(false || true)                  // When any one condition is true then the output will true
console.log(!true)                          // Invert the condition
console.log(true || true && !true)          // true
```
> [!IMPORTANT]\
> Precedence order of Logical Operators\
> Logical NOT `(!)`> Logical AND `(&&)` > Logical OR `(||)`

#### Unary Operator
There are two types of Unary Operator-
- Increment
- Decrement
```js
let number = 12
number++
console.log(number) 
number++
console.log(number)
number--
console.log(number)
```
> [!NOTE]\
> Unary Operators are used to increse or decrease value by 1

#### Ternary Operator
Ternary Operator is the replacement of single line `if-else` statement also known as Conditional Operator
```js
let age = 19
// (condition)?statement_true:statement_false
console.log(age>=18?"Eligible":"Not Eligible")
```
