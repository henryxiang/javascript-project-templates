const fs = require('fs');
const path = require('path');
const nconf = require('../../config');

module.exports = async () => {
  const env = nconf.get('env');
  const dir = path.join(__dirname, env);
  fs.readdirSync(dir).forEach(file => {
    const mod = path.basename(file, '.js');
    console.log(`init: ${env}/${mod}`);
    require(`./${env}/${mod}`)(nconf);
  });
};
