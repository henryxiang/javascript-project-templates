/* eslint-disable import/no-extraneous-dependencies */

const mongoUnit = require('mongo-unit');
const mongoose = require('mongoose');
const getPort = require('get-port');

module.exports = async nconf => {
  try {
    const dbName = nconf.get('mongo.database');
    const port = await getPort();
    const mongoUrl = await mongoUnit.start({
      port,
      dbName
    });
    mongoose.connect(mongoUrl);
    console.log(`MongoDB URL: ${mongoUrl}`);
  } catch (error) {
    console.error(error);
  }
};
