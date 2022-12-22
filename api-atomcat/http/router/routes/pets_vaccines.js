'use strict';

const middleware = require('../../middleware/middleware');

module.exports = (app, db) => {

  // GET all pets_vaccines
  app.get('/pets_vaccines', middleware.ensureAuthenticated, (req, res) => {
    db.pets_vaccines.findAll()
      .then(pets_vaccines => {
        const response = {
          status: 'ok',
          data: pets_vaccines
        }
        res.json(response);
      });
  });

  // GET one pets_vaccine by id
  app.get('/pets/:id/pets_vaccines/:petvaccine_id', middleware.ensureAuthenticated, (req, res) => {
    const petvaccine_id = req.params.petvaccine_id;
    db.pets_vaccines.find({
      where: { petvaccine_id: petvaccine_id}
    })
      .then(pets_vaccine => {
        res.json(pets_vaccine);
      });
  });
   
  // POST single pets_vaccines
  app.post('/pets/pets_vaccines', middleware.ensureAuthenticated, (req, res) => {
    const proxima_vacuna = req.body.proxima_vacuna;
    const proxima_fecha = req.body.proxima_fecha;
    const pet_id = req.body.pet_id;
    const vaccine_vaccine_id = req.body.vaccine_vaccine_id;
    db.pets_vaccines.create({
      proxima_vacuna: proxima_vacuna,
      proxima_fecha: proxima_fecha,
      pet_id: pet_id,
      vaccine_vaccine_id: vaccine_vaccine_id
    })
      .then(newVaccine => {
      res.send({
        message: 'Vacuna creada!'
      })
    });
  });

  // UPDATE single pets_vaccines
  app.put('/pets/:id/pets_vaccines/:petvaccine_id', middleware.ensureAuthenticated, (req, res) => {
    const petvaccine_id = req.params.petvaccine_id;
    const proxima_vacuna = req.body.proxima_vacuna;
    const proxima_fecha = req.body.proxima_fecha;
    db.pets_vaccines.update({
      proxima_vacuna: proxima_vacuna,
      proxima_fecha: proxima_fecha
    },{
      where: { petvaccine_id: petvaccine_id }
    })
      .then(updatedPetVaccine => {
        res.send({
          message: 'Vacuna actualizada!'
        });
      });
  });

};