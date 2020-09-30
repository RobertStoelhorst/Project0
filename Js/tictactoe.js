console.log("is this working");

$(document).ready(function() {

let player = 1;
const playerX = "X";
const playerO = "O";

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
      $("h2").text("Its O's turn")
    gameArray[this.id] = playerX;
    for (let i = 0; i < gameArray.length; i++) {
    $("#" + i).text(gameArray[i]);
  // } if $("div#0").text("X") || $("div#0").text("O") {
  //     return false;
  //   }
      // console.log($("#" + i))
      console.log(gameArray);
    };
       let changeTurn = player++;
    } else if (player == 2) {
       $("h2").text("Its X's turn")
     gameArray[this.id] = playerO;
     for (let i = 0; i < gameArray.length; i++) {
     $("#" + i).text(gameArray[i]);
      // } if $(".boxGrid").text() = "X" || $("boxGrid").text() = "O" {
      //     return false;
      //   }
     };
     player = 1;
     // checkForWin()
   };
};

const reset = function() {
  alert (`Are you sure you want to "bail out"?`)
  gameArray = [" ", " ", " ", " ", " ", " ", " ", " ", " ",];
  for (let i = 0; i < gameArray.length; i++) {
  const a = $("#" + i).text(gameArray[i]);
  };
};


  // const checkForWin = function() {
  //   if (winningCombos === i)
  //   console.log(`you win`)
  // }


  // $(".boxGrid").on("click", function() {
  //   const $cellChoice = $(this);
  //   if ($cellChoice.text === "X") {
  //     return false;
  //   } else if ($cellChoice.text === "O") {
  //     return false;


  $(".boxGrid").on('click', gamePlay);

  $("#reset-button").on('click', reset);

});
