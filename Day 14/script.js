let container = document.querySelector("#container");
let height = document.querySelector("#height")
let width = document.querySelector("#width")

async function fetchData() {
  try {
    if(height.value == 0 && width.value == 0){
        const data = await fetch(`https://picsum.photos/300/400`);
        container.innerHTML= `<img src="${data.url}">`
    }
    else{
        const data = await fetch(`https://picsum.photos/${width.value}/${height.value}`);
        container.innerHTML= `<img src="${data.url}">`
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
