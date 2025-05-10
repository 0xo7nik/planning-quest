const task_container = document.getElementById("task_container")
const cross = document.getElementById("cross")
const plus = document.getElementById("plus")
const create_container = document.getElementById("create_container")
const date = document.getElementById('date')
const boton = document.getElementById('boton')

function create_task(){
  const task = document.createElement("div")
  const task_time = document.createElement("p")
  const task_title = document.createElement("p")
  task.classList.add("task")
  task_time.classList.add("task_time")
  task_title.classList.add("task_title")
  task_container.appendChild(task)
  task.appendChild(task_time)
  task.appendChild(task_title)
  task_container.appendChild(plus)
}

function unplug(){
  create_container.style.display="none"
}
function plug(){
  create_container.style.display="flex"
}

boton.addEventListener("click", () => {unplug()})
cross.addEventListener("click", () => {unplug()})
plus.addEventListener("click", () => {plug()})

date.valueAsDate = new Date()
unplug()
create_task()