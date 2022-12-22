'use strict';

const middleware = require('../../middleware/middleware');

module.exports = (app, db) => {
  
  app.post('/reports', middleware.ensureAuthenticated, (req, res) => {
    const proxima_vacuna = req.body.proxima_vacuna;
    const fecha_desde = req.body.fecha_desde;
    const fecha_hasta = req.body.fecha_hasta;
    db.pets_vaccines.findAll({
      include: [
        {
          model: db.pets,
          include: [
            {model: db.owners}
          ]
        }
      ],
      where: {
        proxima_fecha: {
          $gt: fecha_desde,
          $lt: fecha_hasta 
        }
      }
    })
      .then(pets_vaccines => {
        const response = {
          status: 'ok',
          data: pets_vaccines
        }
        res.json(response);
      });
  });

};