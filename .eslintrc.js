module.exports = {
  root: true,
  env: {
    node: true,
  },
  // 继承了vue/vue3 以及eslint官方规则
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  // 解析器配置，处理报错
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
};
