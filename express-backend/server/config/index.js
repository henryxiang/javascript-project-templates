const fs = require('fs');
const path = require('path');

module.exports = app => {
  fs.readdirSync(__dirname).forEach(file => {
    const mod = path.basename(file, '.js');
    if (mod !== 'index') {
      console.log(`config ${mod}`);
      require(`./${mod}`)(app);
    }
  });
};
