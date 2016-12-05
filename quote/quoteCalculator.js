const moment = require('moment');

const quotes = { BASIC: 1.8, EXTRA: 2.4, PREMIUM: 4.2 };

module.exports = (form) => {
    const {country, departureDate, returnDate, travellerAges, options, cover} = form;
    const traverlersNumber = travellerAges.length;
    const returnDateFormated = moment(returnDate, 'YYYY-MM-DD');
    const departureDateFormated = moment(departureDate, 'YYYY-MM-DD');
    
    var options = 0;

    if(options.length > 0)
    {
        return 0;
    }

    var daysNumber = returnDateFormated.diff(departureDateFormated, 'days');

    if (daysNumber < 7)
    {
        daysNumber = 7;
    }

    return quotes[cover] * daysNumber * traverlersNumber;
}
