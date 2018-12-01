module.exports = app => {
  app.use('/', require('./root'));
  app.use('/user', require('./user'));
};
