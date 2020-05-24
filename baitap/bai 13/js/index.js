let btnStart = document.getElementById("start")
let btnEnd = document.getElementById("end")
let btnReset = document.getElementById("reset")
let timer = document.getElementById("timer")


let mins = 0;
let secs = 0;
let milisecs = 0;

function startTime() {
    if (milisecs === 100) {
        milisecs = 0;
        secs = secs + 1
    }
    if (secs === 60) {
        secs = 0;
        mins = mins + 1
    }
    if (secs < 10) {
        timer.innerHTML = "Timer: " +  mins + ":" + "0" + secs + ":" + milisecs
    }else {
        timer.innerHTML = "Timer: " + mins + ":" + secs + ":" + milisecs
    }
    
    milisecs++
    
}
let loop 
function start() {
    loop = setInterval(startTime, 10)
}

function end() {
    clearInterval(loop)
}

function reset() {
    end()
    mins = 0
    secs = 0
    milisecs = 0
    timer.innerHTML = "Timer: "+ "0" + mins + ":" + "0" + secs + ":" + '0' +  milisecs
}


