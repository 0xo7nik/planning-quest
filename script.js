const task_container = document.getElementById("task_container")
const cross = document.getElementById("cross")
const plus = document.getElementById("plus")
const create_container = document.getElementById("create_container")
const description = document.getElementById("description")
const date = document.getElementById("date")
const boton = document.getElementById("boton")
const from = document.getElementById("from")
const to = document.getElementById("to")
const title = document.getElementById("title")

var list = {}
// var list = {date:{name:[start_time, end_time]}}


function create_task(start_time, end_time, name, disc){
  let start_time_error = start_time.length==5
  let end_time_error = end_time.length==5
  let name_error = name
  let time_error = Number(start_time.substring(0, 2))*60+Number(start_time.substring(3, 5))<Number(end_time.substring(0, 2))*60+Number(end_time.substring(3, 5))
  if (start_time_error&&end_time_error&&name_error&&time_error){
    const task = document.createElement("div")
    const task_time = document.createElement("p")
    const task_title = document.createElement("p")
    const task_cross = document.createElement("div")
    const task_clue = document.createElement("div")
    let desc = description.value!=""
    task.classList.add("task")
    task_time.classList.add("task_time")
    task_title.classList.add("task_title")
    task_cross.classList.add("task_cross")
    task_clue.classList.add("task_clue")
    task_container.appendChild(task)
    task.appendChild(task_time)
    task.appendChild(task_title)
    task.appendChild(task_cross)
    task.appendChild(task_clue)
    task_container.appendChild(plus)
    task_cross.addEventListener("click", () => {
      remove_child(task)
      delete list[date_now][name]
    })
    task.addEventListener("mouseover", () => {task_cross.style.display=""; desc?task_clue.style.display="":0})
    task.addEventListener("mouseout", () => {task_cross.style.display="none"; desc?task_clue.style.display="none":0})
    task_cross.style.display="none"
    task_clue.style.display="none"
    task_clue.innerHTML=disc
    task_time.innerHTML=`${start_time} - ${end_time}`
    task_title.innerHTML=name
    unplug()
    list[date_now][name] = [start_time, end_time, disc]
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
  description.value=""
}
function plug(){
  create_container.style.display="flex"
}
function chenge_date(){
  const all_tasks = document.querySelectorAll(".task")
  all_tasks.forEach((elem)=>{remove_child(elem)})
  date_now=date.valueAsDate
  if (!(date.valueAsDate in list)){
    list[date_now]={}
  } else{
    for (const [key, value] of Object.entries(list[date_now])) {
      create_task(value[0], value[1], key, value[2])
    }
  }
}
function remove_child(elem){
  elem.parentNode.removeChild(elem)
}

date.addEventListener("change", () => {chenge_date()})
boton.addEventListener("click", () => {create_task(from.value, to.value, title.value, description.value)})
cross.addEventListener("click", () => {unplug()})
plus.addEventListener("click", () => {plug()})

var date_now = new Date()
date.valueAsDate = date_now
chenge_date()
unplug()