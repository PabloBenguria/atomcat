'use strict';

const middleware = require('../../middleware/middleware');

module.exports = (app, db) => {
  // GET all vaccines
  app.get('/vaccines', middleware.ensureAuthenticated, (req, res) => {
    db.vaccines.findAll()
      .then(vaccines => {
        const response = {
          status: 'ok',
          data: vaccines
        }
        res.json(response);
      });
  });

  // GET vaccines by pet id
  app.get('/pets/:id/vaccines', middleware.ensureAuthenticated, (req, res) => {
    const id = req.params.id;
    db.pets.find({
      include: [{model: db.vaccines}],
      where: {id: id}
    })
      .then(vaccine => {
        res.json(vaccine);
      });
  });

  // GET one vaccine by id
  app.get('/pets/:id/vaccines/:vaccine_id', middleware.ensureAuthenticated, (req, res) => {
    const vaccine_id = req.params.vaccine_id;
    db.vaccines.find({
      where: { vaccine_id: vaccine_id}
    })
      .then(vaccine => {
        res.json(vaccine);
      });
  });

  // POST single vaccine
  app.post('/pets/vaccines', middleware.ensureAuthenticated, (req, res) => {
    const tipo = req.body.tipo;
    const periodicidad = req.body.periodicidad;
    const specie_id = req.body.specie_id;
    db.vaccines.create({
      tipo: tipo,
      periodicidad: periodicidad,
      specie_id: specie_id
    })
      .then(newVaccine => {
      res.send({
        message: 'Vacuna creada!'
      })
    });
  });

  // UPDATE single vaccine
  app.put('/pets/vaccines/:vaccine_id', middleware.ensureAuthenticated, (req, res) => {
    const vaccine_id = req.params.vaccine_id;
    const tipo = req.body.tipo;
    const periodicidad = req.body.periodicidad;
    const specie_id = req.body.specie_id;
    db.vaccines.update({
      tipo: tipo,
      periodicidad: periodicidad,
      specie_id: specie_id
    },{
      where: { 
        vaccine_id: vaccine_id 
      }
    })
      .then(updatedVaccine => {
        res.send({
          message: 'Vacuna modificada!'
        });
      });
  });

  // DELETE single vaccine
  app.delete('/vaccines/:id', middleware.ensureAuthenticated, (req, res) => {
    const id = req.params.id;
    db.vaccines.destroy({
      where: { id: id }
    })
      .then(deletedVaccine => {
        res.send({
          message: 'Enfermedad borrada!'
        });
      });
  });

};