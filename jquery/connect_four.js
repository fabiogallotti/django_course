var BLUE = 'rgb(86, 151, 255)'
var RED = 'rgb(237, 45, 73)'
var GREY = 'rgb(128, 128, 128)'

var player1 = prompt("Player One: Enter your Name, you will be Blue!");
var player1Color = BLUE;

var player2 = prompt("Player Two: Enter your Name, you will be Red!");
var player2Color = RED;

var game_on = true;
var table = $('table tr');


function reportWin(rowNum, colNum) {
  console.log("You won starting at this (row, col)");
  console.log(rowNum);
  console.log(colNum);
}

function changeColor(rowIndex, colIndex, color) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

function returnColor(rowIndex, colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex) {
  var colorReport = returnColor(5, colIndex);
  for (var row = 5; row > -1; row--) {
    colorReport = returnColor(row, colIndex);
    if (colorReport === GREY) {
      return row;
    }
  }
}

function colorMatchCheck(one, two, three, four) {
  return (one === two && one === three && one === four && one != GREY && one !== undefined)
}

function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row, col),
                          returnColor(row, col+1),
                          returnColor(row, col+2),
                          returnColor(row,col+3))) {
        console.log('Horizontal');
        reportWin(row, col);
        return true;
      } else {
        continue;
      }
    }
  }
}

function verticalWinCheck() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(returnColor(row, col),
                          returnColor(row+1, col),
                          returnColor(row+2, col),
                          returnColor(row+3, col))) {
        console.log('Vertical');
        reportWin(row,col);
        return true;
      } else {
        continue;
      }
    }
  }
}

function diagonalWinCheck() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(returnColor(row, col),
                          returnColor(row+1, col+1),
                          returnColor(row+2, col+2),
                          returnColor(row+3, col+3))) {
        console.log('Diagonal');
        reportWin(row, col);
        return true;
      } else if (colorMatchCheck(returnColor(row, col),
                                 returnColor(row-1, col+1),
                                 returnColor(row-2, col+2),
                                 returnColor(row-3, col+3))) {
        console.log('Diagonal');
        reportWin(row,col);
        return true;
      } else {
        continue;
      }
    }
  }
}

function gameEnd(winningPlayer) {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 7; row++) {
      $('h3').fadeOut('fast');
      $('h2').fadeOut('fast');
      $('h1').text(winningPlayer+" has won! Refresh your browser to play again!").css("fontSize", "50px")
    }
  }
}

// Start with player 1
var currentPlayer = 1;
var currentName = player1;
var currentColor = player1Color;

$('h3').text(player1 + ' it is your turn, pick a column and drop in!');

$('.board button').on('click', function(){
  var col = $(this).closest('td').index();

  var bottomAvail = checkBottom(col);

  changeColor(bottomAvail, col, currentColor);

  if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()){
    gameEnd(currentName);
  }
  currentPlayer *= -1

  if (currentPlayer === 1){
    currentName = player1;
    currentColor = player1Color;
  } else {
    currentName = player2;
    currentColor = player2Color;
  }
  $('h3').text(currentName + ' it is your turn, pick a column and drop in!');
})
