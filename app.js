
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
    //rock, paper, scissor
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const DrawGame = () => {
    msg.innerText = "Game Was Draw !!!" ;
    msg.style.backgroundcolor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose..");
        msg.innerText = `You Lost!!! ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log(userChoice);

    //generte COMPUTER CHOICE
    const compChoice = getCompChoice();
    console.log(compChoice);

    if(userChoice == compChoice)
    {
        // Draw Game
        DrawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissors
            userWin = compChoice === "paper" ? false  : true;
        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissor" ? false : true;
        } else{
            //rock, pper
            userWin = compChoice === "rock" ? false : true;
        }
        
    showWinner(userWin , compChoice, userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice ws clicked", userChoice);
        playGame(userChoice);
    });
});

