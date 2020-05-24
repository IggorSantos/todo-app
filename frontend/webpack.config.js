const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  entry: './src/index.jsx',
  output:{
    path:__dirname + './public',
    filename:'./app.js'
  },
  devServer:{
    port:8080,
    contentBase:'./public',
  },
  resolve:{
    extensions:['*','.js','.jsx'],
    /*alias:{
      modules:__dirname + './node_modules'
    }*/
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude:/node_modules/,
        use:['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test:/\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        loader:'file-loader'
      }
    ]
  }
}
