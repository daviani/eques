'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Discs', [{
      name: 'À l\'heure du crépuscule',
      type: 'FULL_LENGTH',
      release_date: new Date('2018-03-30'),
      format: 'CD',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jehanne',
      type: 'FULL_LENGTH',
      release_date: new Date('2020-04-29'),
      format: 'CD',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
