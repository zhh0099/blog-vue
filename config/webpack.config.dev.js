const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getStyleLoaders = data => {
  return [
    'vue-style-loader',
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
module.exports = {
  mode: 'development',
  output: {
    path: undefined,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
    clean: true,
  },
  devtool: 'eval-cheap-module-source-map',
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
          'https://unpkg.com/vue@3.2.36/dist/vue.runtime.global.js',
          'https://unpkg.com/vue-router@4.0.15/dist/vue-router.global.prod.js',
          'https://unpkg.com/vuex@4.0.2/dist/vuex.global.prod.js',
          'https://unpkg.com/element-plus@2.2.2/dist/index.full.min.js',
        ],
      },
    }),
    new VueLoaderPlugin(),
    // 按需加载element-plus
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
};
