"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
import { Knight, Position } from "./knight.js";
const rows = 8;
const cols = 8;
function createBoard() {
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
const knight = new Knight();
let board = createBoard();
placeKnightOnBoard(knight, Object.create(board));
knight.getPossibleMoves(knight.startPosition, new Position(0, 0), board);
if (knight.startPosition.nextMove1) {
    board[(_a = knight.startPosition.nextMove1) === null || _a === void 0 ? void 0 : _a.row][(_b = knight.startPosition.nextMove1) === null || _b === void 0 ? void 0 : _b.column] = "x";
}
if (knight.startPosition.nextMove2) {
    board[(_c = knight.startPosition.nextMove2) === null || _c === void 0 ? void 0 : _c.row][(_d = knight.startPosition.nextMove2) === null || _d === void 0 ? void 0 : _d.column] = "x";
}
if (knight.startPosition.nextMove3) {
    board[(_e = knight.startPosition.nextMove3) === null || _e === void 0 ? void 0 : _e.row][(_f = knight.startPosition.nextMove3) === null || _f === void 0 ? void 0 : _f.column] = "x";
}
if (knight.startPosition.nextMove4) {
    board[(_g = knight.startPosition.nextMove4) === null || _g === void 0 ? void 0 : _g.row][(_h = knight.startPosition.nextMove4) === null || _h === void 0 ? void 0 : _h.column] = "x";
}
if (knight.startPosition.nextMove5) {
    board[(_j = knight.startPosition.nextMove5) === null || _j === void 0 ? void 0 : _j.row][(_k = knight.startPosition.nextMove5) === null || _k === void 0 ? void 0 : _k.column] = "x";
}
if (knight.startPosition.nextMove6) {
    board[(_l = knight.startPosition.nextMove6) === null || _l === void 0 ? void 0 : _l.row][(_m = knight.startPosition.nextMove6) === null || _m === void 0 ? void 0 : _m.column] = "x";
}
if (knight.startPosition.nextMove7) {
    board[(_o = knight.startPosition.nextMove7) === null || _o === void 0 ? void 0 : _o.row][(_p = knight.startPosition.nextMove7) === null || _p === void 0 ? void 0 : _p.column] = "x";
}
if (knight.startPosition.nextMove8) {
    board[(_q = knight.startPosition.nextMove8) === null || _q === void 0 ? void 0 : _q.row][(_r = knight.startPosition.nextMove8) === null || _r === void 0 ? void 0 : _r.column] = "x";
}
//logBoad(board);
console.log(knight.startPosition);
