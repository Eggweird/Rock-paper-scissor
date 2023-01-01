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
    console.log("Computer chose rock");
    return computerSelection;
  } else if (randomNum <= 3) {
    computerSelection = "paper";
    console.log("Computer chose paper");
    return computerSelection;
  } else {
    computerSelection = "scissor";
    console.log("Computer chose scissor");
    return computerSelection;
  }
}
/**
 * ---This will start a mock game to test rock paper scissor game
 *
 * For switch statement you can do this
 * if playerSelection equals rock
 *     switch computer selection
 *        case "rock"
 *          return "tie"
 *        case "scissor"
 *          return "you have lost"
 *        case "paper"
 *           return "you have won"
 *
 * if playerSelection equals paper
 *     switch computer selection
 *        case "rock"
 *          return "you have won"
 *        case "scissor"
 *          return "you have lost"
 *        case "paper"
 *           return "tie"
 *
 * if playerSelection equals scissor
 *     switch computer selection
 *        case "rock"
 *          return "you have lost"
 *        case "scissor"
 *          return "tie"
 *        case "paper"
 *           return "you have won"
 *
 **/

function playRound(playerSelection, computerSelection) {
  console.log(`Player chose ${playerSelection}`);
  if (
    (computerSelection === "rock" && playerSelection === "scissor") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissor" && playerSelection === "paper")
  ) {
    return "Computer wins you have lost!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    return "You have won congratulations!";
  } else {
    return "It is a tie Boohoo!";
  }
}

let playerCount = 0;
let computerCount = 0;
let drawCount = 0;

// function game() {
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt(
//       "Please choose Rock, Paper, or Scissor!!"
//     ).toLowerCase();
//     let computerSelection = getComputerChoice();
//     let roundResult = playRound(playerSelection, computerSelection);
//     if (roundResult.includes("lost")) {
//       computerCount++;
//     } else if (roundResult.includes("won")) {
//       playerCount++;
//     } else {
//       drawCount++;
//     }
//     if (playerCount > computerCount) {
//       console.log(
//         `You have won and gained a point!! \n Computer Points: ${computerCount} Player points: ${playerCount} Ties: ${drawCount}`
//       );
//     } else if (playerCount < computerCount) {
//       console.log(
//         `You have lost and computer has gained a point!! \n Computer Points: ${computerCount} Player points: ${playerCount} Ties: ${drawCount}`
//       );
//     } else {
//       console.log(
//         `It is a tie and no one has gained a point!! \n Computer Points: ${computerCount} Player points: ${playerCount} Ties: ${drawCount}`
//       );
//     }
//   }
// }

game();
