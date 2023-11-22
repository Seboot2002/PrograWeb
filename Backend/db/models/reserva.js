'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.belongsTo(models.Usuario, {foreignKey:'usuarioId'})
      this.hasMany(models.Libro, {foreignKey:'libroId'})

    }
  }
  Reserva.init({
    fechaInicial: DataTypes.STRING,
    fechaFinal: DataTypes.STRING,
    dias: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reserva',
  });
  return Reserva;
};