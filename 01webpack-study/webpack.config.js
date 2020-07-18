
// 由于 webpack 是基于Node进行构建的，所有，webpack的配置文件中，任何合法的Node代码都是支持的
var path=require('path')
// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
// 如果要配置插件，需要在导出的对象中，挂载一个 plugins 节点
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
	entry:path.join(__dirname,'./src/main.js'),
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js'
	},
	plugins: [ // 所有webpack  插件的配置节点
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
      filename: 'index.html' // 设置生成的内存页面的名称
    })
  ],
  module:{
  	rules:[
  	{test:/\.css$/,use:['style-loader','css-loader']},
  	{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
  	      // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的
    {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7631'},
    

   
  	]
  }
}
