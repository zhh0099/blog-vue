const path = require('path');
// production 将已存在的单个文件或整个目录复制到构建目录。
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// production 将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// production 优化和压缩 CSS。
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
// production 压缩js
const TerserWebpackPlugin = require('terser-webpack-plugin');
// production 优化和压缩图片
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CompressionPlugin = require('compression-webpack-plugin');
// 打包体积分析
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// 打包速度
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const getStyleLoaders = data => {
  return [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['postcss-preset-env'],
        },
      },
    },
    data,
  ].filter(Boolean);
};
// webpack配置
const config = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].chunk.js',
    clean: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      // css
      {
        test: /\.css$/,
        use: getStyleLoaders(),
      },
      {
        test: /\.less$/,
        use: getStyleLoaders('less-loader'),
      },
      {
        test: /\.s[ac]ss$/,
        use: getStyleLoaders('sass-loader'),
      },
      {
        test: /\.styl$/,
        use: getStyleLoaders('stylus-loader'),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      title: 'blog',
      CDN: {
        css: [
          'https://unpkg.com/element-plus@2.2.2/dist/index.css',
          'https://unpkg.com/element-plus@2.2.2/theme-chalk/display.css',
        ],
        js: [
          'https://unpkg.com/vue@3.2.36/dist/vue.global.prod.js',
          'https://unpkg.com/vue-router@4.0.15/dist/vue-router.global.prod.js',
          'https://unpkg.com/vuex@4.0.2/dist/vuex.global.prod.js',
          'https://unpkg.com/element-plus@2.2.2/dist/index.full.min.js',
        ],
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, '../dist'),
          toType: 'dir',
          noErrorOnMissing: true,
          globOptions: {
            // 忽略index.html文件
            ignore: ['**/.DS_Store', '**/index.html'],
          },
          info: {
            minimized: true,
          },
        },
      ],
    }),
    process.env.ANALYZER && new BundleAnalyzerPlugin(),
    new CompressionPlugin(),
  ].filter(Boolean),
  optimization: {
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin({
        minify: TerserWebpackPlugin.esbuildMinify,
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              [
                'svgo',
                {
                  plugins: [
                    'preset-default',
                    'prefixIds',
                    {
                      name: 'sortAttrs',
                      params: {
                        xmlnsOrder: 'alphabetical',
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  },
};
const config_SpeedMeasurePlug = smp.wrap(config);

config_SpeedMeasurePlug.plugins.push(
  new VueLoaderPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:10].css',
    chunkFilename: 'css/[name].[contenthash:10].chunk.css',
  })
);
module.exports = config_SpeedMeasurePlug;
