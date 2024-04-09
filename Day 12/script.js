/**
 *  Math function
 */

// let num = Math.abs(-19)
// let sq = Math.pow(12,12)
// console.log(sq)

/**
 *  Create a program to get exponential values
 */

// function expo (val, exp) {
//     let result = Math.pow(val, exp)
//     console.log(result)
// }

// expo(5, 3)

function power(expo, start, end) {
    if (start == undefined) {
      console.log("PASS SECOND ARGUMENT");
    }
    else
    if (end == undefined) {
        console.log(`${start}^${expo} = ${Math.pow(start, expo)}`)
    }
    else {
      for (let i = Math.min(start , end); i <= Math.max(start, end); i++) {
        console.log(`${i}^${expo}= ${Math.pow(i, expo)}`)
      }
    }
  }
  
  power(2, 12, 1);

// console.log(Math.min(0,3, 4, -1))

let arr = [5, 2, 9, 1, 7];

arr.sort((a, b)=> b - a)  // Decending order
arr.sort((a, b)=> a - b)  // Ascending order

// console.log(arr)

// console.log(Math.sqrt(196))

// console.log(Math.ceil(45.23))

// console.log(Math.floor(34.34))

// console.log(Math.round(23.23))
// console.log(Math.round(23.67))


/**
 *  Date function
 */

let currentDate = new Date()


// console.log(currentDate.getDate())
// console.log(currentDate.getDay())
// console.log(currentDate.getHours())
// console.log(currentDate.toDateString())
// console.log(currentDate.toLocaleDateString())
// console.log(currentDate.toLocaleTimeString())
