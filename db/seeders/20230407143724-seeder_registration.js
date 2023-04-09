'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
   await queryInterface.bulkInsert('registrations', [
    {
      registration_time : "2023-12-01 14:15:13",
      paid_status : 1,
      payment_id : 1,
      user_id : 1,
      seminar_id : 1,
      seat_id : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      registration_time : "2023-11-30 11:12:19",
      paid_status : 1,
      payment_id : 2,
      user_id : 2,
      seminar_id : 2,
      seat_id : 2,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      registration_time : "2023-12-01 20:11:01",
      paid_status : 1,
      payment_id : 3,
      user_id : 3,
      seminar_id : 3,
      seat_id : 3,
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
