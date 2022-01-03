 //let playerSelection = window.prompt("Rock, Paper, Or Scissors?");
// array of choices for computer to choose from
let selections = ['rock', 'paper', 'scissors'];
let playerSelection;
let playerScore = 0;
let computerScore = 0;

//function returns random computer selection of options from selections array
function computerPlay(){
    let compSelection = selections[Math.floor(Math.random()*selections.length)];
    return compSelection;
}

let userScore = 0;
let computerScore = 0;

let computerSelection = computerPlay();
// plays round and returns winner based on random computer selection and user input selection
function playRound(playerSelection, computerSelection){

if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
return "You Win! paper Beats rock!"}
else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
    return "You Lose, Scissors beats paper!"}
else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper"){
    return "You tied. You both Selected paper!"}

else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){
    return "You Won, rock beats Scissors!"}
else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){ 
    return "You Lose. Paper beats Rock!"}
else  if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock"){
    return "You Tied, you both selected Rock!"}

else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
    return "You Won, Scissors beats paper!"}
else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock"){
    return "You lost. Rock beats Scissors!"}
else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors"){
    return "You tied, you both selected scissors"}

    else { 
        return "invalid selection"
    }        
}

playRound(playerSelection, computerSelection)

// //score system
// let computerScore = 0;
// let playerScore = 0;
// // if player wins add playerScore ++
// // if computer wins computerScore ++



const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorButton = document.createElement("button");

document.body.append(rockButton);
document.body.append(paperButton);
document.body.append(scissorButton);


rockButton.innerHTML = "Rock";
paperButton.innerHTML = "Paper";
scissorButton.innerHTML = "Scissors";

rockButton.addEventListener("click", playerSelection = 'rock');
paperButton.addEventListener("click", playRound('paper', playerSelection = 'paper'));
scissorButton.addEventListener("click", playRound('scissor', playerSelection = 'scissors'));


