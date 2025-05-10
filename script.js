const task_container = document.getElementById("task_container")
const cross = document.getElementById("cross")
const plus = document.getElementById("plus")
const create_container = document.getElementById("create_container")
const date = document.getElementById("date")
const boton = document.getElementById("boton")
const from = document.getElementById("from")
const to = document.getElementById("to")
const title = document.getElementById("title")


function create_task(){
  let start_time_error = from.value.length==5
  let end_time_error = to.value.length==5
  let name_error = title.value
  let time_error = Number(from.value.substring(0, 2))*60+Number(from.value.substring(3, 5))<Number(to.value.substring(0, 2))*60+Number(to.value.substring(3, 5))
  if (start_time_error&&end_time_error&&name_error&&time_error){
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
    task_time.innerHTML=`${from.value} - ${to.value}`
    task_title.innerHTML=title.value
    unplug()
  } else{
    let error = ""
    !(start_time_error)?error+="Придурок введи в поле начало времен хоть что то. ":1
    !(end_time_error)?error+="Дурак поле окончания времен должно быть полностью заполнено. ":1
    !(name_error)?error+="Ушлёпок введи в поле названия задачи хотябы строчку. ":1
    !(time_error)?error+="У тебя время на задачу в минус ушло. Исправляй. ":1
    alert(error)
  }
}

function unplug(){
  create_container.style.display="none"
  from.value=""
  to.value=""
  title.value=""
}
function plug(){
  create_container.style.display="flex"
}

boton.addEventListener("click", () => {create_task()})
cross.addEventListener("click", () => {unplug()})
plus.addEventListener("click", () => {plug()})

date.valueAsDate = new Date()
unplug()