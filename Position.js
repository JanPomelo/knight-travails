export class Position {
    constructor(row, column, prevPos = null) {
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
