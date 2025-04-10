import { calcPoints, possibleCheckout } from './darts';

describe('Darts – calcPoints', () => {
    test.each([
        ['3 20 1 17 2 4', 85],
        ['2 15 1 18 3 19', 105],
        ['3 20 1 5', 65],
        ['1 10 1 10 1 10', 30],
        ['', 0],
    ])('calcPoints("%s") → %d', (input, expected) => {
        expect(calcPoints(input)).toBe(expected);
    });
});

describe('Darts – possibleCheckout', () => {
    test.each([
        [477, 'Double 12'],
        [480, null],
        [441, null],
        [499, 'Double 1'],
        [501, null],
    ])('possibleCheckout(%d) → %s', (score, expected) => {
        expect(possibleCheckout(score)).toBe(expected);
    });
});
