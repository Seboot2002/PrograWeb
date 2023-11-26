'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
    idioma: DataTypes.STRING,
    formato: DataTypes.STRING,
    nroPaginas: DataTypes.INTEGER,
    encuadernacion: DataTypes.STRING,
    ISBN: DataTypes.STRING,
    ISBN13: DataTypes.STRING,
    nroEdicion: DataTypes.INTEGER,
    imagenPortadaUrl: DataTypes.STRING,
    urlCompra: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Libro',
  });
  return Libro;
};