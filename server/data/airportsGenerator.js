const fs = require('fs');
const airportsData = require('./airportsData');
const airportModels = {};

generate();

function generate() {
    let index = 0;
    airportsData.forEach((airport) => {
        airport.departures = generateRandomFlights();
        airport.index = index++;

        airportModels[airport.city] = airport;
    });


    console.log(JSON.stringify(airportModels));
    fs.writeFile('airports.json', JSON.stringify(airportModels, null, 4));
}

function generateRandomFlights() {
    const maxFlightsQuantity = 10;
    const flights = [];

    for (let i = 0; i < maxFlightsQuantity; i++) flights.push(generateFlight());
    return flights;
}

function generateFlight() {
    const randomArrivalDate = randomDateFromRange(new Date(), new Date(2017, 1, 1));
    const randomFlightLength = randomInt(24);

    return {
        destination: pickRandomCity(airportsData).city,
        arrivalDate: randomArrivalDate,
        departureDate: computeDepartureDate(randomArrivalDate, randomFlightLength)
    }
}

function pickRandomCity(cities) {
    return cities[Math.floor(Math.random() * cities.length)];
}

function computeDepartureDate(arrival, flightLength) {
    return new Date(arrival.getTime() + flightLength * 3600 * 1000);
}

function randomDateFromRange(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomInt(range) {
    return Math.floor(Math.random() * range);
}