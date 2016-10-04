const fs = require('fs');
const airportsData = require('./airportsData');
const airportModelFactory = require('./airportModel');
const cityNames = require('../data/cities');

const airports = {};
const airportModel = {};

//cityNames.forEach((cityName, index) => {
//    const airportModel = airportModelFactory.newInstance(airportsData[index]);
//    airportModel.city = cityName;
//    airports[cityName] = airportModel;
//});
//
//
//console.log(JSON.stringify(airports));
//
//fs.writeFile('airportsDataExported.json', JSON.stringify(airports, null, 4));

const result = generateRandomFlights();
console.log(result);


function generateRandomFlights() {
    const maxFlightsQuantity = 10;
    const flights = {};

    for (let i = 0; i < maxFlightsQuantity; i++) {
        if (!flights.randomCityName) flights[getRandomCity()] = generateFlight(getRandomCity());
    }

    return flights;
}

function getRandomCity() {
    return cityNames[randomInt(cityNames.length)];
}

function generateFlight(destination) {
    const randomFlightLength = randomInt(24);
    const randomArrivalDate = randomDateFromRange(new Date(), new Date(2000, 1, 1));

    return {
        destination,
        arrivalDate: randomArrivalDate,
        departureDate: new Date(randomArrivalDate.getTime() + randomFlightLength * 3600 * 1000)
    }
}

function randomDateFromRange(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomInt(range) {
    return Math.floor(Math.random() * range);
}