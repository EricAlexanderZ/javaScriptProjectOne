// PSEUDOCODE: 

// WE NEED TO CREATE  COUNT & GIVE IT A VALUE OF 0
// INCREMENT COUNT += 1;  / MAKE IT REUSABLE
// MAKE INCREMENT BTN FUNCTIONAL ONCLICK

// ADD FUNCTIONALITY TO SAVE BTN 
// LOG NUMBERS TO LOG PARAGRAPH 
// REST COUNT TO 0

let count = 0
let countEl = document.getElementById("count_el")
let logPara = document.getElementById("log_para")

function addOne() {
    count++
    countEl.textContent = count
}
document.getElementById("increment_btn").addEventListener("click", addOne);

function save() {
    let paraStrg = `${count} - `;
    logPara.textContent += paraStrg;
    let reset = 0
    countEl.textContent = reset;
}
document.getElementById("save_btn").addEventListener("click", save);