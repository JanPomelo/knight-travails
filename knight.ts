export class Knight {
  private _startPosition: StartPosition

  constructor() {
    const row = Math.floor(Math.random() * 8);
    const col = Math.floor(Math.random() * 8);
    const startPosition: StartPosition = { row: row, column: col };
    this._startPosition = startPosition;
  }

  get startPosition() {
    return this._startPosition;
  }
}

export type StartPosition = {
  row: number,
  column: number
}