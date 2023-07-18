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
  prevPos: Position | null;

  constructor(row: number, column: number, prevPos: Position | null = null) {
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
    this.prevPos = prevPos;
  }
}
