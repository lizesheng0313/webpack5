const { merge } = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common')
const { HotModuleReplacementPlugin } = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(webpackCommonConfig, {
  mode: 'development',
  cache: {
    type: 'memory',
  },
  devServer: {
    open: true,
    port: 3000,
    historyApiFallback: true,
    compress: true, // 启动gzip压缩
    hot: true, // 热更新
  },
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
})
