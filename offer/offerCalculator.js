

function addCar (offers, country) {
    if( /*country == "US"*/ true ){
        offers.push( "car rental" );
    }
    return offers;
}

function getFamilyComposition( travellerAges ){
    return { "adults": 0, "kids": 0 };
}

function manageChildren( offers, travellerAges ){
    return offers;
}


module.exports = (form) => {
    var response = { "quote": 0, "offers": ["insurance"] };
    const {
        country,
        departureDate,
        returnDate,
        travellerAges,
        options,
        cover
    } = form;
    
    response.offers = addCar(response.offers, country);
    response.offers = manageChildren(response.offers, travellerAges);

    return response;
}
