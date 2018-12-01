const fs = require('fs');
const path = require('path');
const nconf = require('./config');

const config = {
  entry: ['./src/index.js'],
  module: {
    rules: [],
  },
  plugins: [],
};

fs.readdirSync(path.join(__dirname, 'webpack')).forEach(f => {
  const p = path.join(__dirname, 'webpack', f);
  if (fs.lstatSync(p).isFile()) {
    const mod = path.basename(f, '.js');
    require(`./webpack/${mod}`)(config, nconf);
  }
});

if (nconf.get('env') === 'dev') {
  require('./webpack/dev')(config);
} else {
  require('./webpack/prod')(config);
}

module.exports = config;
