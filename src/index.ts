import BowlingGame from "./code/bowlingGame";

function main(args: string[]) {
  const rolls = args.slice(2).map(Number);

  if (args.length === 0) {
    console.error("Please provide a sequence of rolls as arguments.");
    process.exit(1);
  }

  const game = new BowlingGame();

  for (const pins of rolls) {
    if (isNaN(pins)) {
      console.error("All arguments must be numbers.");
      process.exit(1);
    }
    game.roll(pins);
  }

  const totalScore = game.calculateScore();
  console.log(`Total score: ${totalScore}`);
}

// Run the main function with command line arguments
main(process.argv);
