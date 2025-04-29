var hour_container = document.getElementById("hour_container")

function createHourLine() {
    for (let i = .5; i < 23; i+=.5) {
        const line = document.createElement("div")
        const textHour = document.createElement("p")
        if (i%1){
          line.classList.add("smallLine")
          textHour.classList.add("smallTextHour")
          textHour.innerHTML = i
        } else{
          line.classList.add("line")
          textHour.classList.add("textHour")
          textHour.innerHTML = i
        }
        hour_container.appendChild(line)
        line.appendChild(textHour)
    }
  }
createHourLine()