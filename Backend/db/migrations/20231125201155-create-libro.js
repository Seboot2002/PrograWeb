'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Libros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      autor: {
        type: Sequelize.STRING
      },
      editorial: {
        type: Sequelize.STRING
      },
      categoria: {
        type: Sequelize.STRING
      },
      anio: {
        type: Sequelize.INTEGER
      },
      idioma: {
        type: Sequelize.STRING
      },
      formato: {
        type: Sequelize.STRING
      },
      nroPaginas: {
        type: Sequelize.INTEGER
      },
      encuadernacion: {
        type: Sequelize.STRING
      },
      ISBN: {
        type: Sequelize.STRING
      },
      ISBN13: {
        type: Sequelize.STRING
      },
      nroEdicion: {
        type: Sequelize.INTEGER
      },
      imagenPortadaUrl: {
        type: Sequelize.STRING
      },
      urlCompra: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Libros');
  }
};