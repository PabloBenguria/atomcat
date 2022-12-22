'use strict';

const middleware = require('../../middleware/middleware');

module.exports = (app, db) => {
  // GET all visits
  app.get('/visits', middleware.ensureAuthenticated, (req, res) => {
    db.visits.findAll()
      .then(visits => {
        res.json(visits);
      });
  });

  // GET one visits by pet id
  app.get('/pets/:id/visits', middleware.ensureAuthenticated, (req, res) => {
    const id = req.params.id;
    db.visits.findAll({
      where: {pet_id: id}
    })
      .then(visits => {
        const response = {
          status: 'ok',
          data: visits
        }
        res.json(response);
      })
  });

  // GET one visit by id
  app.get('/pets/:id/visits/:visit_id', middleware.ensureAuthenticated, (req, res) => {
    const visit_id = req.params.visit_id;
    db.visits.find({
      where: { visit_id: visit_id}
    })
      .then(visit => {
        res.json(visit);
      });
  });

  // POST single visit
  app.post('/pets/visits', middleware.ensureAuthenticated, (req, res) => {
    const anamnesis = req.body.anamnesis;
    const diagnostico = req.body.diagnostico;
    const tratamiento = req.body.tratamiento;
    const tipo = req.body.tipo;
    const responsable = req.body.responsable;
    const pet_id = req.body.pet_id;
    db.visits.create({
      anamnesis: anamnesis,
      diagnostico: diagnostico,
      tratamiento: tratamiento,
      tipo: tipo,
      responsable: responsable,
      pet_id: pet_id
    })
      .then(newVisit => {
      res.send({
        message: 'Visita creada!'
      })
    });
  });

  // UPDATE single visit
  app.put('/pets/:id/visits/:visit_id', middleware.ensureAuthenticated, (req, res) => {
    const visit_id = req.params.visit_id;
    const anamnesis = req.body.anamnesis;
    const diagnostico = req.body.diagnostico;
    const tratamiento = req.body.tratamiento;
    const tipo = req.body.tipo;
    const responsable = req.body.responsable;
    db.visits.update({
      anamnesis: anamnesis,
      diagnostico: diagnostico,
      tratamiento: tratamiento,
      tipo: tipo,
      responsable: responsable
    },{
      where: { visit_id: visit_id }
    })
      .then(updatedVisit => {
        res.send({
          message: 'Visita actualizada!'
        });
      });
  });

  app.delete('/visits/:id', middleware.ensureAuthenticated, (req, res) => {
    const id = req.params.id;
    db.visits.destroy({
      where: { id: id }
    })
      .then(deletedVisit => {
        res.json(deletedVisit);
      });
  });

};