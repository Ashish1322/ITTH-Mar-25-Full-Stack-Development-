var board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
var currentPlayer = "X";
var gameOver = false;

function renderGameBord(intialSetup = false) {
  let cells = document.getElementsByClassName("cell");
  for (let index = 0; index < 9; index += 1) {
    // 1. Update the inner text with arraay value
    cells[index].innerText = board[index];
    // 2. Set a click listern on this cell
    if (intialSetup) {
      cells[index].addEventListener("click", () => {
        handleClick(index);
      });
    }
  }
}

function flipTurn() {
  if (currentPlayer == "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }

  document.getElementById("turn").innerText = "Player Turn : " + currentPlayer;
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

function handleClick(playerInput) {
  console.log(board, playerInput);
  // 1. If this index is valid
  if (playerInput < 0 || playerInput > 8) {
    alert("Invalid Index");
    return;
  }
  // 2. If this block is already filled
  if (board[playerInput] != "-") {
    alert("This block is already filled please try again!");
    return;
  }

  // 3. Update the board and render on the screen
  board[playerInput] = currentPlayer;
  renderGameBord();

  // 4. If anyone is winning the game
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

  console.log(board, playerInput);
}

function reset() {
  board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  currentPlayer = "X";
  gameOver = false;
  renderGameBord();
}
renderGameBord(true);
document.getElementById("reset").addEventListener("click", reset);
