function getComputerChoice (){
    let computerOptions = [
        "rock",
        "paper",
        "scissors"
    ];
    let randomIndex = Math.floor(Math.random()*computerOptions.length);
    let computerChoice = computerOptions[randomIndex];
    return computerChoice;
}

let computerChoice = getComputerChoice();
console.log(computerChoice);
let playerInput = prompt("rock, paper, scissors?");
let playerInputAllLow = playerInput.toLowerCase();
let result = play(playerInputAllLow,computerChoice);
console.log(result);

function play (playerInp,computerCho){
    if (computerCho === playerInp){
        return ('Its a tie');
    }
    else if (
        (computerCho === "rock" && playerInp === "scissors")||
        (computerCho === "scissors" && playerInp === "paper")||
        (computerCho === "paper" && playerInp === "rock")
    ){
        return (`You lost, ${computerCho} beats ${playerInputAllLow}`);
    }
    else {return (`You won, ${playerInputAllLow} beats ${computerCho}`);}
}
    

