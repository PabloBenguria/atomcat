'use strict';

const Sequelize = require('sequelize');
const env = require('../config/env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.owners = require('../models/owners.js')(sequelize, Sequelize);
db.pets = require('../models/pets.js')(sequelize, Sequelize);
db.species = require('../models/species.js')(sequelize, Sequelize);
db.races = require('../models/races.js')(sequelize, Sequelize);
db.visits = require('../models/visits.js')(sequelize, Sequelize);
db.notes = require('../models/notes.js')(sequelize, Sequelize);
db.allergies = require('../models/allergies.js')(sequelize, Sequelize);
db.vaccines = require('../models/vaccines.js')(sequelize, Sequelize);
db.pets_vaccines = require('../models/pets_vaccines')(sequelize, Sequelize);
db.sizes = require('../models/sizes.js')(sequelize, Sequelize);
db.users = require('../models/users.js')(sequelize, Sequelize);
db.chat = require('../models/chat.js')(sequelize, Sequelize);

//Relations
db.pets.belongsTo(db.owners);
db.owners.hasMany(db.pets);

db.visits.belongsTo(db.pets);
db.pets.hasMany(db.visits);

db.notes.belongsTo(db.pets);
db.pets.hasMany(db.notes);

db.allergies.belongsTo(db.pets);
db.pets.hasMany(db.allergies);

db.vaccines.belongsTo(db.species);
db.species.hasMany(db.vaccines);

db.pets.belongsToMany(db.vaccines, {through: db.pets_vaccines}, {foreignKey: 'pet_id'});
db.vaccines.belongsToMany(db.pets, {through: db.pets_vaccines}, {foreignKey: 'vaccine_id'});
db.pets.hasMany(db.pets_vaccines);
db.vaccines.hasMany(db.pets_vaccines);
db.pets_vaccines.belongsTo(db.pets);

db.sizes.belongsTo(db.pets);
db.pets.hasMany(db.sizes);

db.pets.belongsTo(db.species);
db.species.hasOne(db.pets);

db.pets.belongsTo(db.races);
db.races.hasMany(db.pets);

db.races.belongsTo(db.species);
db.species.hasMany(db.races);

module.exports = db;
