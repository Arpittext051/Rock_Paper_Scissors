'use strict'
let getComputerChoice=() =>{
    let x=Math.floor(Math.random()*3)+1;
    return x==1 ? "rock" : x==2 ? "scissors" : "paper";
}


let getPlayerSelection= () => {
    let playerChoice= prompt("Enter Your Choice Rock,Paper,Scissors");
    let caseSensitive= playerChoice==null ? null:playerChoice.toLowerCase();
    while(caseSensitive==null||caseSensitive==""||!(caseSensitive=="rock" || caseSensitive=="paper" || caseSensitive=="scissors"))
    {
        alert("Enter A Choice From Below");
        playerChoice = prompt("Enter Your Choice Rock,Paper,Scissors");
        caseSensitive = playerChoice==null?null:playerChoice.toLowerCase();
    }
    return caseSensitive;
}

let startGame = (playerChoice,computerChoice) => {
    let result;
    if(playerChoice==computerChoice)
    {
        result = `Tie Both Choose ${playerChoice}`;
    }
    else if(playerChoice=='rock')
    {
        if(computerChoice=='paper')
        {
            result = `Computer Wins \nComputer Choose ${computerChoice} and Yours Choice ${playerChoice}`;
        }
        else if(computerChoice=='scissors')
        {
            result = `You Wins \nYours Choice ${playerChoice} and ComputerChoice Choice ${computerChoice}`;
        }
    }
    else if(playerChoice=="paper")
    {
        if(computerChoice=='scissors')
        {
            result = `Computer Wins \nComputer Choose ${computerChoice} and Yours Choice ${playerChoice}`;
        }
        else if(computerChoice=='rock')
        {
            result = `You Wins \nYours Choice ${playerChoice} and ComputerChoice Choice ${computerChoice}`;
        }
    }
    else
    {
        if(computerChoice=='rock')
        {
            result = `Computer Wins \nComputer Choose ${computerChoice} and Yours Choice ${playerChoice}`;
        }
        else if(computerChoice=='paper')
        {
            result = `You Wins \nYours Choice ${playerChoice} and ComputerChoice Choice ${computerChoice}`;
        }
    }
    return result;
}

let game = () =>{
    let playerWins=0,computerWins=0;
    while(playerWins!=5 && computerWins!=5)
    {
        let result=startGame(getPlayerSelection(),getComputerChoice());
        if(result.includes("Computer Wins"))
        {
            computerWins++;
        }
        else if(result.includes("You Wins"))
        {
            playerWins++;
        }
        console.log(`${result}`+" "+computerWins+" "+playerWins);
    }
    if(playerWins>computerWins)
    {
        alert("You Win");
    }
    else
    {
        alert("Computer Wins");
    }
}

game();