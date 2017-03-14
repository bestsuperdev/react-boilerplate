var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var autoprefixer = require('autoprefixer');
// var precss = require('precss');
// var cssgrace = require('cssgrace');
// var filterGradient = require('postcss-filter-gradient');
// var atImport = require("postcss-import");
// var postcssUrl = require("postcss-url");
module.exports = {
    entry: {
        main : path.join(__dirname,"./examples/scripts/main.js")   
    },
    output: {
        path: path.join(__dirname,'hot'),
        // publicPath: "/bundles/",
        filename: "[name].[hash].bundle.js",
        chunkFilename: "[id].[hash].chunk.js"
    },
    module: {
        rules : [
			{test : /\.less$/, use : ['style-loader','css-loader',{loader : 'postcss-loader', options : {
				plugins : function(){
					return [ require('autoprefixer')]
				}
			}},'less-loader']},
			{test : /\.css$/, use : ['style-loader','css-loader']},
			{test : /\.jsx?$/, loader : 'babel-loader' , exclude: /node_modules/},
			{test: /\.(png|jpg|jpeg|gif)$/, use:[{loader : 'url-loader', options : {limit : 30000}}]},
			{test: /\.(svg|ttf|eot|svg|woff(\(?2\)?)?)(\?[a-zA-Z_0-9.=&]*)?(#[a-zA-Z_0-9.=&]*)?$/, loader : 'file-loader'}
		]
    },

    resolve : {
        modules: [path.join(__dirname, "./"),"node_modules"]
    },

    // postcss: function () {
    //     return [require('autoprefixer') , require('postcss-clearfix')];
    // },
    plugins : [ 
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
			debug: true
		}),
        new webpack.DefinePlugin({
            "process.env" : {
                NODE_ENV : JSON.stringify("development")
            }
        }),
        new HtmlWebpackPlugin({
			template : path.join(__dirname,'./examples/index.html'),
			inject: true
		})
    ],
    devtool :'#inline-source-map'
    //devServer 配置在webpack.dev.server.js 中
};