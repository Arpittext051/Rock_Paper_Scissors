'use strict'
const btn=document.querySelectorAll(".pressBtn");
const div=document.querySelector(".display");
let playerChoice="";
let computerChoice="";
const current=document.querySelector(".current");
const result=document.querySelector(".result");
const total=document.querySelector(".total");
const p=document.querySelector("p");

let getComputerChoice=() =>{
    let x=Math.floor(Math.random()*3)+1;
    return x==1 ? "rock" : x==2 ? "scissors" : "paper";
}

function resultFunction(playerChoice,computerChoice){
    let result="";
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
            result = `You Wins \nYours Choice ${playerChoice} and Computer Choice Choice ${computerChoice}`;
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
            result = `You Wins \nYours Choice ${playerChoice} and Computer Choice Choice ${computerChoice}`;
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
            result = `You Wins \nYours Choice ${playerChoice} and Computer Choice Choice ${computerChoice}`;
        }
    }
    return result;
}

let computerWins=0;
let playerWins=0;

function reset()
{
    computerWins=playerWins=0;
}

btn.forEach(element => {
    element.addEventListener("click",()=>{
        playerChoice=element.textContent.toLowerCase();
        computerChoice=getComputerChoice();
        current.textContent=resultFunction(playerChoice,computerChoice);
        p.textContent="";
        if(current.textContent.includes("You Wins"))
        {
            playerWins++;
        }
        else if(current.textContent.includes("Computer Wins"))
        {
            computerWins++;
        }
        total.textContent=`ComputerWins ${computerWins}\n
        Yours Wins ${playerWins}`;
        if(computerWins==5)
        {
            p.textContent="You Lose";
            reset();
        }
        else if(playerWins==5)
        {
            p.textContent="Computer Lose";
            reset();
        }
    }) 
});










// 'use strict'
// let getComputerChoice=() =>{
//     let x=Math.floor(Math.random()*3)+1;
//     return x==1 ? "rock" : x==2 ? "scissors" : "paper";
// }


// let getPlayerSelection= () => {
//     let playerChoice= prompt("Enter Your Choice Rock,Paper,Scissors");
//     let caseSensitive= playerChoice==null ? null:playerChoice.toLowerCase();
//     while(caseSensitive==null||caseSensitive==""|| !(caseSensitive=="rock" || caseSensitive=="paper" || caseSensitive=="scissors"))
//     {
//         alert("Enter A Choice From Below");
//         playerChoice = prompt("Enter Your Choice Rock,Paper,Scissors");
//         caseSensitive = playerChoice==null?null:playerChoice.toLowerCase();
//     }
//     return caseSensitive;
// }

// let startGame = (playerChoice,computerChoice) => {
//     let result;
//     if(playerChoice==computerChoice)
//     {
//         result = `Tie Both Choose ${playerChoice}`;
//     }
//     else if(playerChoice=='rock')
//     {
//         if(computerChoice=='paper')
//         {
//             result = `Computer Wins \nComputer Choose ${computerChoice} and Yours Choice ${playerChoice}`;
//         }
//         else if(computerChoice=='scissors')
//         {
//             result = `You Wins \nYours Choice ${playerChoice} and ComputerChoice Choice ${computerChoice}`;
//         }
//     }
//     else if(playerChoice=="paper")
//     {
//         if(computerChoice=='scissors')
//         {
//             result = `Computer Wins \nComputer Choose ${computerChoice} and Yours Choice ${playerChoice}`;
//         }
//         else if(computerChoice=='rock')
//         {
//             result = `You Wins \nYours Choice ${playerChoice} and ComputerChoice Choice ${computerChoice}`;
//         }
//     }
//     else
//     {
//         if(computerChoice=='rock')
//         {
//             result = `Computer Wins \nComputer Choose ${computerChoice} and Yours Choice ${playerChoice}`;
//         }
//         else if(computerChoice=='paper')
//         {
//             result = `You Wins \nYours Choice ${playerChoice} and ComputerChoice Choice ${computerChoice}`;
//         }
//     }
//     return result;
// }

// let game = () =>{
//     let playerWins=0,computerWins=0;
//     while(playerWins!=5 && computerWins!=5)
//     {
//         let result=startGame(getPlayerSelection(),getComputerChoice());
//         if(result.includes("Computer Wins"))
//         {
//             computerWins++;
//         }
//         else if(result.includes("You Wins"))
//         {
//             playerWins++;
//         }
//         console.log(`${result}`+" "+computerWins+" "+playerWins);
//     }
//     if(playerWins>computerWins)
//     {
//         alert("You Win");
//     }
//     else
//     {
//         alert("Computer Wins");
//     }
// }

// game();