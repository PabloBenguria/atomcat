'use strict';

const middleware = require('../../middleware/middleware');

module.exports = (app, db) => {
  // GET all species
  app.get('/species', middleware.ensureAuthenticated, (req, res) => {
    db.species.findAll({
      include: [
        {model: db.races},
        {model: db.vaccines}
      ]
    })
      .then(species => {
        const response = {
          status: 'ok',
          data: species
        }
        res.json(response);
      });
  });

  // POST single specie
  app.post('/species', middleware.ensureAuthenticated, (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    db.species.create({
      id: id,
      nombre: nombre,
    })
      .then(newSpecie => {
        res.send('Especie creada');
      })
  });
};