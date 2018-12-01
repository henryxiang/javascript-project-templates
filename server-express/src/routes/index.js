const fs = require('fs');
const path = require('path');

module.exports = app => {
  fs.readdirSync(__dirname).forEach(file => {
    if (path.basename(__filename) !== path.basename(file)) {
      const mod = path.basename(file, '.js');
      const routePath = mod === '_root' ? '/' : `/${mod}`;
      const route = require(`./${mod}`);
      app.use(routePath, route);
      console.log(`config route: ${routePath}`);
    }
  });
};
