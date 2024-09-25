function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "draw";
  } else if (
    (player1 === "rock" && player2 === "scissors")
    || (player1 === "scissors" && player2 === "paper")
    || player1 === "paper" && player2 === "rock"
    || player1 === "rock" && player2 === "lizard"
    || player1 === "scissors" && player2 === "lizard"
    || player1 === "lizard" && player2 === "paper"
    || player1 === "spock" && player2 === "rock"
    || player1 === "spock" && player2 === "scissors"
    || player1 === "lizard" && player2 === "spock"
    || player1 === "paper" && player2 === "spock"
  ) {
    return "player1";
  } 
  return "player2";
  
}








// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}