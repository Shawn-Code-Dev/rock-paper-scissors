const playRound = (playerMove, computerMove) => {
    const winMessage = `Congratulations! ${playerMove} beats ${computerMove}! You win!`
    const lossMessage = `Oof, better luck next time! ${computerMove} beats ${playerMove}! You lose!`
    const drawMessage = `You both played ${playerMove}! It's a draw!`

    if ((playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'scissors' && computerMove === 'paper') || (playerMove === 'rock' && computerMove === 'scissors')){
        return winMessage
    } else if ((playerMove === 'paper' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'rock') || (playerMove === 'rock' && computerMove === 'paper')){
        return lossMessage
    } else if (playerMove === computerMove){
        return drawMessage
    }
    
}

export default playRound