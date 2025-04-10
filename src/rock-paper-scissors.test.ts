import { play } from './rock-paper-scissors';

describe('Rock Paper Scissors', () => {
    test.each([
        ['rock', 'scissors', 1],
        ['scissors', 'paper', 1],
        ['paper', 'rock', 1],
        ['scissors', 'rock', 2],
        ['paper', 'scissors', 2],
        ['rock', 'paper', 2],
        ['rock', 'rock', 0],
        ['paper', 'paper', 0],
        ['scissors', 'scissors', 0],
        [' Rock ', 'Paper', 2],
        ['SCISSORS', 'rock', 2],
    ])('play(%s, %s) → %d', (p1, p2, expected) => {
        expect(play(p1, p2)).toBe(expected);
    });

    test.each([
        ['banana', 'rock'],
        ['rock', 'banana'],
        ['fire', 'water'],
        [' ', 'rock'],
        ['rock', ''],
    ])('throws on invalid input: play(%s, %s)', (p1, p2) => {
        expect(() => play(p1, p2)).toThrow('Invalid move');
    });
});
