'use strict';

const middleware = require('../../middleware/middleware');

module.exports = (app, db) => {

  // GET chats
  app.get('/chats', middleware.ensureAuthenticated, (req, res) => {
    db.chat.findAll()
      .then(chat => {
        res.json(chat);
      });
  });

  // POST chats
  app.post('/chats', middleware.ensureAuthenticated, (req, res) => {
    const pregunta = req.body.pregunta;
    const respuesta = req.body.respuesta;
    db.chat.create({
      pregunta: pregunta,
      respuesta: respuesta
    })
      .then(newChat => {
        res.json(newChat);
      })
  });

  // POST query and return chat
  app.post('/chat', middleware.ensureAuthenticated, (req, res) => {
    const pregunta = req.body.pregunta;
    let arrPregunta = pregunta.split(' ');
    let resultPregunta = [];
    arrPregunta.map(item => {
      resultPregunta.push({pregunta: { $like: ('%' + item + '%')}});
    });
    db.chat.find({
      where: {
        $or: resultPregunta
      }
    })
      .then(chat => {
        if(chat == null){
          res.json({respuesta: 'No se han encontrado resultados'})
        }else{
          res.json(chat);
        }
      });
  });

};