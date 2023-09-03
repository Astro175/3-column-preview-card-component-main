let player = {
    Name: "Astro",
    chips: 193
}
let cards = []
let sum = 0
let isAlive = false;
let hasBlackJack= false;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.Name + ": $" + player.chips



function getRandomCard () {
    let randomNumber = Math.floor(Math.random()*13 + 1);
    if (randomNumber === 1) {
        return 11
    } else if(randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }  
}
function startGame() {
    isAlive = true;
    let firstCard= getRandomCard();
    let secondCard= getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame()

}

function renderGame() {
    sumEl.textContent =  "Sum: " + sum
    cardEl.textContent = "Cards: "
    for (i=0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    if (sum<=20) {
        messageEl.textContent = "Do you want to draw a new card?"
    } else if (sum===21 ) {
       messageEl.textContent = "Woohoo! You've got black Jack!"
       hasBlackJack = true;
    } else {
        messageEl.textContent = "You're out of the game!"
        isAlive = false;
        
    }
    
}

function newCard() {
    if ( isAlive===true && hasBlackJack ===false) {
        let card = getRandomCard();
        cards.push(card)
        console.log(cards)
        sum += card;
        renderGame()
    }
    
}

    

