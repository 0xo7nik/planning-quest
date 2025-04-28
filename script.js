var hour_container = document.getElementById("hour_container")

function createHourLine() {
    for (let i = 0; i < 23; i++) {
        const line = document.createElement("div")
        const textHour = document.createElement("p")
        line.classList.add("line")
        textHour.classList.add("textHour")
        hour_container.appendChild(line)
        line.appendChild(textHour)

        textHour.innerHTML = i+1
    }
  }
createHourLine()