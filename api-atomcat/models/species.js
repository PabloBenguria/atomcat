'use strict'

module.exports = (sequelize, DataTypes) => {
  const Specie = sequelize.define('specie', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.ENUM,
      values: ['Canina', 'Felina', 'Roedor', 'Conejo', 'Ave', 'Pez', 'Reptil', 'Anfibio', 'Insecto', 'Arácnido', 'Porcina', 'Primate'],
      required: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    deleted_at: DataTypes.DATE
  }, {
    paranoid: true,
    underscored: true
  });
  return Specie;
};