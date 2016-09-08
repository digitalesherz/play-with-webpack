module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.jsx",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
