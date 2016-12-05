const expect = require('chai').expect;
const quoteCalculator = require('../quote/quoteCalculator');

const data = { country: 'FR',
  departureDate: '2016-12-08',
  returnDate: '2016-12-10',
  travellerAges: [ 9 ],
  options: [],
  cover: 'Basic' };

describe("First Round", () => {
  it('first test', () => {
    expect(quoteCalculator(data)).to.eq(3.6);
  });
});
