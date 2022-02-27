    
    // Function plays 5 rounds and determines the winner.
    function game() {
        // Create the scres that will determine the overall winner.
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

