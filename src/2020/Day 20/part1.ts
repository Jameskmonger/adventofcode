import { PuzzleSolver } from "./puzzleSolver";

console.time("part1");
const edgeDetector = new PuzzleSolver("./tiles.txt");

const outerTiles = edgeDetector.getCornerTiles();

console.log(
  "Answer:",
  outerTiles.map((t) => t.id).reduce((a, b) => (a *= b), 1)
);
console.timeEnd("part1");
