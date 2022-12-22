'use strict';

const service = require('../../../services/services');
const middleware = require('../../middleware/middleware');

module.exports = (app, db) => {

 	//Registro
	app.post('/auth/register', middleware.ensureAuthenticated, middleware.registerAllowed, (req, res) => {
		const nombre = req.body.nombre;
    const email = req.body.email;
    const password = req.body.password;
    db.users.findOrCreate({
      where: {
        email: email
      },
      defaults: {
        nombre: nombre,
        email: email,
        password: password
      }
    })
      .then(newUser => {
        if(newUser[1] === false){
          return res.status(500).json({error : "El usuario ya existe"});
        }
        res.send({
          token: service.createToken(newUser),
          profile: service.profileToken(service.createToken(newUser))
        });
      })
	});

	//Login
	app.post('/auth/login', (req, res) => {
		const email = req.body.email;
    db.users.find({
      where: { email: email}
    })
      .then(user => {
        res.send({
          token: service.createToken(user),
          profile: service.profileToken(service.createToken(user))
        });
      });
	});
}