const moment = require('moment');

const quotes = {BASIC: 1.8, EXTRA: 0};

module.exports = (form) => {
    const {country, departureDate, returnDate, travellerAges, options, cover} = form;
    const traverlersNumber = travellerAges.length;
    const returnDateFormated = moment(returnDate, 'YYYY-MM-DD');
    const departureDateFormated = moment(departureDate, 'YYYY-MM-DD');
    const daysNumber = returnDateFormated.diff(departureDateFormated, 'days');

    if (daysNumber < 7)
    {
      daysNumber = 7;
    }



    return quote * daysNumber * traverlersNumber;
}
