'use strict';

const middleware = require('../../middleware/middleware');

module.exports = (app, db) => {

  
  // GET all owners
  app.get('/owners', middleware.ensureAuthenticated, (req, res) => {
    db.owners.findAll()
      .then(owners => {
        const response = {
          status: 'ok',
          data: owners
        }
        res.json(response);
      });
  });

  // GET one owner by id
  app.get('/owners/:id', middleware.ensureAuthenticated, (req, res) => {
    const id = req.params.id;
    db.owners.find({
      include: [{model: db.pets}],
      where: {id: id}
    })
      .then(owner => {
        res.json(owner);
      });
  });

  // POST single owner
  app.post('/owners', middleware.ensureAuthenticated, (req, res) => {
    const nombre = req.body.nombre;
    const direccion = req.body.direccion;
    const poblacion = req.body.poblacion;
    const provincia = req.body.provincia;
    const cp = req.body.cp;
    const dni = req.body.dni;
    const telefono = req.body.telefono;
    const movil = req.body.movil;
    const email = req.body.email;
    const avatar = req.body.avatar;
    db.owners.create({
      nombre: nombre,
      direccion: direccion,
      poblacion: poblacion,
      provincia: provincia,
      cp: cp,
      dni: dni,
      telefono: telefono,
      movil: movil,
      email: email,
      avatar: avatar
    })
      .then(newOwner => {
        res.json(newOwner);
      })
  });

  // PUT single owner
  app.put('/owners/:id', middleware.ensureAuthenticated, (req, res) => {
    const id = req.params.id;
    const nombre = req.body.nombre;
    const direccion = req.body.direccion;
    const poblacion = req.body.poblacion;
    const provincia = req.body.provincia;
    const cp = req.body.cp;
    const dni = req.body.dni;
    const telefono = req.body.telefono;
    const movil = req.body.movil;
    const email = req.body.email;
    const avatar = req.body.avatar;
    db.owners.update({
      nombre: nombre,
      direccion: direccion,
      poblacion: poblacion,
      provincia: provincia,
      cp: cp,
      dni: dni,
      telefono: telefono,
      movil: movil,
      email: email,
      avatar: avatar
    },{
      where: { id: id }
    })
      .then(updatedOwner => {
        res.send({
          message: 'Cliente actualizado!'
        });
      });
  });

  // DELETE single owner
  app.delete('/owners/:id', middleware.ensureAuthenticated, (req, res) => {
    const id = req.params.id;
    db.owners.destroy({
      where: { id: id }
    })
      .then(deletedOwner => {
        res.json(deletedOwner);
      });
  });
};