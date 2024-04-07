##### JavaScript-14Days Challenge🏋️‍♂️
# Getting Started🚀

## A glimpse of nodejs
### How to initialize any project as an node project.
For initialize any project as node project just simply run the code
```bash
npm init
```
It will ask some questions after answering the question a `package.json` file will be created.
**Now you can run node commands**

Node js renders data in server-side.
<br>
You can see your data on your local server, I mean your terminal.

```js
// index.js

console.log("Hello World")
```
Now run the command on your terminal.
```bash
node index.js
```

***
#### We can use variables
```js
var myName = "Vikash"

console.log(`My name is ${myName}`)
```
Now run the index.js file using the command line `node index.js`

### Import data from another js file
Old JavaScript doesn't support importing and exporting modules.
<br>
i.e., We can't use data of other JS file inside our main Js file. But Modern Js supports it.

> [!IMPORTANT]\
> By default our package.json has the script `type="commonjs"`\
> Before starting importing make sure you have set the `type="module"`

Make changes in your `package.json`
```json
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "This is a tutorial of nodejs",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "ninja-vikash",
  "license": "ISC"
}
```
Now all set you can import data from other js files

```js
// data.js
var myData = {
    name : "Vikash Kumar",
    role : "Developer",
    age : 20
}

export default myData
```
```js
// index.js
import myData  from "./data.js";

console.log(myData)
```
**Now run `node index.js`**

***

### fs modules in nodejs
nodejs has inbuilt file system module to manipulate files named `fs`. Has multiple method to manipulate data in a file.

> [!NOTE]\
> We can use both type that is `commonjs` or `module`

#### For creating a file
**fs.writeFile()**

```js
// index.js

import fs from 'fs'             // Using module

fs.writeFile("index.html", "Hello", ()=>console.log("done"))
```
> [!IMPORTANT]\
> In `fs.writefile()`\
> first argument passed as file name, second argument is the data of the file, third argument as a callback function to be executed after the module succeed

```js
// index.js
const fs = require("fs")            // Using commonjs

fs.writeFile("index.html", "Hello", ()=>console.log("done"))
```
> [!WARNING]\
> When type is module we can't use require method\
> Similar for commonjs we can't use import method

**fs.appendFile()**

```js
// index.js
import fs from 'fs'

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

fs.appendFile("index.html", htmlData, ()=>console.log("html file created!")`)
```
> [!NOTE]\
> `appendFile()` use to update a file if not created then it will form file.

#### For deleting file
**fs.unlink()**
```js
// index.js
import fs from 'fs'

fs.unlink("index.html", (err)=>{
    if(err){
        console.log("failed")
    }
    console.log("deleted")
})
```
> [!IMPORTANT]\
> unlink() accepts two argument\
> We have to pass an error argument in callback function.

#### For reading file
```js
// index.js
import fs from 'fs'

fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content:', data);
});
```
> [!NOTE]\
> We have to pass encoding language as second argument