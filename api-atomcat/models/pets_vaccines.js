'use strict'

module.exports = (sequelize, DataTypes) => {
  const PetVaccine = sequelize.define('petVaccine', {
    petvaccine_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    proxima_vacuna: {
      type: DataTypes.STRING,
      required: true
    },
    proxima_fecha: {
      type: DataTypes.DATE,
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
  return PetVaccine;
};