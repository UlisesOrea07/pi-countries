const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    area: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    population: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

  }, { timestamps: false });
};
