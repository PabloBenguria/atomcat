'use strict';

const middleware = require('../../middleware/middleware');

module.exports = (app, db) => {
  // GET single user
  app.get('/user', middleware.ensureAuthenticated, (req, res) => {
    db.users.find({
      attributes: ['avatar']
    })
      .then(users => {
        res.json(users);
      });
  });
	// PUT single user
  app.put('/user', middleware.ensureAuthenticated, (req, res) => {
    const email = req.body.email;
    const avatar = req.body.avatar;
    db.users.update({
      avatar: avatar
    },{
      where: { email: email }
    })
      .then(updatedUser => {
        res.send({
          message: 'Avatar actualizado!'
        });
      });
  });
};