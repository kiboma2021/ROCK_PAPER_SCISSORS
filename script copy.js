// Function will randomly return rock, paper, or scissors as a string.
function computerPlay() {
    // create a random number between 0-3
    let i = Math.floor(Math.random() * 3);
    let returnValue = "";
    // if 0, it's rock
    if (i === 0) {
        returnValue = "rock";
    }
    // if 1 it's paper
    else if (i === 1) {
        returnValue = "paper";
    }
    // if 2 (or 3) it's scissors
    else {
        returnValue = "scissors";
    }
    // return the selection via a string
    return returnValue;
}

// Function will get user input and sanatize.
function userPlay() {
    // Ask for, and return user selection.
    // Note: we also force entries to lower case to make it case insensitive.
    return userSelection = prompt("Please choose rock, paper, or scissors.", "rock").toLowerCase();
}

// Function will play a single round of rock, paper, scissors. Requires user input. 
function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection === computerSelection) {
        result = "tied";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            result = "lost"
        }
        else if (computerSelection === "scissors") {
            result = "won"
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            result = "lost"
        }
        else if (computerSelection === "rock") {
            result = "won"
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "lost"
        }
        else if (computerSelection === "paper") {
            result = "won"
        }
    }

        // check result
        if (result === "tied") {
            return [result, `You both have chosen ${playerSelection}! It's a tie.`];
        }
        else if (result === "lost") {
            return [result, `You lose! ${computerSelection} beats ${playerSelection}.`];
        }
        else if (result === "won") {
            return [result, `You win! ${playerSelection} beats ${computerSelection}.`];
        }
    }
    /*
    // Function plays 5 rounds and determines the winner.
    function game() {
        // Create the scores that will determine the overall winner.
        let roundResult, won = 0, lost = 0, tied = 0;
        // for 5 games, play.
        for (i = 0; i < 5; i++) {
            // Play game and store results. 
            roundResult = playRound(userPlay(), computerPlay());
            // note as win/loss/tie
            console.log(roundResult[1]);
            if (roundResult[0] == "tied") {
                tied += 1;
            }
            else if (roundResult[0] == "won") {
                won += 1;
            }
            else if (roundResult[0] == "lost") {
                lost += 1;
            }
        }
        // Share results.
        console.log(`Wins: ${won} Losses: ${lost} Ties: ${tied}`)
        // Determine if player won
        if (won > lost) {
            console.log(`You've won!`);
        }
        else if (won < lost) {
            console.log(`You've lost!`);
        }
        else if (won == lost) {
            console.log(`You have tied!`);
        }
    }
    //game();
    */
    
    let won = 0;
    let lost = 0;
    let tied = 0;
    let games = 5;
    
    function counters(result) {
        // Increase the appropriate values, decrese games.
        games = games - 1;
        console.log(games);
    
        if (result == 'won') {
            won = 1 + won;
        }
        else if (result == 'lost') {
            lost = 1 + lost;
        }
        else if (result == 'tied') {
            tied = 1 + tied;
        }
    
        updateResults();
    
    
    
        if (games == 0) {
            // Declare winner
            if (won > lost) {
                document.getElementById('winner').textContent = "You have won the set!";
            }
            else if (lost > won) {
                document.getElementById('winner').textContent = "You have lost the set!";
            }
            else {
                document.getElementById('winner').textContent = "You have tied the set!";
            }
            clearPoints();
        }
    
        return null;
    }
    function clearPoints() {
        won = 0;
        lost = 0;
        tied = 0;
        games = 5;
    
        return null;
    }
    function updateResults() {
        document.getElementById('winner').textContent = "";
        document.getElementById('won').textContent = `Won: ${won}`;
        document.getElementById('lost').textContent = `Lost: ${lost}`;
        document.getElementById('tied').textContent = `Tied: ${tied}`;
    }
    
    // If element with ID of rock is selected, do event. 
    document.getElementById("rock").addEventListener("click", function () {
        const playerSelection = 'rock';
        const result = playRound(playerSelection, computerPlay());
        console.log(result);
        document.getElementById("message").textContent = result[1];
        counters(result[0]);
    });
    document.getElementById("paper").addEventListener("click", function () {
        const playerSelection = 'paper';
        const result = playRound(playerSelection, computerPlay());
        console.log(result);
        document.getElementById("message").textContent = result[1];
        counters(result[0]);
    });
    document.getElementById("scissors").addEventListener("click", function () {
        const playerSelection = 'scissors';
        const result = playRound(playerSelection, computerPlay());
        console.log(result);
        document.getElementById("message").textContent = result[1];
        counters(result[0]);
    });