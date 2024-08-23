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
    let choice = prompt("rock, paper, or scissors?");
    if(choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        console.log("That's not an option!");
        return "";
    } else {
        return choice;
    }
}