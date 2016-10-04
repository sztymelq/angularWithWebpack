const fs = require('fs');
const airportsData = require('./airportsData');
const airportModels = {};

airportsData.forEach((airport) => {
    airport.flights = generateRandomFlights();
    airportModels[airport.city] = airport;
});


console.log(JSON.stringify(airportModels));
fs.writeFile('airports.json', JSON.stringify(airportModels, null, 4));


function generateRandomFlights() {
    const maxFlightsQuantity = 10;
    const flights = [];

    for (let i = 0; i < maxFlightsQuantity; i++) flights.push(generateFlight());
    return flights;
}

function generateFlight() {
    const randomArrivalDate = randomDateFromRange(new Date(), new Date(2018, 1, 1));
    const randomFlightLength = randomInt(24);

    return {
        destinationName: pickRandomCity(airportsData).CapitalName,
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