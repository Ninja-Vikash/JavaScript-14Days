/**
 *  Objects in JavaScript
 */

// Objects are used to store data in a collective form
// eg.

// Without using an Object
let JSCourse_title = "JS-Mastery";
let JSCourse_price = 99;
let JSCourse_duration = 3

// Here we are using multiple variables to store course details therefore we have to access them using their different names

// But we want to store all those data in a single variable, So here is the solution
// By using object

// let JSCourse = {
//     title : "JS-Mastery",
//     price : 99,
//     duration : 3
// }

/**
 *  NOTE : Inside object all the elements stored as 'key:value' pairs. And don't forget to separte all the elements using comma(,)
 */

// Now we can access them by using a single variable name
// There are two methods for accessing childs of object
// 1. dot(.) 2. Bracket[]

// console.log(JSCourse.title)
// console.log(JSCourse)
// console.log(JSCourse["price"])
// console.log(JSCourse)

/**
 *  Methods in Object
*/

// JSCourse.title = "HTML"          // We can make changes
// JSCourse["price"] = 199

// JSCourse.certified = true           // for inserting new key
// JSCourse.author = "Ninja-Vikash"           // for inserting new key

// delete JSCourse.author

// console.log(JSCourse)

/**
 *  For-in Loop
 */

// for (const key in JSCourse) {
//     const element = JSCourse[key];
//     console.log(`${key} : ${element}`)
// }

/**
 *  Project: Course Viewer
 */

// function CourseViewer(courseName){
//     for (const key in courseName) {
//         const element = courseName[key];
//         console.log(`${key} : ${element}`)
//     }
// }

// let JSCourse = {
//     title : "JS-Mastery",
//     price : 99,
//     duration : 3
// }
// let NodeJS = {
//     title: "node.js",
//     price: 49,
//     duration: 4
// }
// let ReactJS = {
//     title: "react.js Mastery",
//     price: 129,
//     duration: 6
// }
// let VueJS = {
//     title: "Vue.js Fundamentals",
//     price: 99,
//     duration: 6
// }
// let ExpressJS = {
//     title: "Express.js Crash Course",
//     price: 59,
//     duration: 3
// }

// CourseViewer(JSCourse)
// CourseViewer(ExpressJS)

/**
 *  Use with Array
 */

// let courses = [
//     {
//         title: "JavaScript Basics",
//         price: 49,
//         duration: 4
//     },
//     {
//         title: "Intermediate JavaScript",
//         price: 79,
//         duration: 6
//     },
//     {
//         title: "Modern JavaScript Frameworks",
//         price: 149,
//         duration: 8
//     },
//     {
//         title: "JavaScript Algorithms and Data Structures",
//         price: 99,
//         duration: 5
//     },
//     {
//         title: "Full Stack JavaScript Development",
//         price: 199,
//         duration: 10
//     },
//     {
//         title: "Node.js Mastery",
//         price: 129,
//         duration: 6
//     },
//     {
//         title: "React.js Essentials",
//         price: 89,
//         duration: 7
//     },
//     {
//         title: "Vue.js Fundamentals",
//         price: 99,
//         duration: 6
//     },
//     {
//         title: "Express.js Crash Course",
//         price: 59,
//         duration: 3
//     },
//     {
//         title: "JavaScript Testing with Jest",
//         price: 69,
//         duration: 4
//     }
// ];

// courses.forEach(element => {
//     for (const key in element) {
//         const value = element[key];
//         console.log(`${key} : ${value}`)
//     }
//     console.log("\n")
// });

// On combined use of two powerfull loops we can list all the object elements of an array

/**
 *  Constructor function
 */

// function course(title, price, duration){
//     this.title = title;
//     this.price = price;
//     this.duration = duration;
// }

// let DSA = new course("DSA", 1999, 4)

// for (const key in DSA) {

//     const element = DSA[key];
//     console.log(`${key} : ${element}`)
        
// }

/** 
 *  Project Course Constructor
 */

// function course(title, price, duration){
//     this.title = title;
//     this.price = price;
//     this.duration = duration;
// }

// let DSA = new course("DSA", 1999, 4)
// DSA.author = "Ninja-Vikash"

// console.log(DSA)

// let ADCA = new course("ADCA", 2999, 8)

// console.log(ADCA)

// let HTML = new course("HTML", 1599, 6)

// console.log(HTML)

/**
 *  Understanding of this | new keywords
 */

let Samsung = {
    brand : "A30",
    price : 27999,
    OS : "android 14",
    processor : "octa-core",
    ram : 6,
    storage : 256,
    purchase : function (){
        console.log(`Congrats! You have purchased ${this.brand}`)
    },
    bill : function (){
        discount = this.price - 2000;
        console.log(`Hurray! You are our new customer`)
        console.log(`Payable amount is ${discount}`)
    }
}

Samsung.purchase()
Samsung.bill()

// We use this keyword to target any key of the object inside a function of the object.

/**
 *  Use of this | new keyword in constructor function
 */

// function mobile (brand, price, discount){
//     this.brand = brand;
//     this.price = price;
//     this.discount = discount;
//     this.payAmount = this.price - [this.price * this.discount/100]
//     this.bill = ()=>{
//         console.log(`Thank you for purchasing ${this.brand} and you paid ${this.payAmount}`)
//     }
// }

// let apple = new mobile ("iphone X", 49999, 5)

// apple.bill()

// new keyword is used to create new object using the already crafted skeleton

/**
 *  class 
 */

// class is generally used to create objects
// class has its own constructor

class student{
    constructor(name, age, roll, year){
        this.name = name;
        this.age = age;
        this.roll = roll;
        this.year = year;
        this.data = function(){
            console.log(`${this.name}, ${this.age} years old. Your roll no ${this.roll}. You are going to pass in ${this.year}`)
        }
    }
}

let Vikash = new student("Vikash", 20, 198, 2024)

Vikash.data()
