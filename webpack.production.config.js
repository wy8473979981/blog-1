//导入Node.js的path模块,主要用来转换成绝对路径,比如path.resolve(__dirname, 'build')
var path = require('path');
//导入webpack整个模块
//也可以不导入webpack整个模块,而值导入用到的内置插件模块
//比如 var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
//这样后面使用方式为 new CommonsChunkPlugin
//否则为new webpack.optimize.CommonsChunkPlugin
var webpack = require('webpack');
var React = require('react');
var ReactDOM = require('react-dom');

//导入ExtractTextPlugin插件,作用提取代码中的css生成独立的CSS文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//导入HtmlWebpackPlugin插件,作用按需求生成html页面,想用好,挺麻烦的,可以不用
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
	entry: {
		main: [path.resolve(__dirname, 'src/js/main.js')], //使用绝对路径
		vendors: ['react', 'react-dom']
	},

	output: {
		path: path.resolve(__dirname, 'dist/js'),
		//publicPath: 'public',//加这个模板里文件索引会在这个目录下 比如link script
		filename: "[name].js" //[name].[id].[hash].js 加上id和hash可以避免缓存问题
	},
	resolve: {
		//自行补全路径中文件的后缀, 第一个是空字符串，对应不需要后缀的情况
		extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
	},

	module: {
		loaders: [{
				test: /\.jsx?$/, //正则表达式,匹配的文件名则使用这个加载器
				exclude: /node_modules/, //匹配的目录则排除
				loader: 'babel', //如果同一文件需要多个loaders处理,也就是使用loaders: ['loader',...] 数组形式,loader的参数不能使用query:{}写法了。只能用拼接字符串写法。
				query: {
					presets: ['es2015', 'react']
				}
			}, {
				test: /\.css$/,
				loader: ExtractTextPlugin.extract( //ExtractTextPlugin插件写法用于生成独立的css文件,用于external link形式
					'style-loader',
					'css-loader', {
						publicPath: "./" //生成的独立CSS文件中的url图片地址的publicPath,通常JS中的publicPath不一样,如果一样可以不设置
					}
				)
			},

			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: //[
					'url-loader?limit=81&name=../imgages/[name].[hash].[ext]', //如果图片小于limit值直接生成`base64` 格式的`dataUrl`,否则输出图片,name参数指定输出目录和图片名
				//'image-webpack-loader?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
				//]
			}
		]
	},
	//script引入js类库，通过require或import的方式来使用，却不希望webpack把它编译到输出文件中。
	//比如不想这么用 const $ = window.jQuery 而是这么用 const $ = require("jquery") or import $ from "jquery"; 则配置"jquery": "jQuery"
	//键名是require或from时的字符串,键值是js内的全局变量名
	//	externals: {
	//		'react': 'React',
	//		'react-dom': 'ReactDOM'
	//	},
	plugins: [
		new ExtractTextPlugin('../css/[name].css'), //输出独立的css文件,用于external link形式,如果有多个入口JS共用的CSS,会生成commons.css
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false
			}
			 //,except: ['$super', '$', 'exports', 'require']    //排除关键字
		}), //压缩文件
		new webpack.optimize.CommonsChunkPlugin({ //把entry中配置的多个js中共用代码提取生成为单个js
			name: "vendors", //如果此时的值 跟 entry的键 吻合 则在本身的基础上生成 自身与entry共同部分的js文件  可以写成数组的形式['','']
			filename: "vendors.js"
		}),
		new HtmlWebpackPlugin({ //按需求生成HTML页面
			template: path.resolve(__dirname, 'src/templates/index.html'), //template 模板位置
			inject: 'body', //inject: 'body' js插入在body元素内部的最后
			chunks: ['vendors', 'main'], //chunks 对应入口文件名
			filename: 'index.html', //filename 生成的文件名,可以带上路径
			title: '最美奥运脸'
			}), //在模板页中可以获得和使用这些数据,可以在模板页中使用<%= JSON.stringify(htmlWebpackPlugin) %>;输出查看所有可用的数据

		new webpack.ProvidePlugin({ //ProvidePlugin的作用就是在开发代码内不需要require('react')或import ... from ... 也能使用React 
			React: 'react',
			ReactDOM: 'react-dom'
		}),

	],
	devServer: { //webpack-dev-server的配置, 通常弄成独立的文件,比如server.js, //或者使用命令行形式,比如npm scripts命令行形式,类似webpack-dev-server -d --inline --hot
		//     contentBase: './',
		//   host: 'xxx.com',
		inline: true, //监控文件变化,自动重加载整个页面
		port: 7777
	},

};

module.exports = config;