const moment = require('moment');

const quote = 1.8;

module default (form) => {
    const {country, departureDate, returnDate, travellerAges, options, cover} = form;
    const traverlersNumber = travellerAges.length;
    const daysNumber = moment(departureDate, 'yyyy-mm-dd').diff(moment(returnDate, 'yyyy-mm-dd'), 'days');
    return quote * daysNumber * traverlersNumber;
}
