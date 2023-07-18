"use strict";

import { Knight, Position } from "./knight";
import { createBoard } from "./buildGameBoard";

function moveKnight(startP: number[], endP: number[]) {
  const knight = new Knight(new Position(startP[0], startP[1]));
  const board = createBoard();
  knight.getPossibleMoves(knight.startPosition, new Position(endP[0], startP[1]), board);
  
}
