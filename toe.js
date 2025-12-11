 let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", () => {
        if (!gameOver && cell.textContent === "") {
            cell.textContent = currentPlayer;
            let cellIndex = parseInt(cell.id.split("-")[1]) - 1;
            gameBoard[cellIndex] = currentPlayer;

            if (checkWin()) {
                alert(`Player ${currentPlayer} wins!`);
                gameOver = true;
            } else if (checkDraw()) {
                alert("It's a draw!");
                gameOver = true;
            }

            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});

document.getElementById("reset-button").addEventListener("click", () => {
    currentPlayer = "X";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.textContent = "";
    });
});

function checkWin() {
    let winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let condition of winConditions) {
        if (
            gameBoard[condition[0]] === gameBoard[condition[1]] &&
            gameBoard[condition[1]] === gameBoard[condition[2]] &&
            gameBoard[condition[0]] !== ""
        ) {
            return true;
        }
    }

    return false;
}

function checkDraw() {
    return !gameBoard.includes("");
}