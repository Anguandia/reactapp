const dotenv = require('dotenv');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const sourcePath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

dotenv.config();

module.exports = (env) => ({
  mode: env.environment,
  devServer: {
    contentBase: distPath,
    host: process.env.HOST,
    port: process.env.PORT,
    historyApiFallback: true,
    overlay:
      env.environment === 'development'
        ? { errors: true, warnings: true }
        : {},
  },
  entry: [path.join(sourcePath, './index.js')],
  output: {
    publicPath: '/',
    path: distPath,
    filename: 'js/[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {},
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, './index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
});
