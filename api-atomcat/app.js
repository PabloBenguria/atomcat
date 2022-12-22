'use strict';
const express = require('express');
const env = require('./config/env');
const server = require('./http/server');
const db = require('./models/index');

const app = express();
app.env = env;

db.sequelize.sync()
.then(() => {
  app.db = db;
  server.init(app);
})
.catch((err) => {
  console.log('ERROR connecting to database', err);
});
