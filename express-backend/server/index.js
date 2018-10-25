const express = require('express');
const config = require('./config');
const setupRoutes = require('./routes');

const app = express();
const port = 8080;

config(app);
setupRoutes(app);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
