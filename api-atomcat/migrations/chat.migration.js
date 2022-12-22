'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkInsert('chats', [
        {
          pregunta: "crear creo alta",
          respuesta: 'Pincha en crear',
          created_at: Date.now(),
          updated_at: Date.now()
        },
        {
          username: "user2"
        }
    ])];
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('chats');
  }
};