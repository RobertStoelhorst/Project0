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
              // checkForWin()
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
                  // checkForWin()
            };
          player = 1;
      };
};

const reset = function() {
  alert (`Are you sure you want to "bail out"?`)
  gameArray = [" ", " ", " ", " ", " ", " ", " ", " ", " ",];
  for (let i = 0; i < gameArray.length; i++)
  $(".boxGrid").fadeOut(400).text(gameArray[i])
  $(".boxGrid").fadeIn(2500).text();
 };

 // function checkForWin() {
 //     let winner = null;
 //     winningCombos.forEach(function(combo, index) {
 //         if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
 //         });
 //
 // };



  $(".boxGrid").on('click', gamePlay);

  $("#reset-button").on('click', reset);

});
