// ✅ Level 3: Encapsulation
// TODO: Make `score` private and use a getter + method to modify

interface IPlayer {
  name: string;
  score: number;
  increaseScore(): void;
}

class Player implements IPlayer {
  name: string;
  score: number;

  constructor(name: string) {
    this.name = name;
    this.score = 0;
  }

  increaseScore(): void {
    this.score++;
  }

  getScore(){
    // TODO: Add getScore() method to return the score
  }
}

// ✅ Tests
const player = new Player("Carol");
player.increaseScore();
console.assert(player.getScore() === 1, "Score should be 1 using getter");
export{}