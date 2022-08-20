let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"];


const fightButton = document.getElementById("fight-button");
const stageEl = document.getElementById("stage-el");




fightButton.addEventListener("click", () => {
    let randomNumberOne = Math.floor(Math.random() * fighters.length)
    let randomNumberTwo = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = fighters[randomNumberOne] + " vs " + fighters[randomNumberTwo]
})