const date = new Date()
const time = document.querySelector(".timer")

let start
let second = 0 

const countdown = () => {

}

document.addEventListener("click", (event) => {
    const element = event.target

    const formatDate = (second) => {
        const date = new Date(second * 1000)
        const option = {
            hour12: false,
            timeZone: "UCT"
        }
        return date.toLocaleTimeString("pt-BR", option)
    }
    if(element.classList.contains("start")){
        clearInterval(start)
        start = setInterval (() => {
            second++
            time.innerText = formatDate(second)
        },1000)
    }
    if(element.classList.contains("pause")) {
        clearInterval(start)
    }
    if(element.classList.contains("reset")) {
        clearInterval(start)
        second = 0
        time.innerText = "00:00:00"
    }
})
countdown