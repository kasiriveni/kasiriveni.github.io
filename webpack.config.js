const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: ['babel-polyfill', './src/js/index.js'],
	output: {
		path: path.resolve(__dirname),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname),
		},
		compress: true,
		port: 8080,
		open: true,
		historyApiFallback: true, // Serve the root HTML file
	},
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
};
