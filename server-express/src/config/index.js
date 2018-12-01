const fs = require('fs');
const path = require('path');

module.exports = app => {
  fs.readdirSync(__dirname).forEach(file => {
    if (path.basename(__filename) !== path.basename(file)) {
      const mod = path.basename(file, '.js');
      console.log(`config ${mod}`);
      require(`./${mod}`)(app);
    }
  });
};
