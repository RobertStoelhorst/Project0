console.log("is this working");

$(document).ready(function() {

  /*----- constants -----*/
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


  $("#board").on('click', handleTurn);
  const messages = document.querySelector('h2');
  $("#reset-button").on('click', init);


const handleTurn = function() {

}

});
