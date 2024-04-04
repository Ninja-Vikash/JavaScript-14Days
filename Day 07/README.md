##### JavaScript-14Days Challenge🏋️‍♂️
# Getting Started🚀
### Higher Order Functions
#### What is a Higher Order Function
A higher order function is a function who accepts arguments on calling the function. and the argument can be a `number`, `string`, `boolean`, `object` or a `function()`.
```js
function ObjectViewer (data, received){
    console.log(data)
    let status = received
    console.log(status)
}

const data = {
    name : "Vikash",
    role : "Developer",
    age : 20,
    city : "Jamshedpur"
}

ObjectViewer(data, true)           // {name : "Viaksh", role : "Developer", age : 20, city : "Jamshedpur"} | true
```
#### Example
```js
function calculate(a, b, operation){
    return operation(a,b)
}
```
> [!NOTE]\
> In the above function has three parameters\
> `function calculate`(`a`, `b`, `operation`)

```js
calculate(10 , 4, exp)
```
> [!NOTE]\
> When we call the function some arguments can be passed.\
> And when we pass a function as an argument it's become a higher order function.

```js
function calculate(a, b, operation){
    return operation(a,b)
}

function add(a, b){
    console.log(a+b)
}

function sub(a, b){
    console.log(a-b)
}
function product(a, b){
    console.log(a*b)
}
function div(a, b){
    console.log(a/b)
}
function mod(a, b){
    console.log(a%b)
}
function exp(a, b){
    console.log(a**b)
}

calculate(10 , 4, exp)              // 10000      
// exp is a callback function
```
```js
// Alternate -- Using Arrow functions
const calculate = (a,b,operation)=> operation(a,b)          
// Since in arrow function return is implicited that is why we don't need to write it explicitly

const add = (a, b)=> console.log(a+b)
const sub = (a, b)=> console.log(a-b)
const product = (a, b)=> console.log(a*b)
const div = (a, b)=> console.log(a/b)
const mod = (a, b)=> console.log(a%b)
const exp = (a, b)=> console.log(a**b)

calculate(10 , 4, exp)              // 10000
```
***

### Array Destructuring
Array destruturing is one of the effective way to target an element of an array.
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let [a,b] = arr

console.log(a)              // 1
console.log(b)              // 2
```
> [!IMPORTANT]\
> Spread operator `(...)` are used to target rest of the elements of an array
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let [a,b, ...rest] = arr

console.log(a)              // 1
console.log(b)              // 2
console.log(...rest)        // 3 4 5 6 7 8 9
console.log(rest)           // [3, 4, 5, 6, 7, 8, 9]
```
> [!NOTE]\
> We can skip values of an array by skipping value, I mean by a blank space and comma separation.
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let [a, b, , ...rest] = arr
console.log(a)                  // 1
console.log(a,b)                // 2
console.log(...rest)            // 4 5 6 7 8 9
```
***
### Object Destructuring
Object destructuring is also an effective way to target keys of an Object but with some complication.

```js
// Merging with spread operator
let Obj = {
    candidateName : "Vikash",
    age: 20,
    role: "Developer"
}

let Info = {
    city: "Jamshedpur",
}

let candidateInfo = {...Obj, ...Info}
console.log(candidateInfo)
```
> [!IMPORTANT]\
> We use the exact key name for destruct an Object
```js
let Obj = {
    candidateName : "Vikash",
    age: 20,
    role: "Developer"
}

let Info = {
    city: "Jamshedpur",
}

let candidateInfo = {...Obj, ...Info}

let {candidateName, age} =  candidateInfo
console.log(candidateName)
console.log(age)

let {...rest} =  candidateInfo
console.log(rest)
```
> [!NOTE]\
> spread operator works similarly as in array

***
### 