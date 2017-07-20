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




const playerSquare = (e) => {
  console.log(userClick);
  var clickedSquare = $(e.currentTarget)
  if (clickedSquare.html() == ''){
    if (userClick === true){
      clickedSquare.html("X");
      userClick = false;
    } else {
      clickedSquare.html("O");
      userClick = true;
    }
  } else {
    return false;
  }
  checkWinner(clickedSquare);
}

// give mini divs numbers
const winsArray = [
 [0, 1, 2], // row 1
 [3, 4, 5], // row 2
 [6, 7, 8], // row 3

 [0, 3, 6], //col 1
 [1, 4, 7], // col 2
 [2, 5, 8], // col 3

 [0, 4, 8], // diag 1
 [2, 4, 6] //diag 2
];
// win logic:

// if row 1 (0, 1, 2) === x || === o - wins
 // per row and diagonal

// row 1/top row
const checkWinner = (clickedSquare) => {
  for (let i = 0; i < winsArray.length; i++) {
    //   console.log($('#board').find('.innerSquare#' + winsArray[i][0]).html());
    //   console.log($('#board').find('.innerSquare#' + winsArray[i][1]).html());
    //   console.log($('#board').find('.innerSquare#' + winsArray[i][2]).html());

    if ( $('#board').find('.innerSquare#' + winsArray[i][0]).html() === $('#board').find('.innerSquare#' + winsArray[i][1]).html() && $('#board').find('.innerSquare#' + winsArray[i][0]).html() === $('#board').find('.innerSquare#' + winsArray[i][2]).html() && $('#board').find('.innerSquare#' + winsArray[i][0]).html() !== '') {

      console.log("Winner Winner Chicken Dinner");

    } else {
      console.log("no Winner");
    }
  }
}

// NEED ANOTHER FUNCTION THAT TELL YOUS WHEN A BOARD HAS BEEN WON.

// this tells me what value to give once a user clicks
// need this to incorporate 2 players
// NEED TO KNOW WHEN NO SQUARES LEFT TO CLICK -
//TIE IF NO ONE HAS WON (3 IN A ROW)

const $gameBoard = $('#board');
for (let i = 0; i < 9; i++){
  const $bigSquare =  $('<div/>').addClass('square').attr('id', i);
  $($gameBoard).append($bigSquare);
  for (let j = 0; j < 9; j++) {
    const $newMiniDiv = $('<div/>').addClass('innerSquare').attr('id', j);
    $('.square').eq(i).append($newMiniDiv);
    $($newMiniDiv).on('click', playerSquare);
    // console.log($newMiniDiv);
  }
  // $($bigSquare).on('click', playerSquare);
}

// THIS IS FOR A 3X3 NOW A MINI BOARD I will need 9 of these
// these should all then be in a BIG BOARD
// with defined borders so that it looks like a tic tac toe board

// CLEAR BOX IS NOT WORKING - IT REMOVES THE DIVS (MINI -INNER SQUARES )

const clearBox = (square) => {
  $('.square').html('');
  userClick = true;
}

  $('button').on('click', (e) => {
  // console.log('clicked');
  clearBox();
  });
  //$(e.currentTarget).text("X");

})
