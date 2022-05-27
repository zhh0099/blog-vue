const path = require('path');
const { DefinePlugin } = require('webpack');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// production 将已存在的单个文件或整个目录复制到构建目录。
const CopyPlugin = require('copy-webpack-plugin');
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
// const AutoImport = require('unplugin-auto-import/webpack');
// const Components = require('unplugin-vue-components/webpack');
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
// 打包体积分析
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// 打包速度
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
// 打包进度条
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const getStyleLoaders = data => {
  return [
    isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
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
  mode: isProduction ? 'production' : 'development',
  entry: './src/main.js',
  output: {
    path: isProduction ? path.resolve(__dirname, 'dist') : undefined,
    filename: isProduction ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
    chunkFilename: isProduction ? 'js/[name].[contenthash:8].chunk.js' : 'js/[name].chunk.js',
    clean: true,
  },
  devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    hot: true, // 开启HMR
    historyApiFallback: true, // 解决前端路由刷新404问题
  },
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
      // js
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          // {
          //   loader: 'thread-loader',
          //   options: {
          //     workers: require('os').cpus().length - 1,
          //   },
          // },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
        ],
      },
      // vue
      {
        test: /\.vue$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'vue-loader',
            options: {
              // 开启缓存
              cacheDirectory: path.resolve(__dirname, 'node_modules/.cache/vue-loader'),
            },
          },
        ],
      },
      // image
      {
        test: /\.(jpe?g|png|gif|webp|svg|avif)(\?.*)?$/,
        type: 'asset',
        include: path.resolve(__dirname, 'src/assets'),
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          // 输出到 font 目录中，占位符 [name] 保留原始文件名，
          // [hash] 防止出现相同文件名无法区分，[ext] 拿到后缀名
          filename: 'img/[name].[hash:8][ext][query]',
        },
      },
      // media
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'media/[name].[hash:8][ext]',
        },
      },
      // font
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset/resource',
        generator: {
          // 输出到 font 目录中，占位符 [name] 保留原始文件名，
          // [hash] 防止出现相同文件名无法区分，[ext] 拿到后缀名
          filename: 'fonts/[name].[hash:10][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new ProgressBarPlugin({
      format: `:msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`,
    }),
    new EslintWebpackPlugin({
      context: path.resolve(__dirname, 'src'),
      exclude: 'node_modules',
      cache: true,
      cacheLocation: path.resolve(__dirname, 'node_modules/.cache/.eslintcache'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      title: 'blog',
    }),
    // isProduction &&
    //   new MiniCssExtractPlugin({
    //     filename: 'css/[name].[contenthash:10].css',
    //     chunkFilename: 'css/[name].[contenthash:10].chunk.css',
    //   }),
    isProduction &&
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public'),
            to: path.resolve(__dirname, 'dist'),
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
    // new VueLoaderPlugin(),
    // cross-env定义的环境变量给打包工具使用
    // DefinePlugin定义环境变量给源代码使用，从而解决vue3页面警告的问题
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      BASE_URL: '""',
    }),
    process.env.ANALYZER && new BundleAnalyzerPlugin(),
    isProduction && new CompressionPlugin(),
    // 按需加载element-plus
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ].filter(Boolean),
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vue: {
          test: /[\\/]node_modules[\\/]vue(.*)?[\\/]/,
          name: 'vue-chunk',
          priority: 40,
        },
        elementPlus: {
          test: /[\\/]node_modules[\\/]element-plus[\\/]/,
          name: 'elementPlus-chunk',
          priority: 30,
        },
        libs: {
          test: /[\\/]node_modules[\\/]/,
          name: 'libs-chunk',
          priority: 20,
        },
      },
    },
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}.js`,
    },

    minimize: isProduction,
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
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.vue', '.json', '.wasm'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    symlinks: false,
  },
  cache: {
    type: 'filesystem', // 使用文件缓存
  },
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    'element-plus': 'ElementPlus',
  },
  performance: false,
};
const config_SpeedMeasurePlug = smp.wrap(config);
isProduction &&
  config_SpeedMeasurePlug.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:10].css',
      chunkFilename: 'css/[name].[contenthash:10].chunk.css',
    }),
    new VueLoaderPlugin()
  );
module.exports = config_SpeedMeasurePlug;
