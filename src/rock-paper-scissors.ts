export function play(p1: string, p2: string): number {
  const normalize = (input: string) => input.trim().toLowerCase();

  const move1 = normalize(p1);
  const move2 = normalize(p2);

  const validMoves = ['rock', 'paper', 'scissors'];

  if (!validMoves.includes(move1) || !validMoves.includes(move2)) {
    throw new Error('Invalid move');
  }

  if (move1 === move2) return 0;

  if (
      (move1 === 'rock' && move2 === 'scissors') ||
      (move1 === 'scissors' && move2 === 'paper') ||
      (move1 === 'paper' && move2 === 'rock')
  ) {
    return 1;
  }

  return 2;
}
