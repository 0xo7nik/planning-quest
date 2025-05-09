const hour_container = document.getElementById("hour_container")
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
createAllInput()