module.exports = app => {
  app.use('/', require('./root'));
  app.use('/api/user', require('./user'));
};
