// 导出 ESLint 配置对象
module.exports = {
  root: true, // 根文件的配置
  // 解析器选项
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module', // 模块类型为 ES 模块
    requireConfigFile: false,
  },
  // 环境配置
  env: {
    browser: true, // 浏览器环境
    node: true, // Node.js 环境
    es6: true, // ES6 语法支持
  },

  // 扩展配置
  extends: ['eslint:recommended'],
  // 规则配置
  rules: {
    // JavaScript 相关规则
    'accessor-pairs': 2, // 强制 getter/setter 成对出现在对象中
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ], // 箭头函数的间距配置

    'block-spacing': [2, 'always'], // 单行代码块的间距配置
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ], // 大括号风格配置
    camelcase: [
      0,
      {
        properties: 'always',
      },
    ], // 变量命名的风格配置
    'comma-dangle': [0], // 对象字面量项尾不能有逗号
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ], // 逗号前后的空格配置
    'comma-style': [2, 'last'], // 逗号风格配置
    'constructor-super': 2, // constructor 中调用 super 的规则
    curly: [2, 'multi-line'], // 大括号的风格配置
    'dot-location': [2, 'property'], // 成员表达式换行时的点的位置
    'eol-last': 2, // 文件末尾需要换行
    eqeqeq: [0, 'always', { null: 'ignore' }], // 使用严格相等
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ], // generator 函数中 * 号的间距配置
    'handle-callback-err': [2, '^(err|error)$'], // 处理回调中的错误对象名配置
    indent: [
      'off',
      2,
      {
        SwitchCase: 1,
      },
    ], // 缩进配置
    'jsx-quotes': [2, 'prefer-single'], // JSX 中的引号配置
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ], // 对象字面量中键和值之间的间距配置
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ], // 关键字前后的空格配置
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ], // 构造函数首字母大写配置
    'new-parens': 2, // 调用构造函数时需要使用括号
    'no-array-constructor': 2, // 禁止使用 Array 构造函数
    'no-caller': 2, // 禁止使用 arguments.caller 或 arguments.callee
    'no-console': 'off', // 允许使用 console
    'no-class-assign': 2, // 禁止修改类声明的变量
    'no-cond-assign': 2, // 禁止在条件语句中使用赋值语句
    'no-const-assign': 2, // 禁止修改使用 const 声明的变量
    'no-control-regex': 0, // 允许正则表达式中的控制字符
    'no-delete-var': 2, // 禁止使用 delete 删除变量
    'no-dupe-args': 2, // 禁止在函数参数中出现重复命名的参数
    'no-dupe-class-members': 2, // 禁止类成员中出现重复的名称
    'no-dupe-keys': 2, // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': 2, // 禁止在 switch 语句中出现重复的 case 标签
    'no-empty-character-class': 2, // 禁止在正则表达式中出现空的字符集 []
    'no-empty-pattern': 2, // 禁止使用空的解构模式
    'no-eval': 2, // 禁止使用 eval()
    'no-ex-assign': 2, // 禁止对 catch 子句的参数重新赋值
    'no-extend-native': 2, // 禁止修改原生对象
    'no-extra-bind': 2, // 禁止不必要的函数绑定
    'no-extra-boolean-cast': 2, // 禁止不必要的布尔转换
    'no-extra-parens': [2, 'functions'], // 禁止不必要的括号
    'no-fallthrough': 2, // 禁止 switch 的 case 语句落空
    'no-floating-decimal': 2, // 禁止浮点小数点前后缺失数字
    'no-func-assign': 2, // 禁止对 function 声明重新赋值
    'no-implied-eval': 2, // 禁止使用隐式 eval()
    'no-inner-declarations': [2, 'functions'], // 禁止在嵌套的语句块中出现变量或 function 声明
    'no-invalid-regexp': 2, // 禁止在 RegExp 构造函数中出现无效的正则表达式
    'no-irregular-whitespace': 2, // 禁止在字符串和注释之外出现不规则的空白
    'no-iterator': 2, // 禁止使用 __iterator__ 属性
    'no-label-var': 2, // 禁止与变量同名的标签
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ], // 禁止使用标签语句
    'no-lone-blocks': 2, // 禁止不必要的嵌套块
    'no-mixed-spaces-and-tabs': 2, // 禁止混合使用空格和制表符
    'no-multi-spaces': 2, // 禁止多余的空格
    'no-multi-str': 2, // 禁止使用多行字符串
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
      },
    ], // 不允许多个空行

    'no-native-reassign': 2, // 禁止对原生对象或只读的全局对象进行赋值
    'no-negated-in-lhs': 2, // 在 in 表达式中禁止使用否定操作符
    'no-new-object': 2, // 禁止使用 Object 构造函数
    'no-new-require': 2, // 禁止调用 require 时使用 new 操作符
    'no-new-symbol': 2, // 禁止使用 Symbol 构造函数
    'no-new-wrappers': 2, // 禁止使用原始包装实例
    'no-obj-calls': 2, // 禁止将全局对象作为函数调用
    'no-octal': 2, // 禁用八进制字面量
    'no-octal-escape': 2, // 禁止在字符串中使用八进制转义序列
    'no-path-concat': 2, // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-proto': 2, // 禁止使用 __proto__
    'no-redeclare': 2, // 禁止重新声明变量
    'no-regex-spaces': 2, // 正则表达式中禁止多个连续空格
    'no-return-assign': [2, 'except-parens'], // 禁止在返回语句中进行赋值操作，除非使用括号把返回的内容括起来
    'no-self-assign': 2, // 禁止自我赋值
    'no-self-compare': 2, // 禁止自身比较
    'no-sequences': 2, // 禁止使用逗号操作符
    'no-shadow-restricted-names': 2, // 禁止覆盖受限制的标识符
    'no-spaced-func': 2, // 函数调用时函数名与()之间不能有空格
    'no-sparse-arrays': 2, // 禁止稀疏数组
    'no-this-before-super': 2, // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-throw-literal': 2, // 禁止抛出字面量错误 throw "error"
    'no-trailing-spaces': 2, // 禁用行尾空格
    'no-undef': 2, // 禁止使用未声明的变量
    'no-undef-init': 2, // 禁止将变量初始化为 undefined
    'no-unexpected-multiline': 2, // 禁止使用令人困惑的多行表达式
    'no-unmodified-loop-condition': 2, // 禁用一成不变的循环条件
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false,
      },
    ], // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unreachable': 2, // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unsafe-finally': 2, // 禁止在 finally 语句块中出现控制流语句
    'no-unused-vars': 'off', // 未使用变量警告
    'no-unused-expressions': 'warn',
    'no-useless-call': 2, // 禁止不必要的 .call() 和 .apply()
    'no-useless-computed-key': 2, // 禁止在对象中使用不必要的计算属性
    'no-useless-constructor': 2, // 禁用不必要的构造函数
    'no-useless-escape': 0, // 允许在字符串中使用不必要的转义符
    'no-whitespace-before-property': 2, // 禁止属性前有空白
    'no-with': 2, // 禁用 with 语句
    'vue/no-v-model-argument': 'off',
    'one-var': [
      2,
      {
        initialized: 'never',
      },
    ], // 强制函数中的变量在一起声明或分开声明
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ], // 强制操作符使用一致的换行符风格
    'padded-blocks': [2, 'never'], // 禁止块内填充
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ], // 强制使用一致的单引号
    semi: [2, 'never'], // 要求或禁止使用分号代替 ASI
    'semi-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ], // 强制分号前后有空格
    'space-before-blocks': [2, 'always'], // 强制在块之前使用空格
    'space-before-function-paren': 'off', // 强制要求函数括号前的空格使用情况
    'space-in-parens': [2, 'never'], // 强制括号内的空格
    'space-infix-ops': 2, // 要求操作符周围有空格
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false,
      },
    ], // 强制在一元操作符前后使用一致的空格
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','],
      },
    ], // 强制注释周围有空格
    'template-curly-spacing': [2, 'never'], // 强制模板字符串中空格的使用
    'use-isnan': 2, // 要求使用 isNaN() 检查 NaN
    'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较
    'wrap-iife': [2, 'any'], // 要求 IIFE 使用括号括起来
    'yield-star-spacing': [2, 'both'], // 强制在 yield* 表达式中 * 周围使用空格
    yoda: [2, 'never'], // 要求或禁止 “Yoda” 条件
    'prefer-const': 2, // 要求使用 const 声明那些声明后不再被修改的变量
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 生产环境中禁用 debugger
    'object-curly-spacing': ['error', 'always'], // 强制在大括号中使用一致的空格
    'array-bracket-spacing': [2, 'never'], // 强制数组方括号中使用一致的空格
  },
}
