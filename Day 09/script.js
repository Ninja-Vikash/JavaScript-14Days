let box = document.querySelector("#box")
let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let btn4 = document.querySelector("#btn4")
let btn5 = document.querySelector("#btn5")

let customColor = document.querySelector("#customColor")

btn1.addEventListener("click", ()=>{
    box.style.backgroundColor = "royalblue"
})
btn2.addEventListener("click", ()=>{
    box.style.backgroundColor = "fuchsia"
})
btn3.addEventListener("click", ()=>{
    box.style.backgroundColor = "crimson"
})
btn4.addEventListener("click", ()=>{
    box.style.backgroundColor = "gold"
})

customColor.addEventListener("input", ()=>{
    btn5.style.backgroundColor = customColor.value
})

btn5.addEventListener("click", ()=>{
    box.style.backgroundColor = customColor.value
} )
