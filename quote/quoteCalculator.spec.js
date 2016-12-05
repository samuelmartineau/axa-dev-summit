const expect = require('chai').expect;
const quoteCalculator = require('../quote/quoteCalculator');

const data = { country: 'FR',
  departureDate: '2016-12-08',
  returnDate: '2016-12-10',
  travellerAges: [ 9 ],
  options: [],
  cover: 'Basic' };

const secondTest = { country: 'FR',
  departureDate: '2017-02-06',
  returnDate: '2017-02-17',
  travellerAges: [ 32, 47 ],
  options: [],
  cover: 'Extra'
};


describe("First Round", () => {
  it('first test', () => {
    expect(quoteCalculator(data)).to.eq(3.6);
  });
  it('second test', () => {
    expect(quoteCalculator(secondTest)).to.eq(52.80);
  });
  it('without options test', () => {
    const thirdTest = { country: 'NL',
      departureDate: '2017-02-26',
      returnDate: '2017-04-27',
      travellerAges: [ 77 ],
      options: [],
      cover: 'Basic' };
    expect(quoteCalculator(thirdTest)).to.eq(113.39999999999999);
  });
  it('with options test', () => {
    const fourTest = { country: 'IT',
      departureDate: '2017-01-20',
      returnDate: '2017-03-09',
      travellerAges: [ 56, 19 ],
      options: [ 'Skiing', 'Medical', 'Sports' ],
      cover: 'Basic'
    };
    expect(quoteCalculator(fourTest)).to.eq(412.60);
  });
});
