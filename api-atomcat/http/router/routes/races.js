'use strict';

const middleware = require('../../middleware/middleware');

module.exports = (app, db) => {
  // GET all races
  app.get('/races', middleware.ensureAuthenticated, (req, res) => {
    db.races.findAll()
      .then(races => {
        const response = {
          status: 'ok',
          data: races
        }
        res.json(response);
      });
  });

  // POST single race
  app.post('/races', middleware.ensureAuthenticated, (req, res) => {
    const nombre = req.body.nombre;
    const specie_id = req.body.specie_id;
    db.races.create({
      nombre: nombre,
      specie_id: specie_id
    })
      .then(newRace => {
      res.json(newRace);
    });
  });

  // UPDATE single race
  app.put('/races/:id', middleware.ensureAuthenticated, (req, res) => {
    const id = req.params.id;
    const nombre = req.body.nombre;
    db.races.update({
      nombre: nombre
    },{
      where: { id: id }
    })
      .then(updatedRace => {
        res.send({
          message: 'Raza actualizada!'
        });
      });
  });

};