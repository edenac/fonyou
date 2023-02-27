const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].[contenthash].js",
		assetModuleFilename: "assets/images/[hash][ext]",
		clean: true,
	},
	resolve: {
		extensions: [".js"],
		alias: {
			pages: path.resolve(__dirname, "src/pages"),
			utils: path.resolve(__dirname, "src/utils"),
			styles: path.resolve(__dirname, "src/styles"),
			images: path.resolve(__dirname, "src/static/images/"),
			templates: path.resolve(__dirname, "src/templates"),
			components: path.resolve(__dirname, "src/components"),
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.pug$/,
				use: {
					loader: "pug-loader",
					options: {
						pretty: true,
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new HtmlPlugin({
			template: "./public/index.pug",
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
		}),
	],
};
