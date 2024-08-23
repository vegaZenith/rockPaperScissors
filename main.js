let humanScore = 0;
let computerScore = 0;

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