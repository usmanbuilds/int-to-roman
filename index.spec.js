const RomanNumeralGenerator = require('./index');

describe('RomanNumeralGenerator', () => {
    let sut;

    beforeEach(() => {
        sut = new RomanNumeralGenerator();
    });

    describe('generate function', () => {
        it('returns an empty string for zero or negative integer', () => {
            expect(sut.generate(0)).toBe('');
            expect(sut.generate(-10)).toBe('');
        });

        it('returns the expected roman numerals for appended numerals', () => {
            expect(sut.generate(98)).toBe('XCVIII');
        });

        it('returns the expected roman numerals for prepended numerals', () => {
            expect(sut.generate(42)).toBe('XLII');
        });

        it('returns the expected roman numerals for large integers', () => {
            expect(sut.generate(2454)).toBe('MMCDLIV');
        });
    });
});