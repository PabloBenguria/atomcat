'use strict';

//const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router/index');
const db = require('../models/index');

function init(app) {
  //app.use(express.static(__dirname + 'app'));
  app.use(morgan('combined'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.use(cors());

  router(app, db);

  app.listen(app.env.PORT, () => {
    console.log('Express listening on port:', app.env.PORT);
  });
}

module.exports = {
  init: init
};
