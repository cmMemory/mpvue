// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
     // allow async-await
     'generator-star-spacing': 'off',
     'no-debugger': 'off',
     // 四个空格缩进
     'indent': ['error', 4, {'SwitchCase': 1}],
     // 使用let, const代替var声明变量
     'no-var': ['error'],
     // 要求或禁止 var 声明中的初始化
     'init-declarations': 2,
     // 强制使用单引号
     'quotes': ['error', 'single'],
     // 要求使用分号
     'semi': ['error', 'always'],
     // 禁止不必要的分号
     'no-extra-semi': 'error',
     // 函数声明时'('前是是否加一个空格
     'space-before-function-paren': ["error", "never"],
     // 分支判断时，始终使用大括号
     'curly': ['error', 'all']
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    getApp: true,
    getPage: true,
    requirePlugin: true
  }
}
