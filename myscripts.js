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
let playerInput;
let computerChoice;

function play (playerInp, computerCho){
    if (computerCho === playerInp){
        return ('Tie');
    }
    else if (
        (computerCho === "rock" && playerInp === "scissors")||
        (computerCho === "scissors" && playerInp === "paper")||
        (computerCho === "paper" && playerInp === "rock")
    ){
        return (`Lose`);
    }
    else {return (`Win`);}
}
function game(playerInp, computerCho){
    let tiecounter = 0;
    let wincounter = 0;
    let losecounter = 0;
    
    for (let i = 0; i < 5; i++){
    playerInput = prompt("rock, paper, scissors?").toLowerCase();
    if (playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors"){
    console.log("enter valid move");
    break;
    }
    computerChoice = getComputerChoice();
    
    let result = play(playerInput, computerChoice);
        
    if (result === `Tie`){
        tiecounter += 1;
        console.log(`Tie, you played ${playerInput} and computer played ${computerChoice}`);
    }
    else if (result === `Lose`){
        losecounter += 1;
        console.log(`Loss, you played ${playerInput} and computer played ${computerChoice}`);
    }    
    else {wincounter += 1;
        console.log(`Win, you played ${playerInput} and computer played ${computerChoice}`);
    }      
    }
    
    let finalResult = `You won ${wincounter}, lost ${losecounter} and tied ${tiecounter}.`;
    return finalResult;
}
 console.log(game());
