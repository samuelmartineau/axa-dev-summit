const moment = require('moment');

const quote = 1.8;

module.exports = (form) => {
    const {country, departureDate, returnDate, travellerAges, options, cover} = form;
    const traverlersNumber = travellerAges.length;
    const returnDateFormated = moment(returnDate, 'YYYY-MM-DD');
    const departureDateFormated = moment(departureDate, 'YYYY-MM-DD');
    const daysNumber = returnDateFormated.diff(departureDateFormated, 'days');
    return quote * daysNumber * traverlersNumber;
}
