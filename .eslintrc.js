module.exports = {
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "babel",
      "react",
      "promise"
  ],
  "rules": {
      "strict": "off",
      "indent": [
          "error",
          4
      ],
      "linebreak-style": "off",
      "comma-dangle": 0, // 允许对象字面量项尾有逗号
      "arrow-parens": 0, // 不要求箭头函数用小括号括起来
      "no-unused-vars": 0,
      "no-console": 0,
      "react/prefer-stateless-function": 0, // 当不使用生命周期方法、setState或ref时，无需使用无状态函数
      "react/jsx-filename-extension": 0, // 不仅仅允许后缀为jsx的文件使用jsx语法
      "react/jsx-indent": ["error", 4], // jsx的缩进不为4个空格时进行报错
      "jsx-a11y/no-noninteractive-element-interactions": ['error', { //允许非交互式元素支持事件处理程序
          handlers: [
              'onMouseDown',
              'onMouseUp',
              'onKeyPress',
              'onKeyDown',
              'onKeyUp',
          ]
      }],
      "jsx-a11y/click-events-have-key-events": 0, // 不要求onClick伴随着onKeyUp/onKeyDown/onKeyPress
      "react/jsx-indent-props": ['error', 4], // jsx的属性缩进不为4个空格时进行报错
      "react/forbid-prop-types": ['error', { forbid: ['any'] }], // 当propTypes类型为any时，进行报错
      "arrow-body-style": 0, // 不强制要求箭头函数体使用大括号
      "no-plusplus": 0, // 允许自加
      "class-methods-use-this": 0, // 允许非生命周期函数内不使用this
      "react/no-multi-comp": 0,    // 允许一个jsx文件中包含多个component
      "react/jsx-closing-tag-location": 0, // 允许首尾标签不对齐
      "jsx-a11y/no-static-element-interactions": 0, // 允许没有语义行为的DOM元素带有交互处理程序
      "jsx-a11y/anchor-is-valid": [ "error", { "components": [ "Link" ], "specialLink": [ "to" ]}], // 允许正常地使用Link
      "consistent-return": 0, // 允许在方法末尾前使用 return
      "global-require": 0, // 允许使用 require
  }
};
