'use strict'

const routes = [
  require('./routes/owners'),
  require('./routes/pets'),
  require('./routes/visits'),
  require('./routes/auth'),
  require('./routes/users'),
  require('./routes/notes'),
  require('./routes/allergies'),
  require('./routes/vaccines'),
  require('./routes/pets_vaccines'),
  require('./routes/sizes'),
  require('./routes/species'),
  require('./routes/races'),
  require('./routes/reports'),
  require('./routes/chat')
];


// Add access to the app and db objects to each route
module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};