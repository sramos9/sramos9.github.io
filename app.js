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

const $gameBoard = $('#board');
for (let i = 0; i < 9; i++){
  // not sure if this is right
  const $newDiv =  $('<div/>').addClass('square').attr('id', i);
  $($gameBoard).append($newDiv);

  $($newDiv).on('click', someFunction);

}

const clearBox = (square) => {
  return $('.square').html('');
  clearBox().toggle().css('background-color', 'blue');
  clearBox();
}

  $('button').on('click', (e) => {
  console.log('clicked');

  clearBox();
  });




})
