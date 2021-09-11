const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: resolve('src/main.js'),
  module: {
    rules: [
      // 处理 es6 语法
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: resolve('src'),
        exclude: /node_modules/
      },
      // 使用 postcss-loader 必须在根目录创建一个 postcss.config.js
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10240,
            esModule: false,
            name: '[name]-[hash:8].[ext]',
            outputPath: 'images'
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin()
  ],
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }

}

