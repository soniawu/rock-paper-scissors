

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

rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";


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


/*  This function will get a random number 0-2 which are
    the index of rps[]. Use the number as computer's selection
*/
function getComputerChoice()
{
    let idx = Math.floor(Math.random()*3);
    return rps[idx];
}

function initScoreBoard() {
    computerScore = 0;
    playerScore = 0;
    //scoreBoard.children.textContent = "";

    // Clearing all messages in scoreBoard
    // will find out if can be done all at parent node
    document.querySelector("#computerOptMsg").textContent = "";
    playerScoreMsg.textContent = ""; 
    computerScoreMsg.textContent = "";
    winnerMsg.textContent = ""; 
    completeMsg.textContent = "";
    

}

/* This function initialize a new round of game.
    1) set player's 
    to be continue
*/
function initRound(opt) {
    if (fiveReach) {
        initScoreBoard();
        fiveReach = false;
    }

    playerChoice = opt;
    computerChoice = getComputerChoice();
    playRound(computerChoice, playerChoice);
}

/*  Core function of the game.
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
   
   playerOptMsg.textContent = "Your option is : " + playerSelection;
   computerOptMsg.textContent = "Computer's option is : " + computerSelection;
   playerScoreMsg.textContent = "Your score is : " + `${playerScore}`;
   computerScoreMsg.textContent = "Computer's score is : " + `${computerScore}`;

   if (winner === "") {
    winnerMsg.textContent = "It is a draw game, no winner for this round. ";
   } else {
    winnerMsg.textContent = "The winner is " + winner + " for this round";
   }

   // If the player or computer reaches 5 points, post message and start new game.
   if (computerScore>=5) {
    completeMsg.textContent = "Computer wins 5 rounds. Will start new games.";
    fiveReach = true;
   } else if (playerScore>=5) {
    completeMsg.textContent = "Congrats, you win 5 rounds. Will start new games";
    fiveReach = true;
   }
}
