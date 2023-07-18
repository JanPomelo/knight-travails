"use strict";
// Import statements
import { Knight } from "./knight.js";
import { createBoard } from "./buildGameBoard.js";
import { Position } from "./Position.js";

// Function for calculating the fastest way to move from one Position to another Position
function moveKnight(startP: number[], endP: number[]) {
  // create Knight
  const knight = new Knight(new Position(startP[0], startP[1]));
  // create Board
  const board = createBoard();
  // calculate all possible moves
  knight.getPossibleMoves(knight.startPosition, new Position(endP[0], endP[1]), board);
  // create variable for the destination as a storage
  let desPos: Position | null = null;
  // iterate in Breadth First Order through the Knight moves until it finds the endPosition
  knight.levelOrder((position: Position) => {
    if (position.row === endP[0] && position.column === endP[1]) {
      // When finding it first, declare the storage variable
      if (!desPos) desPos = position;
    }
    return;
  });
  // create an Array with all moves from startPoint to Endpoint
  const result = knight.getAllMovesToEndPos(desPos);
  // log the moves
  console.log(`You made it in ${result.length - 1} moves! Here is your path:`);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
  return;
}

moveKnight([5, 6], [1, 2]);
