'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libro extends Model {
    
    static associate(models) {
      
      this.belongsTo(models.Reserva, {foreignKey:'reservaId'})

    }
  }
  Libro.init({
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    editorial: DataTypes.STRING,
    categoria: DataTypes.STRING,
    anio: DataTypes.INTEGER,
    idioma: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Libro',
  });
  return Libro;
};