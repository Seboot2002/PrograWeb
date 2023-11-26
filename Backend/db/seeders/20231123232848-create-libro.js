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
        formato: "Libro físico",
        autor: "Joyce dunbar",
        editorial: "Edebé",
        categoria: "Infantil y juvenil",
        anio: 2007,
        idioma: "Español",
        nroPaginas: 104,
        encuadernacion: "Tapa blanda",
        ISBN: "8423687570",
        ISBN13: "9788423687572",
        nroEdicion: 1,
        imagenPortadaUrl: "https://images.cdn2.buscalibre.com/fit-in/180x180/1f/a6/1fa666e0f93fb0bc63c4c214188f3a46.jpg",
        urlCompra: "https://www.buscalibre.pe/libro-software-la-superbabosa/9788423687572/p/2858249",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        formato: "Libro físico",
        autor: "Flores masias, eward; huarote zegarra, raul",
        editorial: "Fondo editorial universidad césar vallejo",
        categoria: "Ingenieria",
        anio: 2019,
        idioma: "Español",
        nroPaginas: 128,
        encuadernacion: "Tapa blanda",
        ISBN: "8423687571",
        ISBN13: "9786124435058",
        imagenPortadaUrl: "https://images.cdn1.buscalibre.com/fit-in/180x180/20/82/2082a4e5a59dcf7e8531feb8e488c30b.jpg",
        titulo: "Gestion de proyecto de Software",
        urlCompra: "https://www.buscalibre.pe/libro-gestion-de-proyecto-de-software/9786124435058/p/54600899",
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
