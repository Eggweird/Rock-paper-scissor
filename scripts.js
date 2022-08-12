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

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let computerSelection;

    if(randomNum === 1){
        computerSelection = "rock";
        //console.log(computerSelection);
    } else if(randomNum === 2){
        computerSelection = "paper";
        //console.log(computerSelection);
    } else {
        computerSelection = "scissor";
        //console.log(computerSelection);
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