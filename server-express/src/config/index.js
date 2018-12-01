module.exports = app => {
  require('./body-parser')(app);
  require('./cookie-parser')(app);
  require('./express-session')(app);
  require('./static-path')(app);
  require('./view-engine')(app);
};
