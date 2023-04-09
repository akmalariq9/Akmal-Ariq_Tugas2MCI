'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
   await queryInterface.bulkInsert('seats', [
    {
      seat_number : "A10",
      seminar_id : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      seat_number : "A11",
      seminar_id : 2,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      seat_number : "B16",
      seminar_id : 3,
      createdAt : new Date(),
      updatedAt : new Date()
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
