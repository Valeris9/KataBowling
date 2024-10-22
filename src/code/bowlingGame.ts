class BowlingGame {
  private rolls: number[] = [];
  private currentRoll: number;

  constructor() {
    this.rolls = [];
    this.currentRoll = 0;
  }

  roll(pins: number) {
    if (pins < 0 || pins > 10) {
      throw new Error(`Invalid roll: ${pins}`);
    }
    this.rolls.push(pins);
  }

  calculateScore(): number {
    let totalScore = 0;
    let rollIndex = 0;

    for (let turn = 0; turn < 10; turn++) {
      if (this.isStrike(rollIndex)) {
        totalScore += this.strikeScore(rollIndex);
        rollIndex++;
      } else if (this.isSpare(rollIndex)) {
        totalScore += this.spareScore(rollIndex);
        rollIndex += 2;
      } else {
        totalScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
        rollIndex += 2;
      }
    }

    return totalScore;
  }

  rollMany(n: number, pins: number) {
    for (let i = 0; i < n; i++) {
      this.roll(pins);
    }
  }

  isSpare(rollIndex: number) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  }

  isStrike(rollIndex: number) {
    return this.rolls[rollIndex] === 10;
  }

  strikeScore(rollIndex: number) {
    return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  spareScore(rollIndex: number) {
    return 10 + this.rolls[rollIndex + 2];
  }
}

export default BowlingGame;
