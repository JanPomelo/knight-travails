"use strict";
const rows = 8;
const cols = 8;
export function createBoard() {
    let board = [];
    for (let i = 0; i < rows; i++) {
        board.push([]);
        for (let c = 0; c < cols; c++) {
            board[i].push(" ");
        }
    }
    return board;
}
function placeKnightOnBoard(knight, board) {
    const row = knight.startPosition.row;
    const col = knight.startPosition.column;
    board[row][col] = "k";
}
function logBoad(board) {
    for (let i = 0; i < 8; i++) {
        console.log("------------------------------");
        let rowString = "| ";
        for (let c = 0; c < 8; c++) {
            rowString = rowString + board[i][c] + " | ";
        }
        console.log(rowString);
    }
    console.log("--------------------------------");
}
