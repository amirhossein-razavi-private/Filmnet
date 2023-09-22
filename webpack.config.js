const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { filmnet: './src/index.tsx' },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules|\.d\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              noEmit: false,
            },
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader',
          'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|pdf)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /node_modules/,
          priority: 10,
          enforce: true,
        },
        default: {
          minChunks: 4,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
    ],
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    port: '3000',
    historyApiFallback: true,
  },
  performance: {
    maxAssetSize: 1000000,
  },
};
