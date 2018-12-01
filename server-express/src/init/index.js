const nconf = require('../etc/conf');

module.exports = async () => {
  require('./database')(nconf);
  require('./users')();
};
