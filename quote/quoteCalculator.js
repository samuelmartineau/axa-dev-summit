const moment = require('moment');
const countries = require('../country');

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

function isYoungAdult( age ){
  return ( age >= 18 && age <= 24 );
}

function familyComposition( travellerAges ){
  return travellerAges.reduce((acc, age) => {
        if (isNaN(age)) {
          throw 'issue';
        }
        if (age < 18) {
            acc.kids ++;
        } else {
            acc.kids ++;
        }
        if( isYoungAdult(age) ){
          acc.youngAdult ++;
        }
        return acc
    }, {"kids": 0, "adults": 0, "youngAdult": 0});
}

function isTravellingAlone( family ){
  return ( family.kids + family.adult == 1);
}

function tooManyKids( family ){
  return ( family.adults < family.kids );
}

function hasFiveYoungAdults( family ){
  return ( family.adults >= 5 );
}

function discountFamilyComposition( family ){
  var discount = 1;

  if( isTravellingAlone( family ) ) {
    discount *= 1.05;
  }

  if( hasManyYoungAdults( family ) ) {
    discount *= 0.9;
  }

  if( tooManyKids( family ) ){
    discount *= 1.15;
  } else {
    //well balanced family
    if( family.kids >= 2 ){
      discount *= 0.80;
    }
  }
  return discount;
}

function getNumberOfDays( daysNumber ){
  numberOfDays = daysNumber;
  if( numberOfDays > 0 && numberOfDays <= minimalWeek ){
    numberOfDays = 7;
  } else {
      numberOfWeeks = Math.floor( daysNumber / 7 );
      if( numberOfDays % 7 < payDayOfTheWeek ){
          numberOfDays = numberOfWeeks * 7;
      } else {
        numberOfDays = (numberOfWeeks + 1) * 7;
      }
  }
  return numberOfDays;
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
    daysNumber = getNumberOfDays( daysNumber );
    const countryFee = countries[country.toUpperCase()];

    quoteWithoutDiscount = Math.round((quotes[cover.toUpperCase()] * countryFee  * ageFees * daysNumber) * 100) / 100;
    quote = quoteWithoutDiscount * discountFamilyComposition( family );
    return quoteWithoutDiscount;
}
