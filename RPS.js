console.log("Hello Baccho.....\n\n");
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset-btn");
const resetContainer = document.querySelector(".reset-container");



const genComputerChoice = () => {
    // rock, paper, scissor
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    /* generates random number from 0-1 but if we multiply it by n. i.e Math.random() * n , then we will get a range from 0-(n-1). Example if we multiply it by 3 then range will be 0-2 and imp to note that these no's. will be in floating values.
    If we want a integer no. then , 
    Math.floor(Math.random()) will give integer no. (i.e before decimal no. bcoz we use floor() ).
    Math.floor(Math.random() * 10) range will be 0-9 with interger number. 
    */
    return options[randIdx];
 };

const drawGame = () => {
    msg.innerText = "Game Draw";
    msg.className = ""; // clear old outcome/animation classes
    msg.classList.add("msg-draw");
};

const showWinner = (userWin,userChoice,compChoice) =>{
    msg.className = ""; // clear old outcome/animation classes
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.classList.add("msg-win");
        
        // Confetti Celebration
        if (typeof confetti === "function") {
            confetti({
                particleCount: 80,
                spread: 60,
                origin: { y: 0.7 }
            });
        }
    }else{
        compScore++;
        compScorePara.innerText=compScore;
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
};

const playGame = (userChoice) => {
    const compChoice = genComputerChoice();

    if(userChoice === compChoice){
        drawGame(); // Draw Game 
    } else{
        let userWin = true;
        if(userChoice ==="rock"){
            userWin = compChoice==="paper"? false : true;
        }else if(userChoice === "paper"){
        userWin = compChoice==="scissor" ? false : true;
        } else {
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
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
