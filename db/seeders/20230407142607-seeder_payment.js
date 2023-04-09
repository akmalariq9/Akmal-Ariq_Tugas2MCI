'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
   await queryInterface.bulkInsert('payments', [
    {
      payment_time : "2023-11-29 11:08:12",
      amount : 15000,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      payment_time : "2023-11-29 13:09:11",
      amount : 20000,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      payment_time : "2023-11-30 18:10:10",
      amount : 15000,
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
