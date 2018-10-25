const fs = require('fs');
const path = require('path');

module.exports = app => {
  app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
  });

  fs.readdirSync(__dirname).forEach(file => {
    const url = path.basename(file, '.js');
    if (url !== 'index') {
      const route = require(`./${url}`);
      app.use(`/${url}`, route);
      console.log(`config route: /${url}`);
    }
  });
};
