"use strict";
import { Knight } from "./knight.js";
const rows = 8;
const cols = 8;
function createBoard() {
    let board = [];
    for (let i = 0; i < rows; i++) {
        board.push([]);
        for (let c = 0; c < cols; c++) {
            board[i].push("");
        }
    }
    return board;
}
function placeKnightOnBoard(knight, board) {
    const row = knight.startPosition.row;
    const col = knight.startPosition.column;
    board[row][col] = "k";
}
const knight = new Knight();
let board = createBoard();
placeKnightOnBoard(knight, board);
console.log(board);
