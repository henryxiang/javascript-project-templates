# React Project Template

## Installing Dependencies

```bash
npm install -s \
    react \
    react-dom
```

```bash
 npm install -D \
    @babel/core \
    @babel/plugin-proposal-class-properties \
    @babel/plugin-proposal-export-namespace-from \
    @babel/plugin-proposal-throw-expressions \
    @babel/plugin-syntax-dynamic-import \
    @babel/polyfill \
    @babel/preset-env \
    @babel/preset-react \
    babel-loader \
    copy-webpack-plugin \
    css-loader \
    html-webpack-plugin \
    mini-css-extract-plugin \
    node-sass \
    optimize-css-assets-webpack-plugin \
    sass-loader \
    style-loader \
    uglifyjs-webpack-plugin \
    webpack \
    webpack-cli \
    webpack-dev-server
```

## Configuring Webpack and Babel

webpack.config.js

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: ['./app/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/html/index.html',
      filename: './index.html',
    }),
  ],
};

module.exports = config;
```

.babelrc

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-throw-expressions"
  ]
}
```

## Configuring ESLint and Prettier

Installing dependencies

```bash
npm install -D \
    babel-eslint \
    eslint \
    eslint-config-airbnb \
    eslint-config-prettier \
    eslint-plugin-import \
    eslint-plugin-jsx-a11y \
    eslint-plugin-prettier \
    eslint-plugin-react \
    prettier

./node_modules/.bin/eslint --init
```

.eslintrc

```json
{
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"],
    "no-console": 0,
    "global-require": 0,
    "import/no-dynamic-require": 0,
    "react/jsx-filename-extension": 0
  },
  "parser": "babel-eslint",
  "globals": {
    "document": false
  }
}
```

.prettierrc

```json
{
  "useTabs": false,
  "printWidth": 80,
  "tabWidth": 2,
  "singleQuote": true
}
```

.vscode/settings.json

```json
{
  "editor.formatOnSave": true,
  "prettier.eslintIntegration": true
}
```
