$(document).ready(function() {

let player = 1;
const playerX = "X";
const playerO = "O";
let win;

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

  const gamePlay = function() {
    // mark move function for player X or player O
        if (player == 1) {
          if (gameArray[this.id] === "X" || gameArray[this.id] === "O"){
            return false;
          }
            $("h2").text("Its O's turn")
            gameArray[this.id] = playerX
               for (let i = 0; i < gameArray.length; i++) {
                $("#" + i).text(gameArray[i]);
              checkForWin()
            };
          let changeTurn = player++;

        } else if (player == 2) {
            if (gameArray[this.id] === "X" || gameArray[this.id] === "O"){
              return false;
            }
                $("h2").text("Its X's turn")
                 gameArray[this.id] = playerO
                  for (let i = 0; i < gameArray.length; i++) {
                   $("#" + i).text(gameArray[i]);
                  checkForWin()
            };
          player = 1;
      };
};

const reset = function() {
  gameArray = [" ", " ", " ", " ", " ", " ", " ", " ", " ",];
  for (let i = 0; i < gameArray.length; i++)
  $(".boxGrid").fadeOut(400).text(gameArray[i])
  $(".boxGrid").fadeIn(2500).text("");
  $(".boxGrid").on('click', gamePlay);
  player = 1;
  $("h2").text("Its X's turn")
 };

 function checkForWin() {
  let winner = null;
  const combo = winningCombos;
   winningCombos.forEach(function(combo, index) {
        if (gameArray[combo[0]] && gameArray[combo[0]] ===       gameArray[combo[1]] && gameArray[combo[0]] === gameArray[combo[2]]) winner = gameArray[combo[0]];
           if (winner === "X") {
            $("h2").text("X WINS THE ROUND")
             $(".boxGrid").unbind('click', gamePlay);
           }
            else if (winner === "O") {
             $("h2").text("O WINS THE ROUND")
              $(".boxGrid").unbind('click', gamePlay);
           }
        });
      };
  $(".boxGrid").on('click', gamePlay);
  $("#reset-button").on('click', reset);
});
