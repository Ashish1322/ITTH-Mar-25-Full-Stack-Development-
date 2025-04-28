import Cell from "./Cell";
import { useState, useEffect } from "react";
import "../style.css";
function GameBoard() {
  const [board, setBoard] = useState([
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(null);

  function flipTurn() {
    if (currentPlayer == "X") {
      setCurrentPlayer("O");
    } else {
      setCurrentPlayer("X");
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
    let tempBoard = [...board];
    tempBoard[playerInput] = currentPlayer;
    setBoard(tempBoard);
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

  useEffect(() => {
    var xWins = checkWins("X");
    var oWins = checkWins("O");
    if (xWins == true) {
      alert("X Won the Game!");
      setGameOver("X");
    } else if (oWins == true) {
      alert("O Won the Game!");
      setGameOver("O");
    } else if (board.includes("-") == false) {
      alert("Game is Draw!");
      setGameOver("Draw");
    } else {
      flipTurn();
    }
  }, [board]);

  return (
    <div>
      <h3>Turn : {currentPlayer}</h3>
      {gameOver != null ? (
        <h3>Game Over , and Winner is : {gameOver} </h3>
      ) : (
        <div></div>
      )}
      <div className="board">
        <div className="row">
          <Cell id={0} text={board[0]} clickFunc={handleClick} />
          <Cell id={1} text={board[1]} clickFunc={handleClick} />
          <Cell id={2} text={board[2]} clickFunc={handleClick} />
        </div>
        <div className="row">
          <Cell id={3} text={board[3]} clickFunc={handleClick} />
          <Cell id={4} text={board[4]} clickFunc={handleClick} />
          <Cell id={5} text={board[5]} clickFunc={handleClick} />
        </div>
        <div className="row">
          <Cell id={6} text={board[6]} clickFunc={handleClick} />
          <Cell id={7} text={board[7]} clickFunc={handleClick} />
          <Cell id={8} text={board[8]} clickFunc={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
