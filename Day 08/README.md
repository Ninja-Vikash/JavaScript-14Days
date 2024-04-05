##### JavaScript-14Days Challenge🏋️‍♂️
# Getting Started🚀

### DOM
#### What is DOM?
**DOM** stands for Document Object Model.

When we render an HTML document on the browser. Browser treats it like a document model.
<br>
All the elements of the HTML document creates a tree like structure which is known as Document Object Model.

We can get document model of Any HTML document using the code below
```js
console.log(document.body.childNodes)       // NodeList(4) [text, h1, text, script]
```
> [!NOTE]\
> `childNodes` consider white spaces as a Node.\
> For getting real elements of an HTML document we use `children`
```js
console.log(document.body.children)         // HTMLCollection(2) [h1, script]
```

#### Targetting any DOM element like Array methods
```html
<!-- html code -->
<body>
    <h1>hello</h1>
    <h2>I am Vikash Kumar</h2>
    <p>Lorem ipsum dolor sit.</p>
    
    <script src="script.js"></script>
</body>
```
```js
// javascript code
console.log(document.body.children)

document.body.children[0].style.color = "green"
document.body.children[2].style.color = "red"
document.body.children[1].style.color = "blue"
```

#### Selecting HTML elements in JavaScript
**Using DOM Model**
```js
var myName = document.body.children[1]

myName.style.color = "blue"
```
> [!IMPORTANT]\
> We store elements in Variable for further uses in Our Project

**Using idName**
```js
var brand = document.getElementById("brandName")

brand.style.backgroundColor = "yellow"
```
> [!NOTE]\
> One of the best method to select an HTML element is `querySelector`\
> Because we can select elements like CSS selectors
**Using querySelector**
```js
var text = document.querySelector("h1")

text.style.backgroundColor = "red"

// --------------------------------------------------

var brandColor = document.querySelector("#brandName")

brandColor.style.color = "brown"
```

#### Difference between innerHTML & innerText
```html
<!-- html code -->
<div class="container">
        <span>
            <b>
                JavaScript
            </b>
        </span>
</div>
```
```js
// javascript code
var container = document.querySelector(".container")

console.log(container.innerHTML)
// <span>
//     <b>
//         JavaScript
//     </b>
// </span>

console.log(container.innerText)        // Javascript
```