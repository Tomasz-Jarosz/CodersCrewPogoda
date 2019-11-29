const path = require("path");
module.exports = {
    entry: {
        app: ['./src/app.js', './src/fw.js', './src/moment.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    }
}