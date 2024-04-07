/**
 *  Introduction to Node.js
 */

// For initializing your project as a nodejs project
// In terminal run the cmmd "npm init" and after answering some questions a package.json file will create

// Nodejs is a server side rendering

// console.log("Hello my name is Vikash")

// You can print the above msg in terminal by executing the code.
// For executing we have to type "node index.js"

// var myName = "Vikash"

// console.log(`Hello,  \nI am ${myName}`)

/**
 *  Old JavaScript supports require method and modern JavaScript supports import/export
 */

// import myData  from "./data.js";

// console.log(myData)

/**
 *  Fs module
 */
import fs from 'fs'

// fs.writeFile("index.html", "Hello", ()=>console.log("done"))

// Old

// const fs = require("fs")

// fs.writeFile("index.html", "Hello", ()=>console.log("done"))

const htmlData = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h1>Hello World!</h1>
</body>
</html>`

// fs.appendFile("index.html", htmlData, ()=>console.log("html file created!"))

fs.unlink("index.html", (err)=>{
    if(err){
        console.log("failed")
    }
    console.log("deleted")
})

fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content:', data);
});