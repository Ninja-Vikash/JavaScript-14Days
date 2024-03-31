##### JavaScript-14Days Challenge🏋️‍♂️
# Getting Started🚀
**JavaScript is a Smart Language**

Unlike other programming languages like **JAVA**, **C**, and **C++**.

We don't need to deploy variable type before declaration.

**JAVASCRIPT** is a Smart Language. Which helps to identify type of variable **Implicitly**.

i.e., JavaScript has implicit nature for identifying type of variable. While JAVA, C++ has explicit nature.
## What's Inside🎁
- [String](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2003#string)
    - [Concatenation](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2003#concatenation)
    - [Template Literal](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2003#template-literal)
    - [Project : Welcome Note](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2003#02-project--welcome-note)
    - [Escape Sequence](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2003#escape-sequence)
    - [String Methods](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2003#string-methods)
- [Conditionals](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2003#conditional)
    - [if-else](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2003#if-else-statements)
    - [switch](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2003#switch-case-statement)
- [Function](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2003#function)
    - [Normal vs Arrow](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2003#normal-function-vs-arrow-function)
    - [implicit & explicit](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2003#implicit--explicit-return)

***
### String
#### What is String?
String is a data-type used to store text values.
```js
let myName = "Vikash"
```
What ever written between **Quotes** is a string, String can be written between single or double quotes in JavaScript.

> [!NOTE]\
> To check data-type of a variable, we can use typeof() function
  ```js
  let myName = "Vikash"
  console.log(typeof(myName))       // string
  ```
***
#### Concatenation
Merging strings known as **Concatenation**, for merging we use ` + ` operator.
```js
let FName = "Vikash"
let LName = "Kumar"
let FullName = FName + LName

console.log(FullName)              // VikashKumar

// For spacing between two strings we need to add a blank string as
FullName = FName + " " + LName

console.log(FullName)              // Vikash Kumar
```
> [!NOTE]\
> We can use concat() function for concatenating strings
```js
let FName = "Vikash"
let LName = "Kumar"
let Add = "I live in JSR"
let country = "INDIA"

let FullName = FName.concat(" ", LName, " ", Add, " ", country )
console.log(FullName)
```
***
#### Template Literal
Template literal usually used with strings to simplify concatenation.
```js
let FName = "Vikash"
let LName = "Kumar"

let FullName = `My name is ${FName} ${LName}`

console.log(FullName)              // My name is Vikash Kumar
```
> [!NOTE]\
> We can use JavaScript vaiable inside template literal using a `${}`

***
#### **#02 Project** : Welcome note🌱
```js
let FName = prompt("Enter your first name")
let LName = prompt("Enter your last name")

let WelcomeNote = `Hello, ${FName} ${LName}. You are on the path of learning JavaScript`
console.log(WelcomeNote)        // Hello, Vikash Kumar. You are on the path of learning JavaScript
```
***
#### Escape Sequence
Escape sequence are used in strings to represent character that cannot be easily typed.
For using escape sequence we need to start with a backslash `\`

Sometimes we need to insert quotes in strings.
```js
console.log("Hello I am \"Vikash\"")
```
> [!NOTE]\
> Either enclosed double quotes inside single quotes or vice-versa\
> Most safest way to use quotes in side strings is using **Template Literals**

Some common escape sequences
- \n for new line
- \t for tab
```js
console.log("Hello,\nMy name is vikash kumar.\nI am based in India.\nI am a Web Developer.")

// Hello,
// My name is vikash kumar.
// I am based in India.
// I am a Web Developer.
```
***
#### String methods
String method are used to manipulate and work with string effectively.

**You can use these basic string methods on the given example:**
```js
let myName = "Vikash Kumar"
let fName = "Vikash"
let lName = " Kumar"
```
- length

```js
console.log(myName.length)                                      // 12
```
- charAt()
```js
console.log(myName.charAt(4))                                   // s
```
- concat()
```js
console.log(fName.concat(lName))                                // Vikash Kumar
```
- indexOf()
```js
console.log(myName.indexOf("a"))                                // 3
```
- lastIndexOf()
```js
console.log(myName.lastIndexOf("a"))                            // 10
```
- toUpperCase()
```js
console.log(myName.toUpperCase())                               // VIKASH KUMAR
```
- toLowerCase)()
```js
console.log(myName.toLowerCase())                               // vikash kumar
```
- slice()
```js
console.log(myName.slice(0, 6))                                 // Vikash
```
- replace()
```js
console.log(myName.split(" "))                                  // ["Vikash", "Kumar"]
```
- split()
```js
console.log(myName.replace("Vikash Kumar", "Ninja-Vikash"))     // Ninja-Vikash
```
***
### Conditional
Conditionals are used to perform logical task if the condition is true then it will execute the code.

There are two types of conditionals:
1. if-else
2. switch

#### if-else statements
Single if statement
```js
let Age = 18
if (Age >= 18)
console.log("You are eligible for voting")
```
> [!NOTE]\
> If we using only single line-statement, we don't need to enclose the statement with blocks.\
> But if we have multple lines, Then we have to.

if-else statement
```js
let Age = 10
let canVote = 18-Age

if (Age >= 18){
    console.log("You are eligible for voting")
}
else{
    console.log("Sorry")
    console.log(`You can vote after ${canVote} years`)
}
```
> [!NOTE]\
> Conditional Operator is the replacement of single if-else statement
```js
let age = 20
console.log((age>=18)?"You are eligible":"You are not eligible")
```

if-else ladder
```js
let Age = 25

if (Age < 18){
    console.log("You can't join Indian Army")
}
else
if(Age >= 18 && Age < 24){
    console.log("You can join Indian Army")
}
else {
    console.log("Your age is exceeded")
}
```
***
#### Switch case statement
```js
let dayName = "SUN"
    
switch (dayName) {
    case "SUN":
        console.log("LEG WORKOUT DAY")
        break;
    case "MON":
        console.log("LEG WORKOUT DAY")
        break;
    case "TUE":
        console.log("REST")
        break;
    case "WED":
        console.log("BICEP & BACK WORKOUT DAY")
        break;
    case "THU":
        console.log("BICEP & BACK WORKOUT DAY")
        break;
    case "FRI":
        console.log("CHEST WORKOUT DAY")
        break;
    case "SAT":
        console.log("CHEST WORKOUT DAY")
        break;
    default:
        console.log("PLEASE ENTER A VALID DAY.")
        break;
}
```
***
### Function
#### What is function?
A function in JavaScript is a block of code designed to perform a specific task. It allows you to encapsulate logic, making your code more reusable and easier to understand. Functions can take input through parameters and return a value or output.

```js
function addNumbers(a, b) {
  let result = a + b;
  return result;
}

// Call the function
let sum = addNumbers(3, 4);
console.log(sum);             // Output: 7
```

#### Normal function vs Arrow function
```js
// Normal function
function Welcome(user){
  console.log(`Hello ${user}!`)
  console.log("Now, You are a part of JavaScript 14Days Challenge!")
  console.log("Keep Learning.")
}

Welcome("Vikash")
```
```js
// Arrow function
const Welcome = (user)=>{
  console.log(`Hello ${user}!`)
  console.log("Now, You are a part of JavaScript 14Days Challenge!")
  console.log("Keep Learning.")
}

Welcome("Vikash")
```
#### Implicit & Explicit return
```js
// Implicit return
const addNumbers = (a, b)=> a+b

console.log(addNumbers(19, 21))

// Explicit return
function addNumbers(a, b) {
    return a+b;
}

console.log(addNumbers(19, 21))
```