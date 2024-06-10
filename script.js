const timer = document.getElementById("timer");
const rootBtn = document.getElementById("btn-container");
let minutes = 0;
let hours = 0;
let seconds = 0;
let inetrvalId;

rootBtn.addEventListener("click", (e) => {
    if (e.target.value === "start") {
      inetrvalId=  setInterval(function () {
            seconds++;
            if (seconds > 59) {
                seconds =0 
                    minutes++
                if (minutes > 59) {
                    minutes = 0
                    hours++
                }
            }
            timer.innerText = `${hours < 10 ? `0${hours}` : hours}  :   ${minutes < 10 ? `0${minutes}` : minutes}   :   ${seconds < 10 ? `0${seconds}` : seconds}`
        }, 1000)

    }

    if(e.target.value==="stop"){
        clearInterval(inetrvalId)
    }

    if(e.target.value ==="reset"){
        seconds = minutes = hours =0
        clearInterval(inetrvalId)
        timer.innerText = `00 : 00 : 00`
    }
})
