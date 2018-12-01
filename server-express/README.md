# Backend Stack with Express.js

## Configuring Development Environment

- ESLint with AirBnb base config

```
npm install -D eslint eslint-plugin-import eslint-config-airbnb-base
touch .eslintrc.json
```

```json
// .eslintrc.json
{
  "extends": ["airbnb-base"]
}
```

- Automatic code formatting with Prettier.js and ESLint

```
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
touch .prettierrc
```

```json
// .eslintrc.js
{
  "extends": ["airbnb-base", "plugin:prettier/recommended"]
}
```

```json
// .prettierrc
{
  "printWidth": 100,
  "singleQuote": true
}
```

```bash
mkdir .vscode
touch .vscode/settings.json
```

```json
{
  "editor.formatOnSave": true,
  "prettier.eslintIntegration": true
}
```

## Installation

```bash
npm install -s express
mkdir server
touch server/index.js
```

```javascript
// server/index.js
const express = require('express');
const app = express();
const port = 8080;

app.get('/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}`);
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
```

```bash
node server/index.js
```

## Setup nodemon

```
npm install -s-dev nodemon
touch nodemon.json
```

Example nodemon.json

```json
{
  "ignore": [".git", "node_modules"],
  "verbose": true,
  "execMap": {
    "js": "node --harmony"
  },
  "watch": ["server/**/*.*"],
  "env": {
    "NODE_ENV": "development"
  }
}
```

## Use body-parser and cookie-parser

```bash
npm install -s body-parser cookie-parser
```

```javascript
// server/index.js
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cookieParser());
```

## Use EJS template engine

```bash
npm install -s ejs
```

```javascript
// server/index.js
app.set('view engine', 'ejs');
app.set('views', __dirname + '/server/views');
```
