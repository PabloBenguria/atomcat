'use strict';

const middleware = require('../../middleware/middleware');

module.exports = (app, db) => {
  // GET all sizes
  app.get('/sizes', middleware.ensureAuthenticated, (req, res) => {
    db.sizes.findAll()
      .then(sizes => {
        res.json(sizes);
      });
  });

  // GET one size by id
  app.get('/pets/:id/sizes', middleware.ensureAuthenticated, (req, res) => {
    const id = req.params.id;
    db.sizes.findAll({
      where: {pet_id: id}
    })
      .then(sizes => {
        const response = {
          status: 'ok',
          data: sizes
        }
        res.json(response);
      });
  });

  // GET one size by id
  app.get('/pets/:id/sizes/:size_id', middleware.ensureAuthenticated, (req, res) => {
    const size_id = req.params.size_id;
    db.sizes.find({
      where: { size_id: size_id}
    })
      .then(size => {
        res.json(size);
      });
  });

  // POST single size
  app.post('/pets/sizes', middleware.ensureAuthenticated, (req, res) => {
    const altura = req.body.altura;
    const peso = req.body.peso;
    const pet_id = req.body.pet_id;
    db.sizes.create({
      altura: altura,
      peso: peso,
      pet_id: pet_id
    })
      .then(newSize => {
      res.send({
        message: 'Medidas creadas!'
      })
    });
  });

  // UPDATE single size
  app.put('/pets/:id/sizes/:size_id', middleware.ensureAuthenticated, (req, res) => {
    const size_id = req.params.size_id;
    const altura = req.body.altura;
    const peso = req.body.peso;
    db.sizes.update({
      altura: altura,
      peso: peso
    },{
      where: { size_id: size_id }
    })
      .then(updatedSize => {
        res.send({
          message: 'Medidas actualizadas!'
        });
      });
  });

  // DELETE single size
  app.delete('/sizes/:id', middleware.ensureAuthenticated, (req, res) => {
    const id = req.params.id;
    db.sizes.destroy({
      where: { id: id }
    })
      .then(deletedSize => {
        res.send({
          message: 'Medidas borradas!'
        });
      });
  });

};