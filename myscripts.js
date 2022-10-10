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
console.log(getComputerChoice());


    

}