let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function playerMove(index) {
    if (board[index] === "" && !checkWinner()) {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerText = currentPlayer;
        if (checkWinner()) {
            document.getElementById("result").innerText = `Player ${currentPlayer} wins!`;
        } else if (board.every(cell => cell !== "")) {
            document.getElementById("result").innerText = "It's a tie!";
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winConditions.some(condition => {
        const [a, b, c] = condition;
        return board[a] && board[a] === board[b] && board[b] === board[c];
    });
}

function resetGame() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    document.getElementById("result").innerText = "";
    document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
}
