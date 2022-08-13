/**
 * PSUEDOCODE
 *
 * --This will randomly give the computer rock/paper/scissor--
 * getComputerChoice
 *      If randomNumber equals 1
 *          computerSelection equals rock
 *          console log computerSelection
 *      Else if randomNumber equals 2
 *          computerSelection equals rock
 *          console log computerSelection
 *      Else
 *          computerSelection equals rock
 *          console log computerSelection
 *
 * */

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 9) + 1;
  let computerSelection = "";

  if (randomNum >= 7) {
    computerSelection = "rock";
    console.log("computer chose rock");
    return computerSelection;
  } else if (randomNum <= 3) {
    computerSelection = "paper";
    console.log("computer chose paper");
    return computerSelection;
  } else {
    computerSelection = "scissor";
    console.log("computer chose scissor");
    return computerSelection;
  }
}
/**
 * ---This will start a mock game to test rock paper scissor game
 *      If playerSelection equals rock AND computerSelection equals Rock
 *          console log "It is a tie!"
 *      If playerSelection equals paper AND computerSelection equals paper
 *          console log "It is a tie!"
 *      If playerSelection equals Scissor AND computerSelection equals Scissor
 *          console log "It is a tie!"
 *      If playerSelection equals rock AND computerSelection equals scissor
 *               player++
 *               console log "Player wins!"
 *      If playerSelection equals rock AND computerSelection equals paper
 *               computer++
 *               console log "Computer wins!"
 *      If playerSelection equals paper AND computerSelection equals scissor
 *              computer++
 *              console log "It is a tie!"
 *      If playerSelection equals paper AND computerSelection equals scissor
 *              computer++
 *              console log "It is a tie!"
 *
 **/
 let playerWins = "Player wins this round";
 let computerWins = "Computer wins this round";
 let draw = "It is a tie"

function playRound(playerSelection, computerSelection) {
  console.log(`Player has chosen ${playerSelection}`);
  if (
    (computerSelection === "rock" && playerSelection === "scissor") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissor" && playerSelection === "paper")
  ) {
    return computerWins;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    return computerWins;
  } else {
    return draw;
  }
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection) );
