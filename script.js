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
// var list = {date:{name:[start_time, end_time, description]}}
var list2 = []


function create_task(start_time, end_time, name, disc, new_task){
  if (new_task){
    var start_time_error = start_time.length==5
    var name_error_exist = list[date_now][name]==undefined
    var end_time_error = end_time.length==5
    var name_error = name
    var time_error = Number(start_time.substring(0, 2))*60+Number(start_time.substring(3, 5))<=Number(end_time.substring(0, 2))*60+Number(end_time.substring(3, 5))
    var time_error_0 = Number(start_time.substring(0, 2))*60+Number(start_time.substring(3, 5))!=Number(end_time.substring(0, 2))*60+Number(end_time.substring(3, 5))
  } else{
    var start_time_error = 1
    var name_error_exist = 1
    var end_time_error = 1
    var name_error = 1
    var time_error = 1
    var time_error_0 = 1
  }
  let promise = new Promise(function(resolve, reject){
    if (start_time_error&&end_time_error&&name_error&&time_error&&time_error_0&&name_error_exist){
      resolve(1)
    } else{
      reject(new Error(0))
    }
  })
  promise.then(
    result => {const task = document.createElement("div")
      const task_time = document.createElement("p")
      const task_title = document.createElement("p")
      const task_cross = document.createElement("div")
      const task_redact = document.createElement("div")
      const task_clue = document.createElement("div")
      task.classList.add("task")
      task_clue.classList.add("task_clue")
      task_time.classList.add("task_time")
      task_title.classList.add("task_title")
      task_cross.classList.add("task_cross")
      task_redact.classList.add("task_redact")
      task_container.appendChild(task)
      task.appendChild(task_time)
      task.appendChild(task_clue)
      task.appendChild(task_title)
      task.appendChild(task_cross)
      task.appendChild(task_redact)
      task_cross.addEventListener("click", () => {
        anime({
          targets: task,
          opacity: 0,
          left:100,
          duration: 1200,
        }).finished.then(function(){remove_child(task)})
        delete list[date_now][name]
      })
      if (new_task){
        list[date_now][name] = [start_time, end_time, disc, task]
        list2.push(name)
        list2.forEach((nam)=>{list[date_now][nam][0]>start_time?task_container.appendChild(list[date_now][nam][3]):0})
        unplug()
      }
      task.addEventListener("mouseover", () => {task_cross.style.display=""; task_redact.style.display=""; disc!=""?task_clue.style.opacity=.5:0})
      task.addEventListener("mouseout", () => {task_cross.style.display="none"; task_redact.style.display="none"; disc!=""?task_clue.style.opacity=0:0})
      task_redact.addEventListener("click", () => {plug(); from.value=start_time;to.value=end_time;title.value=name;description.value=disc;delete list[date_now][name];remove_child(task)})
      task_cross.style.display="none"
      task_redact.style.display="none"
      task_clue.style.opacity=0
      task_clue.innerHTML=disc
      task_time.innerHTML=`${start_time} - ${end_time}`
      task_title.innerHTML=name},
    errr => {let error = ""
      !name_error_exist?error+="Поменяй название, утырок, такое уже есть. ":1
      !(start_time_error)?error+="Придурок, введи в поле начало времен хоть что-то. ":1
      !(end_time_error)?error+="Дурак, поле окончания времен должно быть полностью заполнено. ":1
      !(name_error)?error+="Ушлёпок, введи в поле названия задачи хотябы знак. ":1
      !(time_error)?error+="У тебя, бестолоч, время на задачу в минус ушло. Исправляй. ":1
      !(time_error_0)?error+="У тебя на задачу времени не капли уходит, флэш тупой. Исправляй. ":1
      alert(error)}
  )
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
      create_task(value[0], value[1], key, value[2], 0)
    }
  }
}
function remove_child(elem){
  elem.parentNode.removeChild(elem)
}

date.addEventListener("change", () => {chenge_date()})
boton.addEventListener("click", () => {create_task(from.value, to.value, title.value, description.value, 1)})
cross.addEventListener("click", () => {unplug()})
plus.addEventListener("click", () => {plug()})

var date_now = new Date()
date.valueAsDate = date_now
chenge_date()
unplug()