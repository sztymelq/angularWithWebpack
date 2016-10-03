const airportModelFactory = {
    newInstance
};

module.exports = airportModelFactory;

function newInstance(data) {
    const airport = Object.assign({}, data);
    return airport;
}