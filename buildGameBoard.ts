"use strict";
// import { Knight } from "./knight.js";
const rows: number = 8;
const cols: number = 8;

// Function for creating the Game Board
export function createBoard(): string[][] {
  let board: string[][] = [];
  for (let i = 0; i < rows; i++) {
    board.push([]);
    for (let c = 0; c < cols; c++) {
      board[i].push(" ");
    }
  }
  return board;
}

/*function placeKnightOnBoard(knight: Knight, board: string[][]): void {
  const row = knight.startPosition.row;
  const col = knight.startPosition.column;
  board[row][col] = "k";
}

function logBoad(board: string[][]) {
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
/*
const knight = new Knight();
let board: string[][] = createBoard();
placeKnightOnBoard(knight, Object.create(board));
knight.getPossibleMoves(knight.startPosition, new Position(0, 0), board);
if (knight.startPosition.nextMove1) {
  board[knight.startPosition.nextMove1?.row as number][knight.startPosition.nextMove1?.column as number] = "x";
}
if (knight.startPosition.nextMove2) {
  board[knight.startPosition.nextMove2?.row as number][knight.startPosition.nextMove2?.column as number] = "x";
}
if (knight.startPosition.nextMove3) {
  board[knight.startPosition.nextMove3?.row as number][knight.startPosition.nextMove3?.column as number] = "x";
}
if (knight.startPosition.nextMove4) {
  board[knight.startPosition.nextMove4?.row as number][knight.startPosition.nextMove4?.column as number] = "x";
}
if (knight.startPosition.nextMove5) {
  board[knight.startPosition.nextMove5?.row as number][knight.startPosition.nextMove5?.column as number] = "x";
}
if (knight.startPosition.nextMove6) {
  board[knight.startPosition.nextMove6?.row as number][knight.startPosition.nextMove6?.column as number] = "x";
}
if (knight.startPosition.nextMove7) {
  board[knight.startPosition.nextMove7?.row as number][knight.startPosition.nextMove7?.column as number] = "x";
}
if (knight.startPosition.nextMove8) {
  board[knight.startPosition.nextMove8?.row as number][knight.startPosition.nextMove8?.column as number] = "x";
}
//logBoad(board);
//console.log(knight.startPosition);
*/
