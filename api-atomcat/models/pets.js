'use strict'

module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('pet', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nombre: {
      type: DataTypes.STRING,
      required: true
    },
    sexo: {
      type: DataTypes.ENUM,
      values: ['Macho', 'Hembra', 'Indefinido'],
      required: true
    },
    chip: {
      type: DataTypes.STRING,
      required: true
    },
    caracter: {
      type: DataTypes.ENUM,
      values: ['Muy manso', 'Manso', 'Normal', 'Agresivo', 'Muy agresivo'],
      required: true
    },
    pelo: {
      type: DataTypes.STRING,
      required: true
    },
    capa: {
      type: DataTypes.STRING,
      required: true
    },
    nacimiento: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estado: {
      type: DataTypes.ENUM,
      values: ['Vivo', 'Muerto', 'Sacrificado'],
      required: true
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: 'default.png',
      required: true
    },
    baja: {
      type: DataTypes.STRING,
      required: false
    },
    specie_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    race_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    owner_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    paranoid: true,
    underscored: true
  });
  return Pet;
};