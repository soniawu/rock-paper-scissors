

const rps = ["rock", "paper", "scissors"];
let computerChoice = "";    // computer choice for a game
let playerChoice = "";       // player choice for a game

let computerScore = 0;  // total game score for computer
let playerScore = 0;    // total game score for player 

//const scoreBoardAll = document.querySelector("#scoreBoard > p");
const playerOptMsg = document.querySelector("#playerOptMsg");
const computerOptMsg = document.querySelector("#computerOptMsg");
const playerScoreMsg = document.querySelector("#playerScoreMsg");
const computerScoreMsg = document.querySelector("#computerScoreMsg");
const winnerMsg = document.querySelector("#winnerMsg");
const completeMsg = document.querySelector("#completeMsg");
 
// get the selection element
let rock = document.querySelector("#rockBtn");
let paper = document.querySelector("#paperBtn");
let scissors = document.querySelector("#scissorsBtn");

let fiveReach = true;


// Add event listeners for each button
// This group could be improved by calling one function
// Consider to change it later
rock.addEventListener("click", () => {
    initRound("rock");
});

paper.addEventListener("click", function() {
    initRound("paper");
});

scissors.addEventListener("click", function() {
    initRound("scissors");
});

/********************************************************/
/*  This function will get a random number 0-2 which are
    the index of rps[]. Use the number as computer's selection
*/
function getComputerChoice()
{
    let idx = Math.floor(Math.random()*3);
    return rps[idx];
}

/********************************************************/
/*
    This function cleans up score board contents
    when the 5 point reached, get ready for a new game.
*/
function initScoreBoard() {
    computerScore = 0;
    playerScore = 0;

    // Clearing all messages in scoreBoard
    // will find out if can be done all at parent node
    document.querySelector("#computerOptMsg").textContent = "";
    playerScoreMsg.textContent = ""; 
    computerScoreMsg.textContent = "";
    winnerMsg.textContent = ""; 
    completeMsg.textContent = "";
}

/********************************************************/
/* This function initializes a new round of game.
*/
function initRound(opt) {
    if (fiveReach) {
        initScoreBoard();
        fiveReach = false;
    }

    // playerChoice is from one of event listeners, passed to this function
    // computerChoice is generated here
    // after these two are confirmed, call playround to start a reound
    playerChoice = opt;
    computerChoice = getComputerChoice();
    playRound(computerChoice, playerChoice);
}

/********************************************************/
/*
    This function returns a filled image tag for the image used to show 
    what is picked for the round.
*/
function getImg(sel) {
    let img = "";
    switch (sel) {
        case "rock" : {
            img = "<img src='images/rock-2-base.png' width='30' height='30' alt='rock'>";
        }
            break;
        case "paper" : {
            img = "<img src='images/paper-2-base.png' width='30' height='30' alt='rock'>";
        }
            break;
        case "scissors" : {
            img = "<img src='images/scissors-2-base.png' width='30' height='30' alt='rock'>";
        }
            break;
        default :
    }

    return img;
}

/********************************************************/
/* 
    This function fill the text contents of player info when one
    round of game is done.
*/
function deployPlayerInfo(sel) {
    let box = document.querySelector("#playerInfo");
    box.style.backgroundColor = "#faf3e1";
    box.style.border = "thick solid #bbc26a";
    box.style.borderRadius = "6px";

    let img = getImg(sel);
    playerOptMsg.innerHTML = "Your option is : " + img;
    playerScoreMsg.innerHTML = "Your score is : " + `<span style="color:blue;font-size:2.0em"> ${playerScore}</span>`;
    }

/********************************************************/
/* 
    This function fill the text contents of computer info when one
    round of game is done.
*/
function deployComputerInfo(sel) {
    let box = document.querySelector("#computerInfo");
    box.style.backgroundColor = "#faf3e1";
    box.style.border = "thick solid #bbc26a";
    box.style.borderRadius = "p6x";

    let img = getImg(sel);
    computerOptMsg.innerHTML = "Computer's option is : " + img;
    computerScoreMsg.innerHTML = "Computer's score is : " + `<span style="color:blue;font-size:2.0em"> ${computerScore}</span>`;
}

/********************************************************/
/*  This funcction is a core function of the game.
    It takes both the player and computer selection as input,
    determins who is the winner of this round.
    update the scores and post the updated scores.
*/
function playRound(computerSelection, playerSelection)
{
   // convert all selections to lower case 
   // although the computerSelection is taken out from the 
   // array rps[], should be all lower cases, do it anyway
   let c_sel = computerSelection.toLowerCase();
   let p_sel = playerSelection.toLowerCase(); 

   // clean the opt msg from last round
   playerOptMsg.textContent = "";
   computerOptMsg.textContent = "";
   winnerMsg.textContent = "";

   // to avoid type the string, use var names for string
   let r = rps[0];  // r is "rock"
   let p = rps[1];  // p is "paper"
   let s = rps[2];  // s is "scissors"

   let winner = "";


   // start applying the rules
   // doing console.log in every case seams not
   // very convient, leave it now, later these
   // would be replaced
   switch (p_sel)
   {
    case r : switch (c_sel) {
        case r : // draw
            //console.log("Game draw this round.");
            break ;
        case p : // computer wins
            //console.log("You lose this round. Sorry!");
            winner = "COMPUTER";
            computerScore++;
            break;
        case s : // player wins
            //.log("You win this round. Congrats!");
            winner = "YOU"
            playerScore++;
            break; 
        default :
    } 
    break;

    case p : switch (c_sel) {
        case r : // player wins
            //.log("You win this round. Congrats!");
            winner = "YOU";
            playerScore++;
            break;
        case p : // draw
            //console.log("Game draw this round.");
            break ;
        case s : // computer wins
            //console.log("You lose this round. Sorry!");
            winner = "COMPUTER";
            computerScore++;
            break; 
        default :
    } 
    break;

    case s : switch (c_sel) {
        case r : // computer wins
            //console.log("You lose this round. Sorry!");
            winner = "COMPUTER";
            computerScore++;
            break;
        case p : // player wins
            //console.log("You win this round. Congrats!");
            winner = "YOU";
            playerScore++;
            break;
        case s : // draw
            //console.log("Game draw this round.");
            break ; 
        default :

    }
    break;
    default :
   }
   
   deployPlayerInfo(playerSelection);
   deployComputerInfo(computerSelection);
   

   if (winner === "") {
    winnerMsg.textContent = "It is a draw game, no winner for this round. ";
   } else {
    winnerMsg.textContent = "The winner is " + winner + " for this round";
   }
   winnerMsg.style.color = "#b3e8ca";

   // If the player or computer reaches 5 points, post message and start new game.
   if (computerScore>=5) {
    completeMsg.textContent = "Computer wins 5 rounds. Will start new games.";
    fiveReach = true;
   } else if (playerScore>=5) {
    completeMsg.textContent = "Congrats, you win 5 rounds. Will start new games";
    fiveReach = true;
   }
}
