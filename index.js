const modernNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

class RomanNumeralGenerator {
    generate(int) {
        let romanNumeralString = '';

        modernNumerals.forEach((numeral, index) => {
            while (int - numeral >= 0) {
                romanNumeralString += romanNumerals[index];
                int = int - numeral;
            }
        });

        return romanNumeralString;
    }
}

module.exports = RomanNumeralGenerator;