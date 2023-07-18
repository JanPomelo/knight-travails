# Knight Travails

This is the solution for the Knight Travails project from the website "The Odin Project".
The project is done with TypeScript.

# Classes

## Knight

### Attributes

- \_startPosition: Position
- \_bestMove: number

### Methods

#### \_getBestMove()

**returns** the \_bestMove variable

#### \_setBestMove(num: number)

- sets the \_bestMove variable

**returns** void

#### getPossibleMoves(position: Position, endPosition: Position, board: string[][], bestMove: number, currentMove: number)

evaluates the possible moves a Knight can do from a position. Due to performance, the function does not calculate every move. When it finds the first valuable position, it safes the amount of moves needed and skips all other paths that need more or equal amount of moves.

**returns** void

#### \_pushNextMovesToArr(position: Position)

pushes all possible next moves from a given position into an array

**returns** the Array

#### \_setNextMoves(position: Position)

sets the next moves from a given position based on the chess logic

**returns** void

#### levelOrder(fun: Function | null)

goes Breadth First through the Position Tree and passes the position to the function declared.

**returns** Array with all positions if no function is passed, else void

#### getAllMovesToEndPos(position: Position | null)

safes all moves from the start position to the end position into an array

**returns** the array with the positions