var path = require("path")
module.exports = {
    entry: {
        index: ['./src/index']
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-bootstrap': 'ReactBootstrap'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.scss/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.(css)$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./node_modules/compass-mixins/lib")]
    },
    plugins: []
}