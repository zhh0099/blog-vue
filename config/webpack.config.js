const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config.common');
const productionConfig = require('./webpack.config.prod');
const developmentConfig = require('./webpack.config.dev');

const isProduction = process.env.NODE_ENV === 'production';

let config = {};
if (isProduction) {
  config = merge(commonConfig, productionConfig);
  
} else {
  config = merge(commonConfig, developmentConfig);
}

module.exports = config;
