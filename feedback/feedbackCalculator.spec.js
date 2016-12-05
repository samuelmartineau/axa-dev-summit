const expect = require('chai').expect;
const feedbackCalculator = require('../feedback/feedbackCalculator');

const data = { country: 'FR',
  departureDate: '2016-12-08',
  returnDate: '2016-12-10',
  travellerAges: [ 9 ],
  options: [],
  cover: 'Basic' };

describe("First Round", () => {
  it('first test', () => {
    expect(feedbackCalculator(data)).to.eq(3.6);
  });
});
