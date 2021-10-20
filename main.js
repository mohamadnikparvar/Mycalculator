let displayBox = document.querySelector(".display")
let list = document.querySelectorAll(".show-display")

function showDisplay(e) {
    const x = e.target.innerText
    if (displayBox.innerText ==0){
        return displayBox.innerHTML = x
    }
    return displayBox.innerHTML += x
}

function calculate() {
    displayBox.innerText = eval(displayBox.innerText)
}

function refresh() {
    displayBox.innerText = 0
}

function clear() {
    if (displayBox.innerText.length ===1){
        displayBox.innerText = 0
    }else{
        displayBox.innerText = displayBox.innerText.substring(0,displayBox.innerText.length -1)
    }
}

document.querySelector(".calculate").addEventListener("click",calculate)
document.querySelector(".all-clear").addEventListener("click",refresh)
document.querySelector(".clear-last").addEventListener("click",clear)
list.forEach(item =>{
    item.addEventListener("click",showDisplay)
})