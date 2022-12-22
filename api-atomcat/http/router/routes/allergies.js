'use strict';

const middleware = require('../../middleware/middleware');

module.exports = (app, db) => {
  // GET all allergies
  app.get('/allergies', middleware.ensureAuthenticated, (req, res) => {
    db.allergies.findAll()
      .then(allergies => {
        res.json(allergies);
      });
  });

  // GET allergies by pet id
  app.get('/pets/:id/allergies', middleware.ensureAuthenticated, (req, res) => {
    const id = req.params.id;
    db.allergies.findAll({
      where: {pet_id: id}
    })
      .then(allergies => {
        const response = {
          status: 'ok',
          data: allergies
        }
        res.json(response);
      });
  });

  // GET one allergie by id
  app.get('/pets/:id/allergies/:allergie_id', middleware.ensureAuthenticated, (req, res) => {
    const allergie_id = req.params.allergie_id;
    db.allergies.find({
      where: { allergie_id: allergie_id}
    })
      .then(allergie => {
        res.json(allergie);
      });
  });

  // POST single allergie
  app.post('/pets/allergies', middleware.ensureAuthenticated, (req, res) => {
    const nombre = req.body.nombre;
    const pet_id = req.body.pet_id;
    db.allergies.create({
      nombre: nombre,
      pet_id: pet_id
    })
      .then(newAllergie => {
      res.send({
        message: 'Alergia creada!'
      })
    });
  });

  // UPDATE single allergie
  app.put('/pets/:id/allergies/:allergie_id', middleware.ensureAuthenticated, (req, res) => {
    const allergie_id = req.params.allergie_id;
    const nombre = req.body.nombre;
    db.allergies.update({
      nombre: nombre
    },{
      where: { allergie_id: allergie_id }
    })
      .then(updatedAllergie => {
        res.send({
          message: 'Enfermedad modificada!'
        });
      });
  });

  // DELETE single allergie
  app.delete('/allergies/:id', middleware.ensureAuthenticated, (req, res) => {
    const id = req.params.id;
    db.allergies.destroy({
      where: { id: id }
    })
      .then(deletedAllergie => {
        res.send({
          message: 'Enfermedad borrada!'
        });
      });
  });

};