const nconf = require('nconf');
const path = require('path');

nconf.argv();
nconf.env();
nconf.file({
  file: path.join(__dirname, 'config.json'),
  logicalSeparator: '.'
});

module.exports = nconf;
