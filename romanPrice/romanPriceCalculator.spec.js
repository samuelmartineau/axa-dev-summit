const expect = require('chai').expect;
const quoteCalculator = require('../romanPrice/romanPriceCalculator');

describe("Roman price", () => {
  describe("#getNumberFromLiteral()", () => {
    it('should handle I literal', () => {
        expect(quoteCalculator.getNumberFromLiteral('I')).to.eq(1);
    });
    it('should handle V literal', () => {
        expect(quoteCalculator.getNumberFromLiteral('V')).to.eq(4.4);
    });
    it('should handle X literal', () => {
        expect(quoteCalculator.getNumberFromLiteral('X')).to.eq(8.4);
    });
    it('should handle L literal', () => {
        expect(quoteCalculator.getNumberFromLiteral('L')).to.eq(39);
    });
  });
  describe("#getRomanNumber()", () => {
    it('should handle 1', () => {
        expect(quoteCalculator.getRomanNumber(1)).to.eq('I');
    });
    it('should handle 3', () => {
        expect(quoteCalculator.getRomanNumber(3)).to.eq('III');
    });
    it('should handle 4', () => {
        expect(quoteCalculator.getRomanNumber(4)).to.eq('IV');
    });
    it('should handle 5', () => {
        expect(quoteCalculator.getRomanNumber(5)).to.eq('V');
    });
    it('should handle 7', () => {
        expect(quoteCalculator.getRomanNumber(7)).to.eq('VII');
    });
    it('should handle 9', () => {
        expect(quoteCalculator.getRomanNumber(9)).to.eq('IX');
    });
    it('should handle 14', () => {
        expect(quoteCalculator.getRomanNumber(14)).to.eq('XIV');
    });
    it('should handle 39', () => {
        expect(quoteCalculator.getRomanNumber(39)).to.eq('XXXIX');
    });
    it('should handle 41', () => {
        expect(quoteCalculator.getRomanNumber(41)).to.eq('XLI');
    });
    it('should handle 77', () => {
        expect(quoteCalculator.getRomanNumber(77)).to.eq('LXXVII');
    });
    it('should handle 231', () => {
        expect(quoteCalculator.getRomanNumber(26)).to.eq('XXVI');
    });
  });
  describe("#getRomanPrice()", () => {
    it('should handle 1', () => {
        expect(quoteCalculator.getRomanPrice('I')).to.eq(1);
    });
    it('should handle 3', () => {
        expect(quoteCalculator.getRomanPrice('III')).to.eq(3);
    });
    it('should handle 4', () => {
        expect(quoteCalculator.getRomanPrice('IV')).to.eq(3.4);
    });
    it('should handle 5', () => {
        expect(quoteCalculator.getRomanPrice('V')).to.eq(4.4);
    });
    it('should handle 7', () => {
        expect(quoteCalculator.getRomanPrice('VII')).to.eq(6.4);
    });
    it('should handle 9', () => {
        expect(quoteCalculator.getRomanPrice('IX')).to.eq(7.4);
    });
    it('should handle 14', () => {
        expect(quoteCalculator.getRomanPrice('XIV')).to.eq(11.8);
    });
    it('should handle 39', () => {
        expect(quoteCalculator.getRomanPrice('XXXIX')).to.eq(32.6);
    });
    it('should handle 41', () => {
        expect(quoteCalculator.getRomanPrice('XLI')).to.eq(31.6);
    });
    it('should handle 77', () => {
        expect(quoteCalculator.getRomanPrice('LXXVII')).to.eq(62.2);
    });
    it.only('should handle 26', () => {
        expect(quoteCalculator.getRomanNumber('XXVI')).to.eq(22);
    });
  });
});
