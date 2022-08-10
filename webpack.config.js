const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/aula0018-webpack/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.front.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'front-end', 'assets', 'js'),
  },
  devtool: 'source-map',
}
