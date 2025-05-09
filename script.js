const hour_container = document.getElementById("hour_container")
const cross = document.getElementById("cross")
const plus = document.getElementById("plus")
const create_container = document.getElementById("create_container")

const lines = document.querySelectorAll(".line")

function createInput(el) {
    const input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "Введите текст...")
    input.classList.add('inputStyle');
    el.appendChild(input)
}
function createAllInput() {
    lines.forEach((el) => {createInput(el)})
  }
function unplug(){
  create_container.style.display="flex"
}
function plug(){
  create_container.style.display=""
}

cross.addEventListener("click", () => {unplug()})
plus.addEventListener("click", () => {plug()})


unplug()
createAllInput()