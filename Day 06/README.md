##### JavaScript-14Days Challenge🏋️‍♂️
# Getting Started🚀
Today we are going to see a glance of Async JavaScript

### The main use of Async functions to break the code execution process.
Those code inside a Async function will execute after the sync code completely executed.

There are two basic functions to easily understand Async.
### `setTimeOut()`
```js
setTimeout(() => {
    console.log("Hello, This is Async JS")
}, 1000);
```
> [!NOTE]\
> `setTimeOut()` accepts two argument. first argument as a function and second argument is a time in miliseconds\
> And it will evoke the function after the given time.
### `setInterval()`
```js
setInterval(() => {
    console.log("Hello World!")
}, 1000);
```
> [!NOTE]\
> `setInterval()` accepts two argument as `setTimeOut()`.\
> And it also evokes itself after a lap of time repeatedly.

> [!IMPORTANT]\
> To stop the `setInterval()` we use `clearInterval()`
```js
var Welcome = setInterval(() => {
    console.log("Hello World!")
}, 1000);

clearInterval(Welcome)
```
Similarly, We can stop `setTimeOut()` as
```js
var info = setTimeout(() => {
    console.log("Hello, This is Async JS")
}, 2000);

clearTimeout(info)
```

These are two basic Async functions, And we can encapsule <br> JavaScript code snippets inside it for making the code snippet `Async`
```js
setTimeout(()=> {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function Table(n) {
    let table = arr.map((e) => e * n);
    console.log(`Table of ${n}`);

    table.forEach((element) => {
      console.log(element);
    });
  }

  // Pass value for getting the table
  Table(7);
}, 1000);
```
***
### Callback function()
Callback functions are used to call a function inside another function by passing the name of the function as argument, and executed after some opeartion has been completed or an event has occurred.

Callback functions are commonly used in asynchronous programming
```js
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
```
***
#### **#07 Project** : Get table or square values🌱
```js
function getValue(val, number) {
  setTimeout(() => {
    let n = val;
    number(n);
  },[]);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Table(n) {
  let table = arr.map((e) => e * n);
  console.log(`Table of ${n}`);

  table.forEach((element) => {
    console.log(element);
  });
}

function Square(n){
  console.log(`Square of ${n} is ${n**2}`)
}

getValue(11,Square);
getValue(11,Table);

/**
 *  IMPORTANT : Pass number as first argument and operation as second argument
 */
```