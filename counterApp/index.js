
const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
let count = 0


function increment() {
    count += 1
    countEl.innerHTML = count
}

function save() {

    let countStr = count + " - "
    saveEl.textContent += countStr
}