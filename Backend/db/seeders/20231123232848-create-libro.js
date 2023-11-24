'use strict';

const data = require('../../../Backend/data.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let libros = data;

    await queryInterface.bulkInsert('Libros', [
      {
        titulo: "Software la Superbabosa",
        autor: "Joyce dunbar",
        editorial: "Edebé",
        categoria: "Infantil y juvenil",
        anio: 2020,
        idioma: "español",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: "Hola2",
        autor: "Weed",
        editorial: "ssss",
        categoria: "d",
        anio: 2020,
        idioma: "español",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
