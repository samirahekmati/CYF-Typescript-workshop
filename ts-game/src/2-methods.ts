// ✅ Level 2: Methods
// TODO: Add a method to the Player class to increase score

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
  
    increaseScore(){
      // TODO: implement increaseScore() to increment score by 1
    }
  }
  
  // ✅ Tests
  const player = new Player("Bob");
  player.increaseScore();
  console.assert(player.score === 1, "Score should be 1");
  export{}