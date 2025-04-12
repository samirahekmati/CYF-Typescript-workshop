// ✅ Level 4: Inheritance & Polymorphism
// TODO: Implement a method generateMove() that picks a random move

enum Move {
  // TODO: Implement an Enum that represents the moves: Rock, Paper, Scissors
}

interface IPlayer {
  name: string;
  getScore(): number;
  increaseScore(): void;
  // TODO: Add a new method generateMove() that returns a Move
}

class Player implements IPlayer {
  name: string;
  private score: number;
  // TODO: Add a new optional property move of type Move

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

}

class AIPlayer {
  // TODO: Create class AIPlayer that extends Player
  
  generateMove(){
    // TODO: Implement generateMove() to randomly pick a Move
  }
}

// ✅ Tests
const ai = new AIPlayer("CPU");
ai.generateMove();
console.assert(Object.values(Move).includes(ai.move!), "Move must be valid");
export{}