//set variable for playerScore to 0;
let playerScore = 0;
//set variable for computerScore to 0;
let computerScore = 0;
//set variable for round winner to empty string;
let roundWinner = "";
//set a variable for the wiiningScore to 5;
const winningScore = 3;

//create a function that handles the user selection and decides who wins each round

function handleUserSelection(playerSelection){
    
    //defining an array with the elements of the game and let computer choose a random one
    let options = ["rock", "paper", "scissors"]
    computerSelection = options[Math.floor(Math.random()*options.length)];

    //calling the updateSelection function and passing each selection to update the UI with both selecetions
    updateSelection(playerSelection, computerSelection);

    //describe the game logic to determin who wins the round
    if (playerSelection === computerSelection){
        console.log("it's a tie")
        roundWinner = "tie";
    }else if(
            (playerSelection === "rock" && computerSelection ==="scissors") ||
            (playerSelection === "paper" && computerSelection ==="rock") ||
            (playerSelection ==="scissors" && computerSelection ==="paper")
    ){
        console.log("You win!");
        playerScore++;
        roundWinner = "player"
    }else{
        console.log("Computer Wins!");
        computerScore++;
        roundWinner = "computer";
    }

    //calling the updateScore function to update the UI with the live score
    updateScore();     
    /*checking if any of the players reached the maximum points by calling the  isGameOver funtion and checking if is true or not, 
    depending of the status of the score the game carry on or enter the endGame mode and displays the winner
    */
    if(isGameOver()){
        setFinalMessage();
        openEndGameModal();
    } 
   
}

//add Event Listener for each button to store the userSelection and calling the specific function to handle the game logic
document.getElementById("rockBtn").addEventListener("click", function(){
    handleUserSelection("rock");
});
document.getElementById("paperBtn").addEventListener("click", function(){
    handleUserSelection("paper");
});
document.getElementById("scissorsBtn").addEventListener("click", function(){
    handleUserSelection("scissors");
})

//add Event Listener to the restart button and applying the reset Game function
document.getElementById("restartBtn").addEventListener("click", resetGame);


/* create a function that takes as arguments player selection and computer selection and updates the 
   HTML element*/

function updateSelection(playerSelection, computerSelection){
    switch(playerSelection){
        case "rock":
            document.getElementById("playerSign").innerHTML = "✊";
            break;
        case "paper":
            document.getElementById("playerSign").innerHTML = "✋";
            break;
        case "scissors":
            document.getElementById("playerSign").innerHTML = "✌️" ;   
            break;
    }
    switch(computerSelection){
        case "rock":
            document.getElementById("computerSign").innerHTML = "✊";
            break;
        case "paper":
            document.getElementById("computerSign").innerHTML = "✋";
            break;
        case "scissors":
            document.getElementById("computerSign").innerHTML = "✌️" ; 
            break;
    }
}

//create a function which updates the score on the page

function updateScore(){
    if(roundWinner === "tie"){
        document.getElementById("scoreInfo").innerHTML = "It's a tie!"
    }else if(roundWinner === "player"){
        document.getElementById("scoreInfo").innerHTML = "You win!"
    }else{
        document.getElementById("scoreInfo").innerHTML = "You lose!"
    }

    document.getElementById("playerScore").innerHTML = `Player: ${playerScore}`;
    document.getElementById("computerScore").innerHTML = `Computer: ${computerScore}`;
}

//create a function that checks if any o players reached the 3 points and the game is over
function isGameOver(){
    return playerScore === winningScore || computerScore === winningScore;

}

//create a function to enter into end game Mod

function openEndGameModal(){
    document.getElementById("endGameModal").classList.add("active");
    document.getElementById("overlay").classList.add("display")
}

//create a function to exit the end game mod

function closeEndGameModal(){
    document.getElementById("endGameModal").classList.remove("active");
    document.getElementById("overlay").classList.remove("display");
}   

//create a function which updates the final message and displays who won the game 

function setFinalMessage(){
    if(playerScore > computerScore){
        document.getElementById("endGameMsg").innerHTML = "You won!"
    }else{
        document.getElementById("endGameMsg").innerHTML = "You lost..."
    }
 }


// create a function which resets the game to 0 

function resetGame(){
    closeEndGameModal();
    playerScore = 0;
    computerScore = 0;
    document.getElementById("scoreInfo").innerHTML = "Make you selection"
    document.getElementById("playerSign").innerHTML = "?";
    document.getElementById("computerSign").innerHTML = '?';
    document.getElementById("playerScore").innerHTML = "Player: 0";
    document.getElementById("computerScore").innerHTML = "Computer: 0";
}


