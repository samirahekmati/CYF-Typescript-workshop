
enum Move {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors"
}

interface IPlayer {
  name: string;
  getScore(): number;
  increaseScore(): void;
  generateMove(): Move;
}

class Player implements IPlayer {
  name: string;
  private score: number;
  move?: Move;

  constructor(name: string) {
    this.name = name;
    this.score = 0;
  }

  increaseScore(): void {
    this.score++;
  }

  getScore(): number {
    return this.score;
  }

  generateMove(): Move {
    this.move = Move.Rock; // Default to rock for a basic player
    return this.move;
  }
}

// AIPlayer that generates a random move
class AIPlayer extends Player {
  generateMove(): Move {
    const moves = Object.values(Move);
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    this.move = randomMove;
    return this.move;
  }
}

// ✅ Tests
const ai = new AIPlayer("CPU");
const move = ai.generateMove();
console.log('move:', move)
console.assert(Object.values(Move).includes(move), "Move must be valid");