"use strict";

import { Knight } from "./knight.js";
import { createBoard } from "./buildGameBoard.js";
import { Position } from "./Position.js";

function moveKnight(startP: number[], endP: number[]) {
  const knight = new Knight(new Position(startP[0], startP[1]));
  const board = createBoard();
  knight.getPossibleMoves(knight.startPosition, new Position(endP[0], endP[1]), board);
  let desPos: Position | null = null;
  knight.levelOrder((position: Position) => {
    if (position.row === endP[0] && position.column === endP[1]) {
      if (!desPos) desPos = position;
    }
    return;
  });
  const result = knight.getAllMovesToEndPos(desPos);
  console.log(`You made it in ${result.length - 1} moves! Here is your path:`);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
  return result;
}

moveKnight([5, 6], [1, 2]);
