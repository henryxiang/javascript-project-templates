/* eslint-disable import/no-extraneous-dependencies */

const mongoUnit = require('mongo-unit');
const mongoose = require('mongoose');
const getPort = require('get-port');

module.exports = async nconf => {
  try {
    let dbName = 'demo';
    let port = '27017';
    let mongoUrl = `mongodb://localhost:${port}/${dbName}`;
    if (nconf.get('env') === 'dev') {
      dbName = nconf.get('mongo.database');
      port = await getPort();
      mongoUrl = await mongoUnit.start({
        port,
        dbName
      });
    }
    mongoose.connect(
      mongoUrl,
      {
        useNewUrlParser: true,
        server: {
          auto_reconnect: true,
          reconnectTries: Number.MAX_VALUE,
          reconnectInterval: 1000,
          socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 }
        }
      }
    );
    console.log(`MongoDB URL: ${mongoUrl}`);

    mongoose.connection.on('error', e => {
      console.log(`db: mongodb error ${e}`);
      // reconnect here
    });

    mongoose.connection.on('connected', () => {
      console.log(`db: mongodb is connected: ${mongoUrl}`);
    });

    mongoose.connection.on('disconnecting', () => {
      console.log('db: mongodb is disconnecting!!!');
    });

    mongoose.connection.on('disconnected', () => {
      console.log('db: mongodb is disconnected!!!');
    });

    mongoose.connection.on('reconnected', () => {
      console.log(`db: mongodb is reconnected: ${mongoUrl}`);
    });

    mongoose.connection.on('timeout', e => {
      console.log(`db: mongodb timeout ${e}`);
      // reconnect here
    });

    mongoose.connection.on('close', () => {
      console.log('db: mongodb connection closed');
    });
  } catch (error) {
    console.error(error);
  }
};
