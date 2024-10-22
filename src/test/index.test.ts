import { describe, it, beforeEach } from "node:test";
import BowlingGame from "../code/bowlingGame";
import assert from "node:assert/strict";

describe("Bowling Test", () => {
  let game: BowlingGame;
  beforeEach(() => {
    game = new BowlingGame();
  });
  it("should roll a ball", () => {
    game.roll(0);
    game.rollMany(19, 0);
    assert.equal(game.calculateScore(), 0);
  });
  it("should return 0 for a game of all gutter balls", () => {
    game.rollMany(20, 0);
    const result = game.calculateScore();
    assert.equal(result, 0);
  });
  it("should return 20 for a game of all ones", () => {
    game.rollMany(20, 1);
    const result = game.calculateScore();
    assert.equal(result, 20);
  });
  it("should return 20 for a game of one spare and 5", () => {
    game.roll(5);
    game.roll(5);
    game.roll(5);
    game.rollMany(17, 0);
    const result = game.calculateScore();
    assert.equal(result, 20);
  });
  it("should return 20 for a game of one strike and 2, 3", () => {
    game.roll(10);
    game.roll(2);
    game.roll(3);
    game.rollMany(17, 0);
    const result = game.calculateScore();
    assert.equal(result, 20);
  });
  it("should return 300 for a perfect game", () => {
    game.rollMany(12, 10);
    const result = game.calculateScore();
    assert.equal(result, 300);
  });
  it("should not allow negative rolls", () => {
    assert.throws(() => game.roll(-1), /Invalid roll: -1/);
  });
  it("should not allow rolls greater than 10", () => {
    assert.throws(() => game.roll(11), /Invalid roll: 11/);
  });
});
