const { merge } = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 抽离css文件
const CssMinimizerWebpackPlguin = require('css-minimizer-webpack-plugin') // 压缩css

module.exports = merge(webpackCommonConfig, {
  mode: 'production',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename], // 使用文件缓存配置文件发生变化缓存失效
    },
  },
  optimization: {
    // 允许你通过提供一个或多个定制过的TerserPlugin实例， 覆盖默认压缩工具(minimizer) 所以配置了这个后我们需要重新指定 terser-webpack-plugin 为压缩工具
    minimizer: [
      `...`, // webpack5开箱即带有最新版本的 terser-webpack-plugin 使用`...`即代表使用该插件来压缩JS
      new CssMinimizerWebpackPlguin(), // 压缩css
    ],
    splitChunks: {
      chunks: 'all', // 处理哪种chunk，可选值为：all、async、initial（all包括异步和非异步）
      maxInitialRequests: 10, // 入口点的最大并行请求数。
      // 缓存组，该组内配置可继承、覆盖splitChunks中的配置
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/, // [\\/] 是为了分别匹配 win、Unix系统路径
          // 拆分 vendor，自定义name（vendor默认是合并为一个 chunk）
          name(module) {
            // 把 npm 库拆分独立打包
            const packageNameMatch = module.context.match(/[\\/]node_modules[\\/](?:\.pnpm[\\/])?(.*?)([\\/]|$)/)
            const packageName = packageNameMatch ? packageNameMatch[1].split('@')[0] : null
            return `${packageName}`
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
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
          MiniCssExtractPlugin.loader,
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
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.[contenthash:8].css', // 生成独立的文件 css抽离
    }),
  ],
})
