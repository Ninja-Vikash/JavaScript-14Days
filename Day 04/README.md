##### JavaScript-14Days Challenge🏋️‍♂️
# Getting Started🚀
Today we will move to some advanced JavaScript.

[Exercise Array](https://github.com/Ninja-Vikash/JavaScript-Collection/blob/main/README.md#exercise-array)
## What's Inside🎁
- [**Loop**](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2004#loop)
    - for loop
    - while loop
    - do-while loop
    - [Project : Construct a table](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2004#03-project--construct-a-table)
- [**Array**](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2004#array)
    - [**Methods in Array**](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2004#methods-in-array)
    - [**Special loops for Array**](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2004#special-loops-for-array)
    - [**Advanced methods**](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2004#advanced-method-in-array)

***
### Loop
#### What is Loop?
Loop is used to for executing code multiple times repeatedly.

Suppose you want to print `Hello World!` five times <br>**What would you like to do?**

Writing 5-times the same code as
```js
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
```
Or, writing the code once and repeat it using some javascript's magic.<br>**I mean using Loop**
```js
for(let i=0; i<5; i++){
    console.log("Hello World")
}
```

There are 3 basic loops
- for loop
```js
// Basic syntax
for (initialization; condition; increment/decrement) {
    // Code block to be executed
}
```
- while loop
```js
// initialization
while (condition) {
  // Code block to be executed
  // increment/decrement
}
```
- do-while loop
```js
// initialization
do {
  // Code block to be executed
  // increment/decrement
} while (condition);
```
> [!NOTE]\
> In do-while loop, Checks the condition after executing. So What ever the condition it will execute once.

> [!IMPORTANT]\
> while and do-while loops don't have initializer and incrementor/decrementor\
> So we have to declare them. If we don't error will occur.
***
#### **#03 Project** : Construct a table🌱
```js
// ------> Using for loop
function Table(value){
    for(let i = 1; i <= 10; i++ ){
        console.log(i*value)
    }
}

Table(19)

// ------> Alternate
const Table = (val)=> {
    console.log(`TABLE OF ${val}`)
    for(let i = val; i <= val*10; i+=val ){
        console.log(i)
    }
}

Table(5)
// Table(11)
// Table(99)
// Table(202)
```
```js
// ------> Using while loop
const Table = (num)=>{
    let i = 1
    console.log(`TABLE OF ${num}`)
    while (i<=10) {
        console.log(i*num);
        i++
    }
}

Table(13)

// ------> Alternate 
const Table = (num)=>{
    let i = num
    console.log(`Table of ${num} :`)
    while (i<=num*10) {
        console.log(i);
        i+=num
    }
}

Table(24)
```
```js
// ------> Using do-while loop
function Table (value){
    let i = 1
    console.log(`${value}'s table`)
    do {
        console.log(i*value);
        i++
    } while (i<=10);
}

Table(23)

// ------> Alternate
function Table (number){
    let i = number
    console.log(`${number}'s table`)
    do {
        console.log(i);
        i+=number
    } while (i<=number*10);    
}

Table(7)
```
***

### Array
#### What is Array?
Array is a collection of elements, and elements can be a number, string, boolean, or an object.
```js
let arr = [1, 2, "three", "IV", 5, true, {learning : "Array"}]
```
> [!NOTE]\
> In array each element has unique index, and the index value of elements of an array starts from zero `(0)`
```js
let arr = [1, 2, "three", "IV", 5, true, {learning : "Array"}]

// index of 1 → 0
// index of 2 → 1
// index of "three" → 2
// index of "IV" → 3
// index of 5 → 4
// index of 6 → 5
// index of true → 6
// index of {learning : "Array"} → 7
```
As string array has its own methods

**To get the length of array using `length`**
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr.length)
```
In array we can target any value by their index value
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(arr[2])
```
> [!NOTE]\
> We can change value of any single value by targetting by its index
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arr[2] = 134
console.log(arr)
```

***
#### Methods in Array
**Insertion using `push()`**
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.push(10)
console.log(arr)
```
**Insertion using `unshift()`**
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.unshift(0)
console.log(arr)
```
**Deletation using `pop()`**
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.pop()
console.log(arr)
```
**Deletation using `shift()`**
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.shift()
console.log(arr)
```

**Merging array using `concat()`**
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr2 = [2, 4, 6]
let newArr = arr.concat(arr2)
console.log(newArr)
```
> [!NOTE]\
> We can merge arrays using spread operator `(...)`, Spread Operator used to simplify coding.
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr2 = [2, 4, 6]
let newArr = [...arr, ...arr2]
console.log(newArr)
```

**Removing multiple elements from array using `splice()`**
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.splice(1, 4)
console.log(arr)
```

**Extracting some elements from an array using `slice()`**
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr3 = arr.slice(1, 4)
console.log(arr3)
```
***
#### Special loops for Array
**forEach loop**
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.forEach(element => {
    console.log(element)
});
```
> [!NOTE]\
> **forEach()** loop used to target each element of Array

**for-of loop**
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (const iterator of arr) {
    console.log(iterator)
}
```
> [!NOTE]\
> for-of loop used to iterate each element of an array
***
#### Advanced method in array
**map()** used to create another array on the basis of an existing array.
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let newArr = arr.map(e=>e*2)
console.log(newArr)
```

**filter()** used to get those elements from the array, pass the condition
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let newArr = arr.filter(e=>e>4)
console.log(newArr)
```

**reduce()** used to minimize the array using the given expression
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let newArr = arr.reduce((a, b)=>a+b)
console.log(newArr)
```
> [!NOTE]\
> `reduce()` accepts two arguments