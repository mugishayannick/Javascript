let items = ["paper", "scissor", "rock"];


function getHand() {
    let randomNumber = Math.floor(Math.random() * 3);
    return items[randomNumber]
}

console.log(getHand());
