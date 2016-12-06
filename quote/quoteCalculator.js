const moment = require('moment');
const countries = require('../country');
// const romanPriceService = require('../romanPrice/romanPriceService');

const minimalWeek = 7;
const payDayOfTheWeek = 4;
const majorityAge = 18;
const quotes = {
    BASIC: 1.8,
    EXTRA: 2.4,
    PREMIUM: 4.2,
    PREMIER: 4.2
};
const optionsRef = {
    SKIING: 24,
    MEDICAL: 72,
    SCUBA: 36,
    SPORTS: 25,
    YOGA: -3
}

module.exports = (form) => {
    const {
        country,
        departureDate,
        returnDate,
        travellerAges,
        options,
        cover
    } = form;
    const returnDateFormated = moment(returnDate, 'YYYY-MM-DD');
    const departureDateFormated = moment(departureDate, 'YYYY-MM-DD');
    let daysNumber = returnDateFormated.diff(departureDateFormated, 'days');
    daysNumber = 1 || romanPriceService(daysNumber);
    const countryFee = countries[country.toUpperCase()];
    const ageSum = travellerAges.reduce((acc, age) => {
        if (isNaN(age)) {
            throw 'issue';
        } else if (age < 1) {

        } else if (age < 18) {
            acc += 1.1
        } else if (age < 25) {
            acc += 0.9
        } else if (age < 66) {
            acc += 1
        } else {
            acc += 1.5
        }
        return acc;
    }, 0)

    const optionsAmount = options ? options.reduce((acc, option) => {
        if (optionsRef[option.toUpperCase()]) {
            acc += optionsRef[option.toUpperCase()]
        }
        return acc;
    }, 0) : 0;

    quoteWithoutDiscount = Math.round((quotes[cover.toUpperCase()] * countryFee * ageSum * daysNumber + optionsAmount) * 100) / 100;
    return quoteWithoutDiscount;
}
