const path = require('path')
const publicPath = path.resolve(__dirname, 'public');

module.exports = {
	entry: './App.js',
	// entry: './playground/hoc.js',
	mode: 'development',
	output: {
		path: publicPath,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test: /\.s?css$/,
				use:[
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: publicPath,
		port: 9000,
		historyApiFallback: true
	}
};

