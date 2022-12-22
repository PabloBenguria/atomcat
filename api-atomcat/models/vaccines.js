'use strict'

module.exports = (sequelize, DataTypes) => {
  const Vaccine = sequelize.define('vaccine', {
    vaccine_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    tipo: {
      type: DataTypes.STRING,
      required: true
    },
    periodicidad: {
      type: DataTypes.STRING,
      required: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deleted_at: DataTypes.DATE
  }, {
    paranoid: true,
    underscored: true
  });
  return Vaccine;
};