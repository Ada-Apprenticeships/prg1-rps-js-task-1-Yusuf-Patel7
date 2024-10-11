function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "draw";
  }

  const winConditions = {
    rock: ["scissors", "lizard"],
    scissors: ["paper", "lizard"],
    paper: ["rock", "spock"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"] 
  };

  if (winConditions[player1].includes(player2)) {
    return "player1";
  }

  return "player2";
}









// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}