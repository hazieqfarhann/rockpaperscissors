console.log('Hello There. Welcome to the game!');
console.log('This is a game of rock paper scissors. You will be playing against the computer.');
console.log('You can choose rock, paper, or scissors. The computer will also choose one of these options.');
console.log('The winner will be decided based on the following rules:');
console.log('Rock beats scissors');
console.log('Scissors beats paper');
console.log('Paper beats rock');
console.log('Good luck!');
console.log(' ');

function playRound() {
  let playerSelectionNum = prompt('Please enter your choice: 1 = rock, 2 = paper, or 3 = scissors');
  let playerSelection;

  if (playerSelectionNum === '1') {
    playerSelection = 'rock';
  } else if (playerSelectionNum === '2') {
    playerSelection = 'paper';
  } else if (playerSelectionNum === '3') {
    playerSelection = 'scissors';
  } else {
    console.log('Invalid input. Please try again.');
    return null;
  }

  console.log('You chose: ' + playerSelection);

  let computerSelection = Math.floor(Math.random() * 3) + 1;
  let computerSelectionString;

  if (computerSelection === 1) {
    computerSelectionString = 'rock';
  } else if (computerSelection === 2) {
    computerSelectionString = 'paper';
  } else {
    computerSelectionString = 'scissors';
  }

  console.log('The computer chose: ' + computerSelectionString);

  if (playerSelection === 'rock' && computerSelectionString === 'scissors' ||
      playerSelection === 'scissors' && computerSelectionString === 'paper' ||
      playerSelection === 'paper' && computerSelectionString === 'rock') {
    console.log('You win! ' + playerSelection + ' beats ' + computerSelectionString + '.');
    return 'player';
  } else if (playerSelection === computerSelectionString) {
    console.log('It\'s a tie!');
    return 'tie';
  } else {
    console.log('You lose! ' + computerSelectionString + ' beats ' + playerSelection + '.');
    return 'computer';
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    let result = playRound();
    if (result === 'player') {
      playerScore++;
    } else if (result === 'computer') {
      computerScore++;
    }
    console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
    console.log(' ');
  }

  if (playerScore > computerScore) {
    console.log('Congratulations! You won the game.');
  } else if (playerScore < computerScore) {
    console.log('Sorry, you lost the game. Better luck next time.');
  } else {
    console.log('The game is a tie!');
  }
}

game();