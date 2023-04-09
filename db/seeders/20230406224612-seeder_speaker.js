'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
   await queryInterface.bulkInsert('speakers', [
    {
      name: "Sandhika Galih",
      email: "SandhikaGalih01@gmail.com",
      phone_number: "082219272211",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Dea Afrizal",
      email: "Deaafrizaal@gmail.com",
      phone_number: "081119272211",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Bilqis Amaliah",
      email: "Bilqisamaliah@gmail.com",
      phone_number: "082219291211",
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
