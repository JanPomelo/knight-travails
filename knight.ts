import { Queue } from "./Queue.js";
import { Position } from "./Position.js";

// create Knight class
export class Knight {
  // first Position
  private _startPosition: Position;
  // storage variable for counting the number of moves until the endPosition is reached
  private _bestMove: number;
  constructor(startPos: Position) {
    this._startPosition = startPos;
    // 63 because the board has 64 fields and the knight is already standing on one
    this._bestMove = 63;
  }

  get startPosition() {
    return this._startPosition;
  }

  private _getBestMove() {
    return this._bestMove;
  }

  private _setBestMove(num: number) {
    this._bestMove = num;
  }

  getPossibleMoves(
    position: Position,
    endPosition: Position,
    board: string[][],
    bestMove = this._getBestMove(),
    currentMove = 0
  ) {
    // for performance: if there is already a faster way to get to the endposition, don't dig further in
    if (currentMove >= bestMove) {
      return;
    }
    // if the current position is the endPosition
    if (position.row === endPosition.row && position.column === endPosition.column) {
      // set the bestMoves to currentmoves
      this._setBestMove(currentMove);
      return;
    }
    // set all next Moves
    this._setNextMoves(position);
    // write the next Moves into an Array
    const allNexts: (Position | null)[] = this._pushNextMovesToArr(position);

    // iterate through the Array
    for (let i = 0; i < allNexts.length; i++) {
      // if the nextMove is not null
      if (allNexts[i]) {
        // if the position where the knight will be at the next move is free
        if (board[allNexts[i]?.row as number][allNexts[i]?.column as number] === " ") {
          // set a cross to mark the field as already visited
          board[allNexts[i]?.row as number][allNexts[i]?.column as number] = "x";
          // do the next moves based on this move
          this.getPossibleMoves(allNexts[i] as Position, endPosition, board, this._getBestMove(), currentMove + 1);
          // redo the move
          board[allNexts[i]?.row as number][allNexts[i]?.column as number] = " ";
        }
      }
    }
  }
  // function to push all nextMoves from a position into an array and return that array
  private _pushNextMovesToArr(position: Position) {
    const allNexts: (Position | null)[] = [];
    allNexts.push(position.nextMove1);
    allNexts.push(position.nextMove2);
    allNexts.push(position.nextMove3);
    allNexts.push(position.nextMove4);
    allNexts.push(position.nextMove5);
    allNexts.push(position.nextMove6);
    allNexts.push(position.nextMove7);
    allNexts.push(position.nextMove8);
    return allNexts;
  }
  // logic for the next moves of the knight based on chess rules
  private _setNextMoves(position: Position) {
    position.nextMove1 = new Position(position.row - 1, position.column - 2, position);
    position.nextMove2 = new Position(position.row - 2, position.column - 1, position);
    position.nextMove3 = new Position(position.row - 2, position.column + 1, position);
    position.nextMove4 = new Position(position.row - 1, position.column + 2, position);
    position.nextMove5 = new Position(position.row + 1, position.column + 2, position);
    position.nextMove6 = new Position(position.row + 2, position.column + 1, position);
    position.nextMove7 = new Position(position.row + 2, position.column - 1, position);
    position.nextMove8 = new Position(position.row + 1, position.column - 2, position);
    if (position.row < 2) {
      position.nextMove2 = null;
      position.nextMove3 = null;
    }
    if (position.row < 1) {
      position.nextMove1 = null;
      position.nextMove4 = null;
    }
    if (position.row > 5) {
      position.nextMove6 = null;
      position.nextMove7 = null;
    }
    if (position.row > 6) {
      position.nextMove5 = null;
      position.nextMove8 = null;
    }
    if (position.column < 2) {
      position.nextMove1 = null;
      position.nextMove8 = null;
    }
    if (position.column < 1) {
      position.nextMove2 = null;
      position.nextMove7 = null;
    }
    if (position.column > 5) {
      position.nextMove4 = null;
      position.nextMove5 = null;
    }
    if (position.column > 6) {
      position.nextMove3 = null;
      position.nextMove6 = null;
    }
  }
  // function to go breadth first through the position tree
  levelOrder(fun: Function | null = null) {
    if (this._startPosition === null) {
      return [];
    }
    const queue: Queue = new Queue();
    queue.enqueue(this._startPosition);
    const arr = [];
    while (!queue.isEmpty) {
      let node = queue.peek();
      if (!fun) arr.push([node.row, node.column]);
      else fun(node);
      if (node.nextMove1) queue.enqueue(node.nextMove1);
      if (node.nextMove2) queue.enqueue(node.nextMove2);
      if (node.nextMove3) queue.enqueue(node.nextMove3);
      if (node.nextMove4) queue.enqueue(node.nextMove4);
      if (node.nextMove5) queue.enqueue(node.nextMove5);
      if (node.nextMove6) queue.enqueue(node.nextMove6);
      if (node.nextMove7) queue.enqueue(node.nextMove7);
      if (node.nextMove8) queue.enqueue(node.nextMove8);
      queue.dequeue();
    }
    if (!fun) {
      return arr;
    }
    return;
  }
  // function to evaluate all moves from the endposition to the starting position. stores all the moves in an array and returns the array
  getAllMovesToEndPos(position: Position | null): number[][] {
    const arr: number[][] = [];
    if (!position) {
      return arr;
    }
    arr.unshift([position.row, position.column]);
    while (position.prevPos) {
      position = position.prevPos;
      arr.unshift([position.row, position.column]);
    }
    return arr;
  }
}
