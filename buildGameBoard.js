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
