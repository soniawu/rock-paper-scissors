const rps = ["rock", "paper", "scissors"];
let computerChoice;     // computer choice for a game
let playerChoice;       // player choice for a game
let computerScore = 0;  // total game score for computer
let playerScore = 0;    // total game score for player 

/*  This function will get a random number 0-2 which are
    the index of rps[]. Use the number as computer's selection
*/
function getComputerChoice()
{

    // generate random number 0-2
    return undefined;  // this should be changed when real codes are in
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
    /*
    -  convert computerSelection and playerSelecction to all upper case
    - ????????
    */
}


// This fuction is to manage play the game 5 rounds
function game()
{
    /*
    loop the following 5 times
        - assign computerChoice by calling getComputerChoice()
        - assign playerChoice by calling getPlayerChoice()
        - call playRound(computerChoice, playerChoice)
    - check computerScore and playerScore to determine the winner
    - announce the winner
    - no return for the function
    */
}

// call game()

