"use strict";

import { Knight, Position } from "./knight.js";
import { createBoard } from "./buildGameBoard.js";

function moveKnight(startP: number[], endP: number[]) {
  const knight = new Knight(new Position(startP[0], startP[1]));
  const board = createBoard();
  knight.getPossibleMoves(knight.startPosition, new Position(endP[0], endP[1]), board);
  let desPos: Position | null = null;
  const posi = knight.levelOrder((position: Position) => {
    console.log(`currentPos: ${position.row}, ${position.column} and endPos: ${endP[0]}, ${endP[1]}`);
    if (position.row === endP[0] && position.column === endP[1]) {
      console.log("hallo");
      desPos = position;
      return;
    }
    return;
  });
  //const posi = knight.levelOrder();

  return desPos;
}

console.log(moveKnight([0, 0], [1, 2]));
