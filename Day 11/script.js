var brand = document.querySelector("#brand")
var generate = document.querySelector("#generate")
var display = document.querySelector("#display")
var reset = document.querySelector("#reset")
var clipboard = document.querySelector(".clipboard")

generate.addEventListener("click", ()=>{
    var brandTitle = brand.value
    var R1 = Math.random()

    display.style.padding = "5px 10px"

    if(brandTitle == ""){
        display.innerHTML = "Kindly enter brand title"
    }
    else{
        
        if(R1 > 0 && R1 < 0.1){
            brandName = `${brandTitle} Hub`
        }
        else
        if(R1 >= 0.1 && R1 < 0.2){
            brandName = `${brandTitle} Forge`
        }
        else
        if(R1 >= 0.2 && R1 < 0.3){
            brandName = `${brandTitle} HQ`
        }
        else
        if(R1 >= 0.4 && R1 < 0.5){
            brandName = `${brandTitle} Zone`
        }
        else
        if(R1 >= 0.5 && R1 < 0.6){
            brandName = `${brandTitle} Gen`
        }
        else
        if(R1 >= 0.6 && R1 < 0.7){
            brandName = `${brandTitle} Works`
        }
        else
        if(R1 >= 0.7 && R1 < 0.8){
            brandName = `${brandTitle} Creative`
        }
        else
        if(R1 >= 0.8 && R1 < 0.9){
            brandName = `${brandTitle} Solutions`
        }
        else{
            brandName = `${brandTitle} Legacy`
        }
        
        display.innerHTML = brandName + `<div class="clipboard"><i class="fa-solid fa-clipboard"></i></div>`
    }
})

reset.addEventListener("click", ()=> {
    brand.value = ""
})

display.addEventListener("click", ()=> {
    navigator.clipboard.writeText(display.innerText)
    
    display.innerHTML = brandName + `<div class="clipboard"><i class="fa-solid fa-check"></i></div>`
    
    alert("Copied!")
})