const path = require('path');

module.exports = {
	entry: './src/index.ts',
	devtool: 'inline-source-map',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(svg|eot|woff|ttf|svg|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: "fonts/[name].[ext]"
						}
					}
				]
			}
		],
	},
	resolve: {
		extensions: ['.ts', '.js', '.css'],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'docs'),
	},
	watch: true
};