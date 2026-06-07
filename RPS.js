console.log("Hello Baccho.....\n\n");
let userScore = 0;
let compScore = 0;
let gameMode = "infinite";
let targetScore = null;
let gameActive = true;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset-btn");
const resetContainer = document.querySelector(".reset-container");

// Series Mode DOM elements
const modeBtns = document.querySelectorAll(".mode-btn");
const gameOverModal = document.querySelector("#game-over-modal");
const modalIcon = document.querySelector("#modal-icon");
const modalText = document.querySelector("#modal-text");
const modalDetails = document.querySelector("#modal-details");

// Series Mode selection event listeners
modeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modeBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        gameMode = btn.getAttribute("data-mode");
        if (gameMode === "infinite") {
            targetScore = null;
        } else {
            const seriesGames = parseInt(gameMode);
            targetScore = seriesGames === 3 ? 2 : 3;
        }
        
        resetGame();
    });
});

const genComputerChoice = () => {
    // rock, paper, scissor
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game Draw";
    msg.className = ""; // clear old outcome/animation classes
    msg.classList.add("msg-draw");
};

const triggerGameOver = (isUserWin) => {
    gameActive = false;
    
    if (isUserWin) {
        modalIcon.innerText = "🏆";
        modalText.innerText = " You Win!";
        modalText.className = "gradient-text-win";
        modalDetails.innerText = `Congratulations! You beat the Computer ${userScore} - ${compScore} in the Best of ${gameMode} series.`;
        
        // Massive confetti show
        const duration = 2.5 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.8 }
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.8 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    } else {
        modalIcon.innerText = "🤖";
        modalText.innerText = " Computer Wins!";
        modalText.className = "gradient-text-lose";
        modalDetails.innerText = `Oops! The Computer beat you ${compScore} - ${userScore} in the Best of ${gameMode} series.`;
    }
    
    gameOverModal.style.display = "flex";
    setTimeout(() => {
        gameOverModal.classList.add("show");
    }, 10);
};

const closeModal = () => {
    gameOverModal.classList.remove("show");
    setTimeout(() => {
        gameOverModal.style.display = "none";
        resetGame();
    }, 400);
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (!gameActive) return;

    msg.className = ""; // clear old outcome/animation classes
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.classList.add("msg-win");

        // Confetti Celebration for round win
        if (typeof confetti === "function") {
            confetti({
                particleCount: 80,
                spread: 60,
                origin: { y: 0.7 }
            });
        }
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.classList.add("msg-lose");

        // Tactile Shake Feedback
        msg.classList.add("shake-anim");
        setTimeout(() => {
            msg.classList.remove("shake-anim");
        }, 500);
    }
    
    // Show restart button smoothly (no layout shift)
    resetContainer.style.opacity = "1";
    resetContainer.style.pointerEvents = "auto";

    // Check if target score is reached
    if (targetScore !== null) {
        if (userScore === targetScore) {
            triggerGameOver(true);
        } else if (compScore === targetScore) {
            triggerGameOver(false);
        }
    }
};

const playGame = (userChoice) => {
    if (!gameActive) return;
    const compChoice = genComputerChoice();

    if (userChoice === compChoice) {
        drawGame(); // Draw Game 
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

function resetGame() {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
    msg.innerText = "Play Your Move";
    msg.className = ""; // clear all outcome classes
    gameActive = true;
    
    // Hide restart button smoothly (no layout shift)
    resetContainer.style.opacity = "0";
    resetContainer.style.pointerEvents = "none";
}

// ── How to Play Widget ──
const helpBtn = document.querySelector("#help-btn");
const rulesPopup = document.querySelector("#rules-popup");
const closeBtn = document.querySelector("#close-btn");

helpBtn.addEventListener("click", () => {
    const isVisible = rulesPopup.style.display === "block";
    rulesPopup.style.display = isVisible ? "none" : "block";
});

closeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent triggering helpBtn toggle
    rulesPopup.style.display = "none";
});
