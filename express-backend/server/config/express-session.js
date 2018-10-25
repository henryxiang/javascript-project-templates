const session = require('express-session');

module.exports = app => {
  app.use(
    session({
      secret: 'express-session-secret',
      cookie: { maxAge: 60000 },
      resave: false,
      saveUninitialized: false
    })
  );
};
