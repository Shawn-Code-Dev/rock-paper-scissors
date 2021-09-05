const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const Result = {
    win: undefined,
    playerMove: '',
    computerMove: '',
}

const generateMessage = (result) => {
    const {win, playerMove, computerMove} = result;

    if(win === null){
        return `You played: ${playerMove}. The computer played: ${computerMove}. The result is a draw!`
    } else if(win){
        return `You played: ${playerMove}. The computer played: ${computerMove}. You win!`
    } else {
        return `You played: ${playerMove}. The computer played: ${computerMove}. You lose!`
    }
}

const playRound = (playerMove, computerMove) => {

    if ((playerMove === PAPER && computerMove === ROCK) || (playerMove === SCISSORS && computerMove === PAPER) || (playerMove === ROCK && computerMove === SCISSORS)){
        Result.win = true;
    } else if ((playerMove === PAPER && computerMove === SCISSORS) || (playerMove === SCISSORS && computerMove === ROCK) || (playerMove === ROCK && computerMove === PAPER)){
        Result.win = false;
    } else if (playerMove === computerMove){
        Result.win = null;
    }
    Result.playerMove = playerMove;
    Result.computerMove = computerMove;
    return generateMessage(Result)
}

export default playRound