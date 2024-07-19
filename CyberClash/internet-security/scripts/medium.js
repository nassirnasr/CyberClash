// Array of audio files
var arr = ["sound.mp3", "sound2.mp3", "sound3.mp3", "sound4.mp3", "sound5.mp3"];
var k = Math.floor(Math.random() * arr.length);
var audioObj = new Audio(arr[k]);

// Initial player and hacker life values
var playerLife = 15;
var hackerLife = 15;

// Messages for game outcomes
var hackerWinnerMessage = "Game Over: You got Hacked!";
var playerWinnerMessage = "You Defeated the Hacker!";

// Initial life values to reset the game
var playerStartLife = parseInt(playerLife);
var hackerStartLife = parseInt(hackerLife);

// Flags for round and card selection
var roundFinished = true;
var cardSelected = false;

// Timer variables
var timerInterval;
var timeLeft = 10;

// Initial score update
updateScores();

// Set up initial game state
document.querySelector(".game-board").classList.add("before-game");

// Card click event listeners
var allCardElements = document.querySelectorAll(".card");
for (var i = 0; i < allCardElements.length; i++) {
    var card = allCardElements[i];
    if (card.classList.contains("player-card")) {
        card.addEventListener("click", function (e) {
            if (roundFinished || timeLeft <= 0) {
                return;
            }
            cardClicked(this);
        });
    }
}

// Handle card click
function cardClicked(cardEl) {
    if (cardSelected) {
        return;
    }
    cardSelected = true;

    cardEl.classList.add("played-card");
    document.querySelector(".game-board").classList.add("card-selected");
    clearInterval(timerInterval);

    setTimeout(revealHackerPower, 250);
    setTimeout(revealPlayerPower, 250);
    setTimeout(compareCards, 1000);
}

// Reveal player power
function revealPlayerPower() {
    var playerCard = document.querySelector(".played-card");
    playerCard.classList.add("reveal-power");
}

// Reveal hacker power
function revealHackerPower() {
    var hackerCard = document.querySelector(".hacker-card");
    hackerCard.classList.add("reveal-power");
}

// Compare cards and update scores
function compareCards() {
    var playerCard = document.querySelector(".played-card");
    var playerPowerEl = playerCard.querySelector(".power");
    var hackerCard = document.querySelector(".hacker-card");
    var hackerPowerEl = hackerCard.querySelector(".power");

    var playerPower = parseInt(playerPowerEl.textContent);
    var hackerPower = parseInt(hackerPowerEl.textContent);

    var powerDifference = playerPower - hackerPower;

    if (powerDifference < 0) {
        playerLife = Math.max(0, playerLife + powerDifference);
        hackerCard.classList.add("better-card");
        playerCard.classList.add("worse-card");
        document.querySelector(".player-stats .thumbnail").classList.add("ouch");
    } else if (powerDifference > 0) {
        hackerLife = Math.max(0, hackerLife - powerDifference);
        playerCard.classList.add("better-card");
        hackerCard.classList.add("worse-card");
        document.querySelector(".hacker-stats .thumbnail").classList.add("ouch");
    } else {
        playerCard.classList.add("tie-card");
        hackerCard.classList.add("tie-card");
    }

    updateScores();

    if (playerLife <= 0) {
        gameOver("Hacker");
    } else if (hackerLife <= 0) {
        gameOver("Player");
    } else {
        roundFinished = true;
        setTimeout(playTurn, 2000);  // Automatically play next turn after 2 seconds
    }
}

// Handle game over state
function gameOver(winner) {
    audioObj.pause();
    document.querySelector(".game-board").classList.add("game-over");
    document.querySelector(".winner-section").style.display = "flex";
    document.querySelector(".winner-section").classList.remove("player-color", "hacker-color");

    if (winner == "Hacker") {
        let evilAudio = new Audio("evil-laugh.mp3");
        evilAudio.play();
        document.querySelector(".winner-message").textContent = hackerWinnerMessage;
        document.querySelector(".winner-section").classList.add("hacker-color");
    } else {
        let ohNoAudio = new Audio("Oh-no-sound-effect.mp3");
        ohNoAudio.play();
        document.querySelector(".winner-message").textContent = playerWinnerMessage;
        document.querySelector(".winner-section").classList.add("player-color");
    }

    // Update and display final scores
    document.getElementById("playerScore").textContent = playerLife;
    document.getElementById("hackerScore").textContent = hackerLife;
}

