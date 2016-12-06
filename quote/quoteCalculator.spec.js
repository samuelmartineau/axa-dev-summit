const expect = require('chai').expect;
const quoteCalculator = require('../quote/quoteCalculator');

describe("Serious Game", () => {
    it('first test', () => {
        const data = {
            "country": "FR",
            "departureDate": "2016-12-11",
            "returnDate": "2016-12-24",
            "travellerAges": [55, 27, 16],
            "options": [],
            "cover": "Extra"
        };
        expect(quoteCalculator(data)).to.eq(84.82);
    });
});
