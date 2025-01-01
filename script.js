let container = document.querySelector("#container");
function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function turnIntoRandomColor(domElement){
    domElement.style.backgroundColor=`rgb(${randomNumber(1,256)},${randomNumber(1,256)},${randomNumber(1,256)})`
}
function makeMoreOpaque(domElement){
    if(Number(domElement.style.opacity)<1)
    domElement.style.opacity=`${Number(domElement.style.opacity)+0.1}`
}
function makeGrid(square){   
for(let i = 0; i<square*square; i++){
let newDiv = document.createElement("div");
newDiv.setAttribute("style", `width:${960/square}px; height:${960/square}px; border: solid black 1px; box-sizing:border-box`)
newDiv.classList.add("grid")
container.appendChild(newDiv);
}
let div = document.querySelectorAll(".grid");
div.forEach((element) => element.addEventListener("mouseenter",()=>{turnIntoRandomColor(element); 
    makeMoreOpaque(element);
}))
}
makeGrid(16);
let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    let number;
    while(true){
    number=prompt("Input size of grid (less than 100)");
    if (number<100){
        break;
    }
    }
    makeGrid(number);
})