// Start the game
function startGame() {
    k = (++k) % arr.length;
    audioObj = new Audio(arr[k]);
    audioObj.loop = true;
    audioObj.play();

    document.querySelector(".game-board").classList.remove("before-game");
    document.querySelector(".game-board").classList.add("during-game");

    playTurn();
}

// Restart the game
function restartGame() {
    clearInterval(timerInterval);
    timeLeft = 10;
    updateTimerDisplay();
    document.getElementById("timer").style.display = "none";

    document.querySelector(".game-board").classList.remove("game-over", "during-game");
    document.querySelector(".game-board").classList.add("before-game");

    document.querySelector(".winner-section").style.display = "none";

    var cards = allCardElements;
    document.querySelector("button.next-turn").style.display = "none";
    document.querySelector("button.next-turn").setAttribute("disabled", "true");

    for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }

    playerLife = playerStartLife;
    hackerLife = hackerStartLife;

    roundFinished = true;
    cardSelected = false;

    updateScores();
}

// Update scores
function updateScores() {
    document.querySelector(".player-stats .life-total").textContent = playerLife;
    document.querySelector(".hacker-stats .life-total").textContent = hackerLife;

    var playerPercent = (playerLife / playerStartLife) * 100;
    document.querySelector(".player-stats .life-left").style.height = playerPercent + "%";

    var hackerPercent = (hackerLife / hackerStartLife) * 100;
    document.querySelector(".hacker-stats .life-left").style.height = hackerPercent + "%";
}

// Reveal cards
function revealCards() {
    var j = 0;
    var cardIndexes = shuffleArray([0, 1, 2]);

    var randomScenarioIndex = Math.floor(Math.random() * scenarios.length);
    var scenario = scenarios[randomScenarioIndex];
    scenarios.splice(randomScenarioIndex, 1);

    var hackerCard = scenario.hackerCard;
    var hackerCardEl = document.querySelector(".hacker-area .card");

    var playerCards = scenario.playerCards;

    for (var i = 0; i < allCardElements.length; i++) {
        var card = allCardElements[i];
        card.classList.remove("worse-card", "better-card", "played-card", "tie-card", "prepared", "reveal-power");

        if (card.classList.contains("player-card")) {
            card.querySelector(".text").textContent = playerCards[cardIndexes[j]].description;
            card.querySelector(".power").textContent = playerCards[cardIndexes[j]].power;
            j++;
        }

        setTimeout(
            (function (card, j) {
                return function () {
                    card.classList.remove("prepared");
                    card.style.display = "block";
                    card.classList.add("showCard");
                };
            })(card, i),
            (i + 1) * 200
        );
    }

    hackerCardEl.querySelector(".text").textContent = hackerCard.description;
    hackerCardEl.querySelector(".power").textContent = hackerCard.power;
}

// Update timer display
function updateTimerDisplay() {
    document.getElementById("timer").textContent = timeLeft;
}

// Shuffle an array
function shuffleArray(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}

// Play a turn
function playTurn() {
    roundFinished = false;
    cardSelected = false;

    document.querySelector(".game-board").classList.remove("card-selected");
    document.querySelector(".hacker-stats .thumbnail").classList.remove("ouch");
    document.querySelector(".player-stats .thumbnail").classList.remove("ouch");

    for (var i = 0; i < allCardElements.length; i++) {
        var card = allCardElements[i];
        card.classList.remove("showCard");
    }

    setTimeout(revealCards, 500);

    // Start timer countdown
    timeLeft = 10;
    updateTimerDisplay();
    document.getElementById("timer").style.display = "block";
    clearInterval(timerInterval);
    timerInterval = setInterval(function () {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeLeft = 0;
            updateTimerDisplay();
            if (!cardSelected) {
                playerLife = Math.max(0, playerLife - 2);
                updateScores();
                if (playerLife <= 0) {
                    gameOver("Hacker");
                } else {
                    setTimeout(playTurn, 2000);  // Automatically play next turn after 2 seconds
                }
            }  
            roundFinished = true;
        }
    }, 1000);
}
