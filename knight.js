export class Knight {
    constructor() {
        const row = Math.floor(Math.random() * 8);
        const col = Math.floor(Math.random() * 8);
        const startPosition = { row: row, column: col };
        this._startPosition = startPosition;
    }
    get startPosition() {
        return this._startPosition;
    }
}
