'use strict'

module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('owner', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nombre: {
      type: DataTypes.STRING,
      required: true
    },
    direccion: {
      type: DataTypes.STRING,
      required: true
    },
    poblacion: {
      type: DataTypes.STRING,
      required: true
    },
    provincia: {
      type: DataTypes.ENUM,
      values: ['Álava', 'Albacete', 'Alicante', 'Almería',
        'Asturias', 'Ávila', 'Badajoz', 'Barcelona', 'Burgos',
        'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real',
        'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada',
        'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca', 'Baleares',
        'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga',
        'Murcia', 'Navarra', 'Orense', 'Palencia', 'Las Palmas',
        'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia',
        'Sevilla', 'Soria', 'Tarragona', 'Santa Cruz de Tenerife',
        'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya',
        'Zamora', 'Zaragoza', 'Ceuta', 'Melilla'],
      required: true
    },
    cp: {
      type: DataTypes.INTEGER,
      required: true
    },
    dni: {
      type: DataTypes.STRING,
      required: true
    },
    telefono: {
      type: DataTypes.INTEGER,
      required: true
    },
    movil: {
      type: DataTypes.INTEGER,
      required: true
    },
    email: {
      type: DataTypes.STRING,
      required: true
    },
    avatar: {
      type: DataTypes.STRING,
      required: true,
      defaultValue: 'default.png'
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE, 
    deleted_at: DataTypes.DATE
  }, {
    paranoid: true,
    underscored: true
  });
  return Owner;
};