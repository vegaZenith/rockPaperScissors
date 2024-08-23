

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    playRound(getHumanChoice(), getComputerChoice());
    
    playRound(getHumanChoice(), getComputerChoice());

    playRound(getHumanChoice(), getComputerChoice());

    playRound(getHumanChoice(), getComputerChoice());

    playRound(getHumanChoice(), getComputerChoice());

    if(humanScore > computerScore){
        return "Human Wins";
    } else if(computerScore > humanScore){
        return "Computer Wins";
    } else {
        return "Tie";
    }

    function playRound(humanChoice, computerChoice){
        if(humanChoice === computerChoice){
            console.log("Tie");
        } else if((humanChoice === "rock" && computerChoice === "scissors") 
                || (humanChoice === "paper" && computerChoice === "rock") 
                || humanChoice === "scissors" && computerChoice === "paper"){
            console.log("Human Wins");
            humanScore++;
        } else {
            console.log("Computer Wins");
            computerScore++;
        }

    }
    
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

function getHumanChoice(){
    let choice = prompt("rock, paper, or scissors?").toLowerCase();
    if(choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        console.log("That's not an option!");
        return "";
    } else {
        return choice;
    }
}

