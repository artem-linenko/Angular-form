const webpack = require('webpack');

module.exports = {
	context: __dirname,
	entry: {
		selection_wizard: './src/scripts/index.js'
	},
	output: {
		path: __dirname + '/src/build',
		filename: 'register.js',
		publicPath: '/src/build'
	},
	module: {
        loaders: [
            {test: /\.js$/, loader: 'babel'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    },
    watch: true,
    devtool: "eval"
}