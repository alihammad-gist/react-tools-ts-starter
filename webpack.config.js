module.exports = {
	context: __dirname,
	entry: "./src/index",
	output: {
		path: "./dist/assets",
		filename: "bundle.js",
		publicPath: "/assets/"
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel', // 'babel-loader' is also a legal name to reference
			query: {
				presets: ['react', 'es2015']
			}
		}, {
			test: /\.tsx?$/,
			loaders: ['babel?presets[]=react,presets[]=es2015', 'ts']
		}, {
			test: /(\.scss|\.css)$/,
			loaders: ['style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss', 'sass?sourceMap']
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.css', '.scss', '.ts', '.tsx', '.json'],
		moduleDirectories: [
			__dirname + 'node_modules'
		]
	},
	resolveLoader: {
		extensions: ['', '.js', '.jsx', '.css', '.scss', '.ts', '.tsx', '.json'],
		moduleDirectories: [
			__dirname + 'node_modules'
		]
	}
}