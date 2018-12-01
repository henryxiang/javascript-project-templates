#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies */
const mongoUnit = require('mongo-unit');

mongoUnit.start().then(url => {
  console.log(url);
});
