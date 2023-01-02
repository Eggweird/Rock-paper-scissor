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
