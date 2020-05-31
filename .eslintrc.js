module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },

  env: {
    browser: true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    // 'eslint:recommended',


    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    'plugin:vue/essential', // Priority A: Essential (Error Prevention)
    // 'plugin:vue/strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    // 'plugin:vue/recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    'standard'

  ],

  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    'vue',

  ],

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true,
    Capacitor: true,
    chrome: true
  },

  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',

    'prefer-promise-reject-errors': 'off', // Expected the Promise rejection reason to be an Error
    'no-new': 'off', // Do not use 'new' for side effects
    'keyword-spacing': 'off', //Expected space(s) after "if"
    'no-useless-escape': 'off', // Unnecessary escape character
    'comma-spacing': 'off', // A space is required after ','
    'no-tabs': 'off',
    'key-spacing': 'off', // Missing space before value for key
    'one-var': 'off', // Split initialized 'var' declarations into multiple statements
    'generator-star-spacing': 'off', // allow async-await
    'no-unneeded-ternary': 'off', // Unnecessary use of boolean literals in conditional expression 2>1?true:false
    'yoda': 'off', // Expected literal to be on the right side of !=   if (null != result && undefined != result)
    'no-extra-parens': 'off', // 禁止不必要的括号
    'no-extra-semi': 'off', // 禁止不必要的分号
    'semi': 'off', // 语句强制分号结尾
    'eqeqeq': 'off', //不必须===  !==
    'no-ternary': 'off', // 不允许使用三元操作符
    'no-multiple-empty-lines': 'off', // 禁止多个空行
    'no-trailing-spaces': 'off', // 禁用行尾空格
    'space-before-blocks': 'off', // 强制在块之前使用一致的空格
    'space-before-function-paren': 'off', // 强制在 function的左括号之前使用一致的空格
    'space-in-parens': 'off', // 强制在圆括号内使用一致的空格
    'space-infix-ops': 'off', // 要求操作符周围有空格
    'space-unary-ops': 'off', // 强制在一元操作符前后使用一致的空格
    'spaced-comment': 'off', // 强制在注释中 // 或 /* 使用一致的空格
    'quotes': 'off', // 强制使用一致的反勾号、双引号或单引号
    'indent': 'off', //缩进
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-multi-spaces': 'off',
    'no-mixed-operators': 'off',
    'comma-dangle': 'off',
    'block-spacing': 'off',
    'no-irregular-whitespace': 'off',
    'camelcase': 'off',
    'keyword-spacing': 'off',
    'curly': 'off',
    'eol-last': 'off', // 文件末尾强制换行
    'vue/require-v-for-key': 'off', // Elements in iteration expect to have 'v-bind:key' directives

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
