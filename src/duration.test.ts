import { formatDuration } from './duration';

describe('formatDuration', () => {
    test.each([
        [0, '0s'],
        [33, '33s'],
        [123, '2m3s'],
        [500, '8m20s'],
        [3600, '1h'],
        [3999, '1h6m39s'],
        [3661, '1h1m1s'],
    ])('formatDuration(%d) → "%s"', (input, expected) => {
        expect(formatDuration(input)).toBe(expected);
    });

    test('rounds fractional seconds', () => {
        expect(formatDuration(59.6)).toBe('1m');
        expect(formatDuration(59.4)).toBe('59s');
    });

    test('throws on negative input', () => {
        expect(() => formatDuration(-5)).toThrow('Duration cannot be negative');
    });
});
