///////////////////////// ROCK, PAPER, SCISSORS ///////////////////
// Our First Interactive Game
/*let playGame = confirm("We shall play Rock, Paper or Scissors")
if (playGame) {
    //play
    let playerChoice = prompt("Please anter rock, paper or scissors.")
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (
            playerOne === 'rock' || 
            playerOne === 'paper' || 
            playerOne === 'scissors'
        ) {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = 
                computerChoice === 1
                ? 'rock'
                : computerChoice === 2
                ? 'paper'
                : 'scissors';

            let result =
            playerOne === computer
                ? "tie game"
                : playerOne === 'rock' && computer === 'paper'
                ? `playerOne ${playerOne}\nComputer: ${computer}\n
                Computer Wins!`
                : playerOne === 'paper' && computer === 'scissors'
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
                : playerOne === 'scissors' && computer === 'rock'
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
                : `playerOne: ${playerOne}\ncomputer: ${computer}\nplayerOne Wins!`
            alert(result)
            let playAgain = confirm("Play Again?")
            playAgain ? location.reload() : alert("Thanks for playing");
        } else {
            alert("You didn't enter rock, paper or scissors")
        }
    } else {
        alert("I guess you changed your mind. Maybe next time")
    }
} else {
    alert("Ok maybe nex time")
}*/
 
///////////////////////// Refactor the GAME! ///////////////////
// Rock, Paper, Scissors: Refactored with While Loop and Array
/* let playGame = confirm("Shall we play Rock, Paper or Scissors")
if (playGame) {
    //play
    while (playGame) {
        const playerChoice = prompt("Please anter rock, paper or scissors.")
        if (playerChoice || playerChoice === "") {
            const playerOne = playerChoice.trim().toLowerCase();
            if (
                playerOne === 'rock' || 
                playerOne === 'paper' || 
                playerOne === 'scissors'
            ) {
                const computerChoice = Math.floor(Math.random() * 3);
                const rpsArray = ["rock", "paper", "scissors"];
                const computer = rpsArray[computerChoice]
    
                const result =
                    playerOne === computer
                        ? "tie game"
                        : playerOne === 'rock' && computer === 'paper'
                        ? `playerOne ${playerOne}\nComputer: ${computer}\nComputer Wins!`
                        : playerOne === 'paper' && computer === 'scissors'
                        ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
                        : playerOne === 'scissors' && computer === 'rock'
                        ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
                        : `playerOne: ${playerOne}\ncomputer: ${computer}\nplayerOne Wins!`
                alert(result);
                playGame = confirm("Play Again?");
                if (!playGame) alert("Ok, Thanks for playing.");
                continue;
            } else {
                alert("You didn't enter rock, paper or scissors.");
                continue;
            }
        } else {
            alert("I guess you changed your mind. Maybe next time.");
            break;
        }
    }
} else {
    alert("Ok maybe nex time.");
} */
 
///////////////////////// Refactor the GAME! ///////////////////
// Rock, Paper, Scissors: Refactored with Functions
const initGame = () => {
    const startGame = confirm("Shall we play Rock, Paper or Scissors");
    startGame ? playGame() : alert("Ok, maybe next time.");
};

// Game flow function
const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === "") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decidedNotTopPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice) {
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, scissors.");
};

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

const decidedNotTopPlay = () => {
    alert("I guess you changed your mind. Maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
    if (
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"
    ) {
        return playerChoice;
    } else {
        return false;
    }
};

const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors.");
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
  const winner = 
  player === computer
  ? "tie game"
  : player === 'rock' && computer === 'paper'
  ? `player ${player}\nComputer: ${computer}\nComputer Wins!`
  : player === 'paper' && computer === 'scissors'
  ? `player: ${player}\nComputer: ${computer}\nComputer Wins!`
  : player === 'scissors' && computer === 'rock'
  ? `player: ${player}\nComputer: ${computer}\nComputer Wins!`
  : `player: ${player}\ncomputer: ${computer}\nplayer Wins!`

  return winner;
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("Play Again?")
};

const thanksForPlaying = () => {
    alert("Ok, Thanks for playing.");
};

initGame





