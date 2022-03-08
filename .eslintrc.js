module.exports = {
    parser: '@typescript-eslint/parser', //定义ESLint的解析器
    extends: ['taro/react', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'], //定义文件继承的子规范
    plugins: ['@typescript-eslint', 'eslint-plugin-import'], //定义了该eslint文件所依赖的插件
    rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/no-commonjs': 'off',
    },
    ignorePatterns: ['config/*'],
}
