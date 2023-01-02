const buttons = document.querySelectorAll(".btn");
const restartButton = document.querySelector(".btn2");
let playerScore = 0;
let computerScore = 0;

function restartGame(playerSelection) {
  if (playerSelection === "restart") {
    window.location.reload();
  }
}

function disableButtons() {
  buttons.forEach((elements) => {
    elements.disabled = true;
  });
}
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 9) + 1;
  let computerSelection = "";

  if (randomNum >= 7) {
    computerSelection = "rock";
    return computerSelection;
  } else if (randomNum <= 3) {
    computerSelection = "paper";
    return computerSelection;
  } else {
    computerSelection = "scissor";
    return computerSelection;
  }
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let result = "";

  if (
    (computerSelection === "rock" && playerSelection === "scissor") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissor" && playerSelection === "paper")
  ) {
    computerScore += 1;

    result =
      "<br>Computer won this round <br><br>" +
      "Score: <br>Computer: " +
      computerScore +
      " Player: " +
      playerScore +
      "<br> <br>Player chose: " +
      playerSelection +
      "<br>Computer chose: " +
      computerSelection;

    console.log("computer wins");

    if (computerScore == 5) {
      disableButtons();

      result =
        "<br>Computer won 5 rounds and won the match! Please press restart to start the game again.<br><br>" +
        "Score: <br>Computer: " +
        computerScore +
        " Player: " +
        playerScore +
        "<br> <br>Player chose: " +
        playerSelection +
        "<br>Computer chose: " +
        computerSelection;
    }
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    playerScore += 1;

    result =
      "<br>Player won this round <br><br>" +
      "Score: <br>Computer: " +
      computerScore +
      " Player: " +
      playerScore +
      "<br> <br>Player chose: " +
      playerSelection +
      "<br>Computer chose: " +
      computerSelection;

    console.log("computer loses");

    if (playerScore == 5) {
      disableButtons();

      result =
        "<br>Player won 5 rounds and won the match! Please press restart to start the game again.<br><br>" +
        "Score: <br>Computer: " +
        computerScore +
        " Player: " +
        playerScore +
        "<br> <br>Player chose: " +
        playerSelection +
        "<br>Computer chose: " +
        computerSelection;
    }
  } else {
    result =
      "<br>It is a tie <br><br>" +
      "Score: <br>Computer: " +
      computerScore +
      " Player: " +
      playerScore +
      "<br> <br>Player chose: " +
      playerSelection +
      "<br>Computer chose: " +
      computerSelection;

    console.log("tie");
  }

  document.getElementById("result").innerHTML = result;
  return;
}

restartButton.addEventListener("click", () => {
  restartGame("restart");
});
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});
