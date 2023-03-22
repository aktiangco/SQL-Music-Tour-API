'use strict';

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
    await queryInterface.bulkInsert('bands', [{
       band_id: 4,
       name: 'Linkin Park',
       genre:'Rock Band',
       members: 7
    }, {
      band_id: 5, 
      name: 'Queen',
      genre:'R&B / Soul',
      members: 4 
      }, {
      band_id: 6,
      name: 'AC/DC',
      genre:'Rock B',
      members: 6 
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
