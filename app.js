let userClick = true;


$(() => {
//console.log('connected');

// NEED TO MAKE ULTIMATE TIC TAC TOE
// 3X3 GRID, 9 TOTAL BOARDS/SQUARES: 1 big board comprised of 9 mini boards
//  2 PLAYERS  - need that to be defined (input name) ** stretch (choose your value) **
// WIN STATE: Winner per mini board will then have that board as their value on the BIG BOARD
// LOSE STATE: since playing against another player, if they've won, you have lost.
// Only one winner or DRAW
// GAME IS NOT OVER: until big board has a Winner
// Each mini board is like a round - keeps going
//clear board exists
// TIMER? ** STRETCH **? MUST COMPLETE EACH mini board w/in a time limit
// OR overall timer? -- player with most wins = winner?




const someFunction = (e) => {
console.log(userClick);
$(e.currentTarget).html("X");
if (userClick === true){
   $(e.currentTarget).html("X");
   userClick = false;
  } else {
   $(e.currentTarget).html("O");
    userClick = true;
  }
// NEED TO MAKE SURE THE X AND O DON'T CLICK BACK IF DOUBLE CLICKED. THEY SHOULD STAY PUT
}
// this tells me what value to give once a user clicks
// need this to incorporate 2 players
// NEED TO KNOW WHEN 3 IN A ROW/ WINNER
// NEED TO KNOW WHEN NO SQUARES LEFT TO CLICK -
//TIE IF NO ONE HAS WON (3 IN A ROW)

const $gameBoard = $('#board');
for (let i = 0; i < 9; i++){
  // not sure if this is right
  const $newDiv =  $('<div/>').addClass('square').attr('id', i);
  $($gameBoard).append($newDiv);

  $($newDiv).on('click', someFunction);

}
// TRYING TO MAKE MORE MINI BOARDS BUT IT IS NOT SEPARATING, IT'S ONE GIANT CONTINUATION
// *************************************************

// const $gameBoard2 = $('#board2');
// for (let i = 0; i < 9; i++){
//   // not sure if this is right
//   const $newDiv =  $('<div/>').addClass('square').attr('id', i);
//   $($gameBoard).append($newDiv);
//
//   $($newDiv).on('click', someFunction);
//
// }
// *************************************************

// THIS IS FOR A 3X3 NOW A MINI BOARD I will need 9 of these
// these should all then be in a BIG BOARD
// with defined borders so that it looks like a tic tac toe board

const clearBox = (square) => {
  return $('.square').html('');
  clearBox().toggle().css('background-color', 'blue');
  clearBox();
}

  $('button').on('click', (e) => {
  console.log('clicked');

  clearBox();
  });
  //$(e.currentTarget).text("X");

})
