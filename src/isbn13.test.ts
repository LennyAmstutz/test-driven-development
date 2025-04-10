import { isValid } from './isbn13';

describe('ISBN-13 validation', () => {
    test.each([
        ['9783161484100', true],
        ['9780306406157', true],
        ['9781861972712', true],
        ['9791234567896', true],

        ['9783161484101', false],
        ['9780306406156', false],
        ['123456789012', false],
        ['12345678901234', false],
        ['978X301234567', false],
    ])('isValid(%s) → %s', (isbn, expected) => {
        expect(isValid(isbn)).toBe(expected);
    });
});
