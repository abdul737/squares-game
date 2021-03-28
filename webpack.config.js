const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

function buildConfig(env, options) {
  if (options.mode === 'development' || options.mode === 'production') {
    return require('./webpack/' + options.mode + '.js');
  } else {
    console.log("Wrong webpack build parameter. Possible choices: 'dev' or 'prod'.")
  }
}

module.exports = (env, options) => ({
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "public", "index.html"),
  })],
  ...buildConfig(env, options),
});