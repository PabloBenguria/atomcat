'use strict'

module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define('size', {
    size_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    altura: {
      type: DataTypes.INTEGER,
      required: true
    },
    peso: {
      type: DataTypes.INTEGER,
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
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deleted_at: DataTypes.DATE
  }, {
    paranoid: true,
    underscored: true
  });
  return Size;
};