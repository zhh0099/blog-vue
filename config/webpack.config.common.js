const path = require('path');
const { DefinePlugin } = require('webpack');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
// 打包进度条
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// webpack配置
module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
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
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'vue-loader',
            options: {
              // 开启缓存
              cacheDirectory: path.resolve(__dirname, '../node_modules/.cache/vue-loader'),
            },
          },
        ],
      },
      // image
      {
        test: /\.(jpe?g|png|gif|webp|svg|avif)(\?.*)?$/,
        type: 'asset',
        include: path.resolve(__dirname, '../src/assets'),
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
      context: path.resolve(__dirname, '../src'),
      exclude: 'node_modules',
      cache: true,
      cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache'),
    }),
    
    // cross-env定义的环境变量给打包工具使用
    // DefinePlugin定义环境变量给源代码使用，从而解决vue3页面警告的问题
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      BASE_URL: '""',
    }),
  ],
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
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.vue', '.json', '.wasm'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
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
