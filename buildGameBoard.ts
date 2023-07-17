"use strict";
import { Knight } from "./knight.js";

const rows: number = 8;
const cols: number = 8;

function createBoard(): string[][] {
  let board: string[][] = [];
  for (let i = 0; i < rows; i++) {
    board.push([]);
    for (let c = 0; c < cols; c++) {
      board[i].push("");
    }
  }
  return board;
}

function placeKnightOnBoard(knight: Knight, board: string[][]): void {
  const row = knight.startPosition.row;
  const col = knight.startPosition.column;
  board[row][col] = "k";
}

const knight = new Knight();
let board: string[][] = createBoard();
placeKnightOnBoard(knight, board);
console.log(board);
