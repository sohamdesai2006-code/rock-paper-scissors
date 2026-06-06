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
    //console.log("Game is Draw");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor="rgb(20, 20, 57)";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
      //  console.log("User Win");
        userScorePara.innerText=userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        //console.log("You Lose");
        compScorePara.innerText=compScore;
        // msg.innerText = "You Lose";
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
    // Show restart button smoothly (no layout shift)
    resetContainer.style.opacity = "1";
    resetContainer.style.pointerEvents = "auto";
};

const playGame = (userChoice) => {
    //console.log("User Choice = ",userChoice); 
    const compChoice = genComputerChoice();
    //console.log("Computer Choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame(); // Draw Game 
    } else{
        let userWin = true;
        if(userChoice ==="rock"){
            //scissors , paper
            userWin = compChoice==="paper"? false : true;
        }else if(userChoice === "paper"){
            //  scissor , rock;
        userWin = compChoice==="scissor" ? false : true;
        } else {// userChoice will be scissor
             // rock , paper
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice); //
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
    msg.style.backgroundColor = "rgb(20, 20, 57)";
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
