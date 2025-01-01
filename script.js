let container = document.querySelector("#container");
function makeGrid(square){   
for(let i = 0; i<square*square; i++){
let newDiv = document.createElement("div");
newDiv.setAttribute("style", `width:${960/square}px; height:${960/square}px; border: solid black 1px; box-sizing:border-box`)
newDiv.classList.add("grid")
container.appendChild(newDiv);
}}
makeGrid(16);
let div = document.querySelectorAll(".grid");
div.forEach((element) => element.addEventListener("mouseenter",()=>element.classList.add("black") ))
let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    let number;
    while(true){
    number=prompt("Input size of grid");
    if (number<100){
        break;
    }
    }
    makeGrid(number);
    let div = document.querySelectorAll(".grid");
    div.forEach((element) => element.addEventListener("mouseenter",()=>element.classList.add("black") ))
})