// import { Chess } from "chess.js";

// document.addEventListener("DOMContentLoaded", () => {
//   const board = document.getElementById("chessboard");
//   const pieces = {
//     r: "♜",
//     n: "♞",
//     b: "♝",
//     q: "♛",
//     k: "♚",
//     p: "♟",
//     R: "♖",
//     N: "♘",
//     B: "♗",
//     Q: "♕",
//     K: "♔",
//     P: "♙",
//   };

//   // const initialBoard = [
//   //   ["r", "n", "b", "q", "k", "b", "n", "r"],
//   //   ["p", "p", "p", "p", "p", "p", "p", "p"],
//   //   ["", "", "", "", "", "", "", ""],
//   //   ["", "", "", "", "", "", "", ""],
//   //   ["", "", "", "", "", "", "", ""],
//   //   ["", "", "", "", "", "", "", ""],
//   //   ["P", "P", "P", "P", "P", "P", "P", "P"],
//   //   ["R", "N", "B", "Q", "K", "B", "N", "R"],
//   // ];
//   const chess = new Chess();
//   let selectedPiece = null;

//   console.log(chess.board());
//   function createBoard() {
//     for (let i = 0; i < 8; i++) {
//       for (let j = 0; j < 8; j++) {
//         const square = document.createElement("div");
//         square.classList.add("square");
//         square.classList.add((i + j) % 2 === 0 ? "white" : "black");
//         square.dataset.row = i;
//         square.dataset.col = j;

//         const piece = chess.board()[i][j];
//         if (piece) {
//           const pieceElement = document.createElement("span");
//           pieceElement.classList.add("piece");
//           pieceElement.textContent =
//             pieces[piece.type + (piece.color === "w" ? "P" : "p")];
//           square.appendChild(pieceElement);
//         }

//         square.addEventListener("click", handleSquareClick);
//         board.appendChild(square);
//       }
//     }
//   }

//   function handleSquareClick(event) {
//     const square = event.currentTarget;
//     const row = square.dataset.row;
//     const col = square.dataset.col;
//     const squareId = sqaure.dataset.row + square.dataset.col;

//     if (selectedPiece) {
//       const move = chess.move({
//         from: selectedPiece.dataset.row + selectedPiece.dataset.col,
//         to: row + col,
//         promotion: "q",
//       });
//       if (move) {
//         renderBoard();
//       } else {
//         alert("Invalid move");
//       }

//       selectedPiece.classList.remove("selected");
//       selectedPiece = null;
//     } else {
//       if (square.firstChild) {
//         selectedPiece = square;
//         selectedPiece.classList.add("selected");
//       }
//     }
//   }
//   function renderBoard() {
//     board.innerHTML = "";
//     createBoard();
//   }
//   createBoard();
// });

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("chessboard");
  const pieces = {
    r: "♜",
    n: "♞",
    b: "♝",
    q: "♛",
    k: "♚",
    p: "♟",
    R: "♖",
    N: "♘",
    B: "♗",
    Q: "♕",
    K: "♔",
    P: "♙",
  };

  const initialBoard = [
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ];

  let selectedPiece = null;

  function createBoard() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.classList.add((i + j) % 2 === 0 ? "white" : "black");
        square.dataset.row = i;
        square.dataset.col = j;

        const piece = initialBoard[i][j];
        if (piece) {
          const pieceElement = document.createElement("span");
          pieceElement.classList.add("piece");
          pieceElement.textContent = pieces[piece];
          square.appendChild(pieceElement);
        }

        square.addEventListener("click", handleSquareClick);
        board.appendChild(square);
      }
    }
  }

  function handleSquareClick(event) {
    const square = event.currentTarget;
    const row = square.dataset.row;
    const col = square.dataset.col;

    if (selectedPiece) {
      movePiece(selectedPiece, row, col);
      selectedPiece = null;
    } else {
      if (square.firstChild) {
        selectedPiece = square;
      }
    }
  }

  function movePiece(pieceSquare, row, col) {
    const piece = pieceSquare.firstChild;
    pieceSquare.removeChild(piece);

    const newSquare = document.querySelector(
      `[data-row="${row}"][data-col="${col}"]`
    );
    if (newSquare.firstChild) {
      newSquare.removeChild(newSquare.firstChild);
    }
    newSquare.appendChild(piece);
  }

  createBoard();
});
