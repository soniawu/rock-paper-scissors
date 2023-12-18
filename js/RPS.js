

const rps = ["rock", "paper", "scissors"];
let computerChoice = "";     // computer choice for a game
let playerChoice = "";       // player choice for a game
let computerScore = 0;  // total game score for computer
let playerScore = 0;    // total game score for player 

/*  This function will get a random number 0-2 which are
    the index of rps[]. Use the number as computer's selection
*/
function getComputerChoice()
{
    let idx = Math.floor(Math.random()*3);
    return rps[idx];

}

/*  This function will prompt to the player for entering 
    player's selection.
*/
function getPlayerChoice()
{
    /*  prompt player to his/her choice
        for the first version, html option is not yet implemented,
        should verify if the choice is valid. If change to use html selection
        later, no need to do the verification
    */
    return undefined;  // will return player selection when real codes are in
}

function playRound(computerSelection, playerSelection)
{
    // convert all selections to lower case 
    // although the computerSelection is taken out from the 
    // array rps[], should be all lower cases, do it anyway

   let c_sel = computerSelection.toLowerCase();
   let p_sel = playerSelection.toLowerCase(); 

   // to avoid type the string, use var names for string
   let r = rps[0];  // r is "rock"
   let p = rps[1];  // p is "paper"
   let s = rps[2];  // s is "scissors"

   console.log(`Your choice is ${p_sel}  Computet's choice is ${c_sel}`);

   // start applying the rules
   // doing console.log in every case seams not
   // very convient, leave it now, later these
   // would be replaced
   switch (p_sel)
   {
    case r : switch (c_sel) {
        case r : // draw
            console.log("Game draw this round.");
            break ;
        case p : // computer wins
            console.log("You lose this round. Sorry!");
            computerScore++;
            break;
        case s : // player wins
            console.log("You win this round. Congrats!");
            playerScore++;
            break; 
        default :
    } 
    break;

    case p : switch (c_sel) {
        case r : // player wins
            console.log("You win this round. Congrats!");
            playerScore++;
            break;
        case p : // draw
            console.log("Game draw this round.");
            break ;
        case s : // computer wins
            console.log("You lose this round. Sorry!");
            computerScore++;
            break; 
        default :
    } 
    break;

    case s : switch (c_sel) {
        case r : // computer wins
            console.log("You lose this round. Sorry!");
            computerScore++;
            break;
        case p : // player wins
            console.log("You win this round. Congrats!");
            playerScore++;
            break;
        case s : // draw
            console.log("Game draw this round.");
            break ; 
        default :

    }
    break;
    default :
   }
   
}
 
    /*
    loop the following 5 times
        - assign computerChoice by calling getComputerChoice()
        - assign playerChoice by calling getPlayerChoice()
        - call playRound(computerChoice, playerChoice)
    - check computerScore and playerScore to determine the winner
    - announce the winner
    - no return for the function
    */

    
    for (let i = 1; i <= 5; i++) {
        // get player choice
        let correct = false;
        do {
            playerChoice = prompt("Enter 'rock' or 'paper' or 'scissors' for this round: ");
            let choice = playerChoice.toLowerCase();
            if ((choice === "rock") || (choice === "paper") || (choice === "scissors")) {
                correct = true; } 
                else {
                    console.log("Please enter a valid option.");
                }
        } while (!correct);
        computerChoice = getComputerChoice(); 
        playRound(computerChoice, playerChoice);
        console.log(`Current scores - You : ${playerScore}  Computer : ${computerScore}\n\n`);
    }
    

    let winner;
    if (playerScore > computerScore ) {
        winner = "YOU";
    } else 
    if (computerScore > playerScore)
    {
        winner = "COMPUTER";
    }

    console.log(`Final scores - You : ${playerScore}  Computer : ${computerScore}\n\n`);
    if (winner === undefined){
        console.log("Your score is same as computer's. No winner of this game. ");
    } else
    {
        console.log(`The winner is ${winner}!`);
    }
