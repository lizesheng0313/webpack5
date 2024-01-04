const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html
const webpack = require('webpack')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index'),
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name]-[chunkhash:8].js',
    assetModuleFilename: 'assets/[contenthash][ext][query]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.ts|tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          {
            // 从右到左的执行
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['postcss-preset-env'], // 兼容最新css样式,添加浏览器前缀
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: isProd ? 'asset' : 'assets/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        type: isProd ? 'asset' : 'assets/resource',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV), // 设置全局环境变量
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'index.html'), // 生成index.html
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.join(__dirname, '..', 'src'),
      '@assets': path.join(__dirname, '..', 'src/assets'),
      '@components': path.join(__dirname, '..', 'src/components'),
      '@pages': path.join(__dirname, '..', 'src/pages'),
    },
  },
}
