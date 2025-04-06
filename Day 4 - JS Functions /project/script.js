var board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
var currentPlayer = "X";
var gameOver = false;

function renderGameBord() {
  console.log("---------");
  console.log(board[0], "|", board[1], "|", board[2]);
  console.log(board[3], "|", board[4], "|", board[5]);
  console.log(board[6], "|", board[7], "|", board[8]);
}

function flipTurn() {
  if (currentPlayer == "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function checkWins(player) {
  if (board[0] == player && board[1] == player && board[2] == player) {
    return true;
  } else if (board[3] == player && board[4] == player && board[5] == player) {
    return true;
  } else if (board[6] == player && board[7] == player && board[8] == player) {
    return true;
  } else if (board[0] == player && board[3] == player && board[6] == player) {
    return true;
  } else if (board[1] == player && board[4] == player && board[7] == player) {
    return true;
  } else if (board[2] == player && board[5] == player && board[8] == player) {
    return true;
  } else if (board[0] == player && board[4] == player && board[8] == player) {
    return true;
  } else if (board[2] == player && board[4] == player && board[6] == player) {
    return true;
  } else {
    return false;
  }
}
renderGameBord();

// GAme Starts here
while (gameOver == false) {
  // 1. Take user input and convert to number
  var playerInput = prompt(`Player ${currentPlayer} Choose your cell 0-8 : `);
  playerInput = parseInt(playerInput);
  // 2. If this index is valid
  if (playerInput < 0 || playerInput > 8) {
    alert("Invalid Index");
    continue;
  }
  // 3. If this block is already filled
  if (board[playerInput] != "-") {
    alert("This block is already filled please try again!");
    continue;
  }
  // 4. Update the board and render on the screen
  board[playerInput] = currentPlayer;
  renderGameBord();

  // 5. If anyone is winning the game
  var xWins = checkWins("X");
  var oWins = checkWins("O");
  if (xWins == true) {
    alert("X Won the Game!");
    gameOver = true;
  } else if (oWins == true) {
    alert("O Won the Game!");
    gameOver = true;
  } else if (board.includes("-") == false) {
    alert("Game is Draw!");
    gameOver = true;
  } else {
    flipTurn();
  }
}
