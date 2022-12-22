'use strict';

const middleware = require('../../middleware/middleware');

module.exports = (app, db) => {
  // GET all notes
  app.get('/notes', middleware.ensureAuthenticated, (req, res) => {
    db.notes.findAll()
      .then(notes => {
        res.json(notes);
      });
  });

  // GET notes pet id
  app.get('/pets/:id/notes', middleware.ensureAuthenticated, (req, res) => {
    const id = req.params.id;
    db.notes.findAll({
      where: {pet_id: id}
    })
      .then(notes => {
        const response = {
          status: 'ok',
          data: notes
        }
        res.json(response);
      });
  });

  // GET one note by id
  app.get('/pets/:id/notes/:note_id', middleware.ensureAuthenticated, (req, res) => {
    const note_id = req.params.note_id;
    db.notes.find({
      where: { note_id: note_id}
    })
      .then(note => {
        res.json(note);
      });
  });

  // POST single note
  app.post('/pets/notes', middleware.ensureAuthenticated, (req, res) => {
    const texto = req.body.texto;
    const pet_id = req.body.pet_id;
    db.notes.create({
      texto: texto,
      pet_id: pet_id
    })
      .then(newNote => {
      res.send({
        message: 'Nota creada!'
      })
    });
  });

  // UPDATE single note
  app.put('/pets/:id/notes/:note_id', middleware.ensureAuthenticated, (req, res) => {
    const note_id = req.params.note_id;
    const texto = req.body.texto;
    db.notes.update({
      texto: texto,
    },{
      where: { note_id: note_id }
    })
      .then(updatedNote => {
        res.send({
          message: 'Nota actualizada!'
        });
      });
  });

  // DELETE single note
  app.delete('/notes/:id', middleware.ensureAuthenticated, (req, res) => {
    const id = req.params.id;
    db.notes.destroy({
      where: { id: id }
    })
      .then(deletedNote => {
        res.send({
          message: 'Nota borrada!'
        });
      });
  });

};