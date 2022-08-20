
const countOne = document.getElementById('count-one');
const countTwo = document.getElementById('count-Two');

let count1 = 18;
let count2 = 20;

function increment() {
    let count1 = Number(countOne.innerHTML)
    count1 += 1;
    countOne.textContent = count1;
}

function increment1() {
    let prevNum = Number(countOne.innerHTML)
    prevNum += 2;
    countOne.textContent = prevNum;    
}

function increment2() {
    let prevNum = Number(countOne.innerHTML)
    prevNum += 3;
    countOne.textContent = prevNum;  
}

function increment3() {
    let count2 = Number(countTwo.innerHTML);
    count2 += 1;
    countTwo.textContent = count2; 
}

function increment4() {
    let prevNum = Number(countTwo.innerHTML);
    prevNum += 2;
    countTwo.textContent = prevNum;
}

function increment5() {
    let prevNum = Number(countTwo.innerHTML);
    prevNum += 3;
    countTwo.textContent = prevNum;
}