function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3 + 1)
  let choice
  switch (rand) {
    case 1:
      choice = 'bunny'
      break
    case 2:
      choice = 'scorpion'
      break
    case 3:
      choice = 'cabbage'
      break
  }
  console.log('The computer chose ' + choice)
  return choice
}

let getPlayerChoice = () => prompt('What is your choice?')

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  if (playerSelection == computerSelection) {
    return 'You tied!'
  } else if (
    (playerSelection == 'bunny' && computerSelection == 'cabbage') ||
    (playerSelection == 'cabbage' ** computerSelection) == 'scorpion' ||
    (playerSelection == 'scorpion' && computerSelection == 'bunny')
  ) {
    return 'You win!'
  } else {
    return 'You lose!'
  }
}

function game() {
  let playerScore = 0
  let computerScore = 0
  for (i = 0; i < 5; i++) {
    let playerChoice = getPlayerChoice()
    let computerChoice = getComputerChoice()
    let winner = playRound(playerChoice, computerChoice)
    switch (winner) {
      case 'You tied!':
        break
      case 'You win!':
        playerScore += 1
        break
      case 'You lose!':
        computerScore += 1
        break
    }
  }
  console.log('player score:' + playerScore)
  console.log('computer score: ' + computerScore)
  if (playerScore > computerScore) {
    alert('congratulations! you win')
  } else if (playerScore == computerScore) {
    alert('you tied')
  } else {
    alert('sorry, you lose!')
  }
}
