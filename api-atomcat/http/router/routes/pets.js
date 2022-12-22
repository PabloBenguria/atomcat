'use strict';

const middleware = require('../../middleware/middleware');

module.exports = (app, db) => {
  // GET all pets
  app.get('/pets', middleware.ensureAuthenticated, (req, res) => {
    db.pets.findAll({
      include: [
        {model: db.owners},
        {model: db.species},
        {model: db.races}
      ]
    })
      .then(pets => {
        const response = {
          status: 'ok',
          data: pets
        }
        res.json(response);
      });
  });

  // GET one pet by id
  app.get('/pets/:id', middleware.ensureAuthenticated, (req, res) => {
    const id = req.params.id;
    db.pets.find({
      include: [
        {model: db.owners},
        {model: db.races},
        {model: db.allergies},
        {model: db.notes},
        {model: db.visits},
        {model: db.pets_vaccines},
        {
          model: db.species, 
          include: [
            {model: db.vaccines}
          ]
        }
      ],
      where: {
        id: id
      }
    })
      .then(pet => {
        res.json(pet);
      });
  });

  // POST single pet
  app.post('/pets', middleware.ensureAuthenticated, (req, res, next) => {
    const nombre = req.body.nombre;
    const sexo = req.body.sexo;
    const chip = req.body.chip;
    const caracter = req.body.caracter;
    const pelo = req.body.pelo;
    const capa = req.body.capa;
    const nacimiento = req.body.nacimiento;
    const estado = req.body.estado;
    const avatar = req.body.avatar;
    const baja = req.body.baja;
    const specie_id = req.body.specie_id;
    const race_id = req.body.race_id;
    const owner_id = req.body.owner_id;
    db.pets.create({
      nombre: nombre,
      sexo: sexo,
      chip: chip,
      caracter: caracter,
      pelo: pelo,
      capa: capa,
      nacimiento: nacimiento,
      estado: estado,
      avatar: avatar,
      baja: baja,
      specie_id: specie_id,
      race_id: race_id,
      owner_id: owner_id
    })
      .then(newPet => {
        res.send({
          result: newPet.id
        });
    });
  });

  // UPDATE single pet
  app.put('/pets/:id', middleware.ensureAuthenticated, (req, res) => {
    const id = req.params.id;
    const nombre = req.body.nombre;
    const sexo = req.body.sexo;
    const chip = req.body.chip;
    const caracter = req.body.caracter;
    const pelo = req.body.pelo;
    const capa = req.body.capa;
    const nacimiento = req.body.nacimiento;
    const estado = req.body.estado;
    const avatar = req.body.avatar;
    const baja = req.body.baja;
    const specie_id = req.body.specie_id;
    const race_id = req.body.race_id;
    const owner_id = req.body.owner_id;
    db.pets.update({
      nombre: nombre,
      sexo: sexo,
      chip: chip,
      caracter: caracter,
      pelo: pelo,
      capa: capa,
      nacimiento: nacimiento,
      estado: estado,
      avatar: avatar,
      baja: baja,
      specie_id: specie_id,
      race_id: race_id,
      owner_id: owner_id
    },{
      where: { id: id }
    })
    .then(newPet => {
      res.send({
        message: 'Mascota actualizada!'
      });
    });
  });

  app.delete('/pets/:id', middleware.ensureAuthenticated, (req, res) => {
    const id = req.params.id;
    db.pets.destroy({
      where: { id: id }
    })
      .then(deletedPet => {
        res.json(deletedPet);
      });
  });

};