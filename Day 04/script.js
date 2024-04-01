/**
 *  LOOP
 */

// --- With out loop
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")

// --- With loop
// for(let i=0; i<5; i++){
//     console.log("Hello World")
// }

// --- For loop

// for(let i=1; i<=10; i++){
//     console.log(i*2)
// }

// ------> Using for loop
// function Table(value){
//     for(let i = 1; i <= 10; i++ ){
//         console.log(i*value)
//     }
// }

// Table(19)

// ------> Alternate
// const Table = (val)=> {
//     console.log(`TABLE OF ${val}`)
//     for(let i = val; i <= val*10; i+=val ){
//         console.log(i)
//     }
// }

// Table(5)
// Table(11)
// Table(99)
// Table(202)

// --- While loop
// ------> Using while loop
// const Table = (num)=>{
//     let i = 1
//     console.log(`TABLE OF ${num}`)
//     while (i<=10) {
//         console.log(i*num);
//         i++
//     }
// }

// Table(13)

// ------> Alternate 
// const Table = (num)=>{
//     let i = num
//     console.log(`Table of ${num} :`)
//     while (i<=num*10) {
//         console.log(i);
//         i+=num
//     }
// }

// Table(24)

// Do-while loop

/**
 *  ARRAY
 */

let arr = [1, 2, "three", "IV", 5, true, {learning : "Array"}]
// console.log(arr)

// index of 1 → 0
// index of 2 → 1
// index of "three" → 2
// index of "IV" → 3
// index of 5 → 4
// index of 6 → 5
// index of true → 6
// index of {learning : "Array"} → 7

arr[1] = 10
console.log(arr[3])
console.log(arr)

/**
 *  Array methods
 */
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arr.length)

// Method for Insertion
// arr.push(10)
// console.log(arr)
// arr.unshift(0)
// console.log(arr)

// Method for Delete
// arr.pop()
// console.log(arr)
// arr.shift()
// console.log(arr)

// let arr2 = [2, 4, 6]
// let newArr = arr.concat(arr2)
// let newArr = [...arr, ...arr2]
// console.log(newArr)

// let arr3 = arr.slice(1, 4)
// console.log(arr3)

// arr.splice(1, 4)
// console.log(arr)

// For each loop
// arr.forEach(element => {
//     console.log(element)
// });

// for of loop
// for (const iterator of arr) {
//     console.log(iterator)
// }

/**
 *  map
 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let newArr = arr.map(e=>e*2)

console.log(newArr)

/**
 *  filter
 */
let newArr2 = arr.filter(e=>e>1)

console.log(newArr2)

/**
 *  reduce
 */

let newArr3 = arr.reduce((a, b)=>a*b)
console.log(newArr3)