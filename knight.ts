export class Knight {
  private _startPosition: Position;
  private _bestMove: number;
  constructor(startPos: Position) {
    //const row = Math.floor(Math.random() * 8);
    //const col = Math.floor(Math.random() * 8);
    this._startPosition = startPos;
    this._bestMove = 63;
  }

  get startPosition() {
    return this._startPosition;
  }

  _getBestMove() {
    return this._bestMove;
  }

  _setBestMove(num: number) {
    this._bestMove = num;
  }
  getPossibleMoves(
    position: Position,
    endPosition: Position,
    board: string[][],
    bestMove = this._getBestMove(),
    currentMove = 0
  ) {
    if (currentMove >= bestMove) {
      return;
    }
    if (position.row === endPosition.row && position.column === endPosition.column) {
      this._setBestMove(currentMove);
      return;
    }
    const allNexts: (Position | null)[] = [];
    position.nextMove1 = new Position(position.row - 1, position.column - 2);
    position.nextMove2 = new Position(position.row - 2, position.column - 1);
    position.nextMove3 = new Position(position.row - 2, position.column + 1);
    position.nextMove4 = new Position(position.row - 1, position.column + 2);
    position.nextMove5 = new Position(position.row + 1, position.column + 2);
    position.nextMove6 = new Position(position.row + 2, position.column + 1);
    position.nextMove7 = new Position(position.row + 2, position.column - 1);
    position.nextMove8 = new Position(position.row + 1, position.column - 2);
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
    allNexts.push(position.nextMove1);
    allNexts.push(position.nextMove2);
    allNexts.push(position.nextMove3);
    allNexts.push(position.nextMove4);
    allNexts.push(position.nextMove5);
    allNexts.push(position.nextMove6);
    allNexts.push(position.nextMove7);
    allNexts.push(position.nextMove8);

    for (let i = 0; i < allNexts.length; i++) {
      if (allNexts[i]) {
        if (board[allNexts[i]?.row as number][allNexts[i]?.column as number] === " ") {
          board[allNexts[i]?.row as number][allNexts[i]?.column as number] = "x";
          this.getPossibleMoves(allNexts[i] as Position, endPosition, board, this._getBestMove(), currentMove + 1);
          board[allNexts[i]?.row as number][allNexts[i]?.column as number] = " ";
        }
      }
    }
  }
}

export class Position {
  row: number;
  column: number;
  nextMove1: Position | null;
  nextMove2: Position | null;
  nextMove3: Position | null;
  nextMove4: Position | null;
  nextMove5: Position | null;
  nextMove6: Position | null;
  nextMove7: Position | null;
  nextMove8: Position | null;

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
    this.nextMove1 = null;
    this.nextMove2 = null;
    this.nextMove3 = null;
    this.nextMove4 = null;
    this.nextMove5 = null;
    this.nextMove6 = null;
    this.nextMove7 = null;
    this.nextMove8 = null;
  }
}
