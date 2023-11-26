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
        anio: 2020,
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
      },
      {
        formato: "Libro físico",
        autor: "Vallejos,  mariela",
        editorial: "Computadoras y tecnología",
        categoria: "Ingenieria",
        anio: 2018,
        idioma: "Español",
        nroPaginas: 128,
        encuadernacion: "Tapa blanda",
        ISBN: "8423687571",
        ISBN13: "9786124435058",
        imagenPortadaUrl: "https://images.cdn1.buscalibre.com/fit-in/180x180/20/82/2082a4e5a59dcf7e8531feb8e488c30b.jpg",
        titulo: "Reemplazada por un Software",
        urlCompra: "https://www.buscalibre.pe/libro-gestion-de-proyecto-de-software/9786124435058/p/54600899",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        formato: "Libro físico",
        autor: "Flores masias, eward; huarote zegarra, raul",
        editorial: "Anaya multimedia",
        categoria: "Ingenieria",
        anio: 2008,
        idioma: "Español",
        nroPaginas: 128,
        encuadernacion: "Tapa blanda",
        ISBN: "9788441523760",
        ISBN13: "9786124435058",
        imagenPortadaUrl: "https://images.cdn1.buscalibre.com/fit-in/180x180/20/82/2082a4e5a59dcf7e8531feb8e488c30b.jpg",
        titulo: "Edición de Medios Digitales con Software Libre",
        urlCompra: "https://www.buscalibre.pe/libro-gestion-de-proyecto-de-software/9786124435058/p/54600899",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        formato: "Libro físico",
        autor: "Flores masias, eward; huarote zegarra, raul",
        editorial: "Alfaomega colombiana",
        categoria: "Ingenieria",
        anio: 2012,
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
      },
      {
        formato: "Libro físico",
        autor: "Flores masias, eward; huarote zegarra, raul",
        editorial: "Universidad alberto hurtado",
        categoria: "Ciencias humanas",
        anio: 2012,
        idioma: "Español",
        nroPaginas: 348,
        encuadernacion: "Tapa blanda",
        ISBN: "8423687571",
        ISBN13: "9786124435058",
        imagenPortadaUrl: "https://images.cdn1.buscalibre.com/fit-in/180x180/20/82/2082a4e5a59dcf7e8531feb8e488c30b.jpg",
        titulo: "El Vaticano II como software de la iglesia actualii",
        urlCompra: "https://www.buscalibre.pe/libro-gestion-de-proyecto-de-software/9786124435058/p/54600899",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        formato: "Libro físico",
        autor: "Flores masias, eward; huarote zegarra, raul",
        editorial: "Mc graw hill interamericana",
        categoria: "Ingenieria",
        anio: 2015,
        idioma: "Español",
        nroPaginas: 348,
        encuadernacion: "Tapa blanda",
        ISBN: "8423687571",
        ISBN13: "9786124435058",
        imagenPortadaUrl: "https://images.cdn1.buscalibre.com/fit-in/180x180/20/82/2082a4e5a59dcf7e8531feb8e488c30b.jpg",
        titulo: "Goodreads Software y el estupor informático",
        urlCompra: "https://www.buscalibre.pe/libro-gestion-de-proyecto-de-software/9786124435058/p/54600899",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        formato: "Libro físico",
        autor: "Flores masias, eward; huarote zegarra, raul",
        editorial: "Marcombo",
        categoria: "Ingenieria",
        anio: 2018,
        idioma: "Español",
        nroPaginas: 348,
        encuadernacion: "Tapa blanda",
        ISBN: "9781913597412",
        ISBN13: "9786124435058",
        imagenPortadaUrl: "https://images.cdn1.buscalibre.com/fit-in/180x180/20/82/2082a4e5a59dcf7e8531feb8e488c30b.jpg",
        titulo: "Análisis y diseño de sistemas",
        urlCompra: "https://www.buscalibre.pe/libro-gestion-de-proyecto-de-software/9786124435058/p/54600899",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        formato: "Libro físico",
        autor: "Flores masias, eward; huarote zegarra, raul",
        editorial: "Apress",
        categoria: "Ingenieria",
        anio: 2020,
        idioma: "Español",
        nroPaginas: 348,
        encuadernacion: "Tapa blanda",
        ISBN: "9789388511773",
        ISBN13: "9789388511773",
        imagenPortadaUrl: "https://images.cdn1.buscalibre.com/fit-in/180x180/20/82/2082a4e5a59dcf7e8531feb8e488c30b.jpg",
        titulo: "Ingeniería del software para objetos",
        urlCompra: "https://www.buscalibre.pe/libro-gestion-de-proyecto-de-software/9786124435058/p/54600899",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        formato: "Libro físico",
        autor: "Elias lara flores",
        editorial: "Trillas",
        categoria: "Ingenieria",
        anio: 2016,
        idioma: "Español",
        nroPaginas: 208,
        encuadernacion: "Tapa blanda",
        ISBN: "9786071727008",
        ISBN13: "9786071727008",
        imagenPortadaUrl: "https://images.cdn1.buscalibre.com/fit-in/180x180/20/82/2082a4e5a59dcf7e8531feb8e488c30b.jpg",
        titulo: "Primer Curso de Contabilidad. Incluye Software y Resolucion de Ejercicios",
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
