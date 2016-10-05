const config = {
    entry: './client/index',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};

module.exports = config;
