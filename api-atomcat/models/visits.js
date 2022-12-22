'use strict'

module.exports = (sequelize, DataTypes) => {
  const Visit = sequelize.define('visit', {
    visit_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    anamnesis: {
      type: DataTypes.STRING,
      required: true
    },
    diagnostico: {
      type: DataTypes.STRING,
      required: true
    },
    tratamiento: {
      type: DataTypes.STRING,
      required: true
    },
    tipo: {
      type: DataTypes.STRING,
      required: true
    },
    responsable: {
      type: DataTypes.STRING,
      required: true
    },
    pet_id: {
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
  return Visit;
};