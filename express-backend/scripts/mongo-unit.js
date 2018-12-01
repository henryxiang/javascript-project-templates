#!/usr/bin/env node

const mongoUnit = require('mongo-unit');

mongoUnit.start().then(url => {
  console.log(url);
});
