##### JavaScript-14Days Challenge🏋️‍♂️
# Getting Started🚀
Here are the important concepts of JavaScript
## What's Inside🎁
- [Object](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2005#object)
    - [What is Object?](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2005#what-is-object)
    - [Methods in Object](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2005#methods-of-object)
    - [for-in loop](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2005#for-in-loop)
    - [Project: Course Viewer](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2005#04-project--course-viewer)
    - [Project: Course Lister](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2005#05-project--course-lister)
- [Contructor function](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2005#constructor-function)
    - [Project: Course Constructor](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2005#06-project--course-constructor)
    - [this & new](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2005#keywords-use-with-constructor-function)
- [Class](https://github.com/Ninja-Vikash/JavaScript-14Days/tree/main/Day%2005#class)

***

### Object
#### What is Object?
Objects are used to store data in a collective form.

**What is the actual use of objects** <br>
To simplify wrapping up the code
```js
// Without using an Object
let JSCourse_title = "JS-Mastery";
let JSCourse_price = 99;
let JSCourse_duration = 3
```
> [!NOTE]\
> Here we are using multiple variables to store course details,\
> therefore we have to access them using their different names

```js
let JSCourse = {
    title : "JS-Mastery",
    price : 99,
    duration : 3
}
```
> [!NOTE]\
> Now the accessibilty improved.\
> We can access them by using a single variable.

> [!IMPORTANT]\
> Inside object all the elements stored as `key : value` pairs.\
> And don't forget to separte all the elements using `comma(,)`

***
#### Notations for accessing childs of an Object
- Dot(`.`) Notation
```js
let JSCourse = {
    title : "JS-Mastery",
    price : 99,
    duration : 3
}

console.log(JScourse.title)
console.log(JScourse.price)
```
- Bracket`[]` Notation
```js
let JSCourse = {
    title : "JS-Mastery",
    price : 99,
    duration : 3
}

console.log(JScourse["title"])
console.log(JScourse["price"])
```
***
#### Methods of Object
**For read**
```js
let JSCourse = {
    title : "JS-Mastery",
    price : 99,
    duration : 3
}

console.log(JScourse)
```
**For add**
```js
let JSCourse = {
    title : "JS-Mastery",
    price : 99,
    duration : 3
}

JSCourse["author"] = "Ninja-Vikash"
JSCourse.certified = true

console.log(JScourse)
```
> [!NOTE]\
> We can insert any new value on the object using above method\
> Bracket Notation will also go.

**For update**
```js
let JSCourse = {
    title : "JS-Mastery",
    price : 99,
    duration : 3
}

JSCourse.title = "JavaScript"
JSCourse["price"] = 199

console.log(JScourse)
```
> [!NOTE]\
> Target the key of the object and assign it with new value as above

**For delete**
```js
let JSCourse = {
    title : "JS-Mastery",
    price : 99,
    duration : 3
    author : "Ninja-Vikash"
}

delete JScourse.author

console.log(JScourse)
```

> [!NOTE]\
> For deleting any key from object use `delete` keyword.

***
#### For-in loop
This is a special loop for objects
```js
let JSCourse = {
    title : "JS-Mastery",
    price : 99,
    duration : 3
}

for (const key in JSCourse) {
    const element = JSCourse[key];
    console.log(`${key} : ${element}`)
}
```
***

#### **#04 Project** : Course Viewer🌱
```js
function CourseViewer(courseName){
    for (const key in courseName) {
        const element = courseName[key];
        console.log(`${key} : ${element}`)
    }
}

let JSCourse = {
    title : "JS-Mastery",
    price : 99,
    duration : 3
}
let NodeJS = {
    title: "node.js",
    price: 49,
    duration: 4
}
let ReactJS = {
    title: "react.js Mastery",
    price: 129,
    duration: 6
}
let VueJS = {
    title: "Vue.js Fundamentals",
    price: 99,
    duration: 6
}
let ExpressJS = {
    title: "Express.js Crash Course",
    price: 59,
    duration: 3
}

CourseViewer(JSCourse)
CourseViewer(ExpressJS)
```
***
#### **#05 Project** : Course Lister🌱

```js
let courses = [
    {
        title: "JavaScript Basics",
        price: 49,
        duration: 4
    },
    {
        title: "Intermediate JavaScript",
        price: 79,
        duration: 6
    },
    {
        title: "Modern JavaScript Frameworks",
        price: 149,
        duration: 8
    },
    {
        title: "JavaScript Algorithms and Data Structures",
        price: 99,
        duration: 5
    },
    {
        title: "Full Stack JavaScript Development",
        price: 199,
        duration: 10
    },
    {
        title: "Node.js Mastery",
        price: 129,
        duration: 6
    },
    {
        title: "React.js Essentials",
        price: 89,
        duration: 7
    },
    {
        title: "Vue.js Fundamentals",
        price: 99,
        duration: 6
    },
    {
        title: "Express.js Crash Course",
        price: 59,
        duration: 3
    },
    {
        title: "JavaScript Testing with Jest",
        price: 69,
        duration: 4
    }
];

courses.forEach(element => {
    for (const key in element) {
        const value = element[key];
        console.log(`${key} : ${value}`)
    }
    console.log("\n")
});
```
> [!NOTE]\
> On combined use of two powerfull loops we can list all the object elements of an array
***
### Constructor function
Constructor function is used to create an object
#### **#06 Project** : Course Constructor🌱
```js
function course(title, price, duration){
    this.title = title;
    this.price = price;
    this.duration = duration;
}

let DSA = new course("DSA", 1999, 4)

for (const key in DSA) {

    const element = DSA[key];
    console.log(`${key} : ${element}`)
        
}
```
***
#### Keywords use with constructor function
**this** : We use `this` keyword to target any key of the object inside a function of the object.
```js
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
```
> [!NOTE]\
> `this` only works inside of an object

**new** : We use `new` keyword to create new object using the already crafted skeleton.
```js
function mobile (brand, price, discount){
    this.brand = brand;
    this.price = price;
    this.discount = discount;
    this.payAmount = this.price - [this.price * this.discount/100]
    this.bill = ()=>{
        console.log(`Thank you for purchasing ${this.brand} and you paid ${this.payAmount}`)
    }
}

let apple = new mobile ("iphone X", 49999, 5)

apple.bill()
```
> [!NOTE]\
> `new` only works outside of an object

### Class
Classes are generally used to create objects, class has its own `constructor`.
```js
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
```