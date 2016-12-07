const expect = require('chai').expect;
const quoteCalculator = require('../quote/quoteCalculator');


describe("Offers", () => {
    xit('first test', () => {
        const data = {
            country: 'FR',
            departureDate: '2016-12-08',
            returnDate: '2016-12-10',
            travellerAges: [9],
            options: [],
            cover: 'Basic'
        };
        expect(quoteCalculator(data)).to.eq(3.6);
    });
});