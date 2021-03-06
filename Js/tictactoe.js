$(document).ready(function() {

let player = 1;
const playerX = "X", playerO = "O";
let xScore = 0, oScore = 0;
let xPoints = 0, oPoints = 0;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

let gameArray = [" ", " ", " ", " ", " ", " ", " ", " ", " ",];

  const gamePlay = function () {
        if (player == 1) {
          if (gameArray[this.id] === "X" || gameArray[this.id] === "O"){
            return false;
          } else {
            $("h2").text("Its O's turn")
            gameArray[this.id] = playerX
              for (let i = 0; i < gameArray.length; i++) {
                $("#" + i).text(gameArray[i]);
              }
            } 
            player++; 
            checkForWin()
        } else if (player == 2) {
            if (gameArray[this.id] === "X" || gameArray[this.id] === "O"){
              return false;
            } else {
              $("h2").text("Its X's turn")
               gameArray[this.id] = playerO
                for (let i = 0; i < gameArray.length; i++) {
                 $("#" + i).text(gameArray[i]);
                }
            }
            player = 1;
            checkForWin()
      };
};

const reset = function () {
  gameArray = [" ", " ", " ", " ", " ", " ", " ", " ", " ",];
  for (let i = 1; i < gameArray.length + 1; i++) 
    $(".boxGrid").fadeOut(400).text(gameArray[i])
    $(".boxGrid").fadeIn(2500).text("");
    $(".boxGrid").on('click', gamePlay);
    player = 1, oScore = 0, xScore = 0;
    $("h2").text("Its X's turn")
 };

 const checkForWin = function () {
  let winner = null;
   winningCombos.forEach(function(combo) {
        if (gameArray[combo[0]] && gameArray[combo[0]] === gameArray[combo[1]] && gameArray[combo[0]] === gameArray[combo[2]]) winner = gameArray[combo[0]];
           if (winner === "X") {
            $("h2").text("X WINS THE ROUND")
            $(".boxGrid").unbind('click', gamePlay);
            // scoreCounter(winner); // This was the bug for the scoreboard I was calling the scoreCounter() function every time the checkForWin() ran which incorectly calculated and updated score
           } else if (winner === "O") {
             $("h2").text("O WINS THE ROUND")
             $(".boxGrid").unbind('click', gamePlay);
            // scoreCounter(winner); // This was the bug for the scoreboard I was calling the scoreCounter() function every time the checkForWin() ran which incorectly calculated and updated score
           } else if (xScore === 5 || oScore === 5) {
            $("h2").text("! DRAW")
            $(".boxGrid").unbind('click', gamePlay);
           } else {
              return false;
           }
        });
        scoreCounter(winner); // This is where scoreCounter needs to run outside the condition body of checkForWin()
      };

  const scoreCounter = function (winner) {
    if (winner === playerX) {
      xPoints++;
      $("#scoreX").text("X Game Wins" + " " + (xPoints));
    } else if (winner === playerO) {
      oPoints++;
      $("#scoreO").text("O Game Wins" + " " + (oPoints));
    }
  };


  $(".boxGrid").on('click', gamePlay);
  $("#reset-button").on('click', reset);
  
});
