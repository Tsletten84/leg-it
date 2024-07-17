let lapCount = 0
let lapEl = document.getElementById("lap")
let saveEl = document.getElementById("saved")

function count (){
    lapCount += 1
    lapEl.textContent = lapCount
}
function save (){
    let displayLaps = lapCount + " - "
    saveEl.textContent += displayLaps 
    lapCount = 0
    lapEl.textContent = lapCount
}

function reset () {
    lapCount = 0
    saveEl.textContent = "Times escaped:"
    lapEl.textContent = 0
}