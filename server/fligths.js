const flightModelFactory = {
    newInstance
};

module.exports = flightModelFactory;

function newInstance(data) {
    const flight = Object.assign({}, data);
    return flight;
}