
let humanScore = 0;
let computerScore = 0;

addButtonListeners();


function addButtonListeners(){
    const buttons = document.querySelectorAll("button");
    buttons.forEach(function(button){
        button.addEventListener("click", function(e){
            playRound(button.textContent.toLowerCase(), getComputerChoice()); 
        });   
    });
}

function declareWinner(){
    if(humanScore === 5){
        const winnerDiv = document.createElement("div");
        winnerDiv.textContent = "Human Wins";
        resultsDiv.appendChild(winnerDiv);
    } else if(computerScore === 5){
        const winnerDiv = document.createElement("div");
        winnerDiv.textContent = "Computer Wins";
        resultsDiv.appendChild(winnerDiv);
    }
}

function playRound(humanChoice, computerChoice){
    const resultsDiv = document.querySelector("#results");
    if(humanChoice === computerChoice){
        resultsDiv.textContent = "Tie" ;
    } else if((humanChoice === "rock" && computerChoice === "scissors") 
            || (humanChoice === "paper" && computerChoice === "rock") 
            || humanChoice === "scissors" && computerChoice === "paper"){
        resultsDiv.textContent = "Human Wins";
        humanScore++;
    } else {
        resultsDiv.textContent = "Computer Wins" ;
        computerScore++;
    }
    resultsDiv.textContent += ` Human Score: ${humanScore} Coumputer Score: ${computerScore}`;
    declareWinner();
}

function getComputerChoice(){
    let randomInteger = Math.floor(Math.random() * 3);

    if(randomInteger === 0){
        return "rock";
    } else if(randomInteger === 1){
        return "paper";
    } else {
        return "scissors";
    }
}
