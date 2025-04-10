export function calcPoints(input: string): number {
  if (!input.trim()) return 0;

  const parts = input.trim().split(/\s+/);
  if (parts.length % 2 !== 0) {
    throw new Error('Invalid input: must have pairs of multiplier and sector');
  }

  let total = 0;

  for (let i = 0; i < parts.length; i += 2) {
    const multiplier = parseInt(parts[i], 10);
    const sector = parseInt(parts[i + 1], 10);

    if (![1, 2, 3].includes(multiplier)) {
      throw new Error('Invalid multiplier');
    }
    if (isNaN(sector)) {
      throw new Error('Invalid sector');
    }

    total += multiplier * sector;
  }

  return total;
}

export function possibleCheckout(scored: number): string | null {
  const remaining = 501 - scored;
  if (remaining <= 0) return null;
  if (remaining % 2 !== 0) return null;

  const double = remaining / 2;
  if (double < 1 || double > 20) return null;

  return `Double ${double}`;
}
