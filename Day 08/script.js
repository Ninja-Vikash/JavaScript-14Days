/**
 *  DOM
 */

console.log(document.body.childNodes)

console.log(document.body.children[2])

console.log(document.body.children[1].innerHTML)
console.log(document.body.children[1].innerText)

/**
 *  Selecting elements
 */

var brand = document.getElementById("brandName")

brand.style.backgroundColor = "yellow"

var text = document.querySelector("h1")

text.style.backgroundColor = "red"

var brandColor = document.querySelector("#brandName")

brandColor.style.color = "brown"

/**
 *  Diff between innerText & innerHTML
 */

var container = document.querySelector(".container")

console.log(container.innerHTML)

console.log(container.innerText)