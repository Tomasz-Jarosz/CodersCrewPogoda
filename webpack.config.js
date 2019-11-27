const path = require("path");
module.exports = {
    entry: {
        app: ['./src/app.js', './src/fw.js', './moment.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    }
}