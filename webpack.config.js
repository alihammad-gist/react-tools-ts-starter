module.exports = {
	context: __dirname,
	entry: "./src/index",
	output: {
		path: "./dist/assets",
		filename: "bundle.js",
		publicPath: "/assets/"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel', // 'babel-loader' is also a legal name to reference
				query: {
					presets: ['react', 'es2015']
				}
			},
			{ 
				test: /\.tsx?$/, 
				loader: 'babel-loader?presets[]=react,presets[]=es2015!ts-loader'
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css', '.scss', '.ts', '.tsx']
	},
	resolveLoader: {
		moduleDirectories: [
			'./node_modules'
		]
	}
}