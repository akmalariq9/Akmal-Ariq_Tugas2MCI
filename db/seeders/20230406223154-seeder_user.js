'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
     await queryInterface.bulkInsert('users', [
      {
        username: "akmalariq9",
        name: "Akmal Ariq",
        email: "akmalariq009@gmail.com",
        phone_number: "082219216316",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "AndikaLaksana46",
        name: "Andika Laksana Putra",
        email: "andikalaksana@gmail.com",
        phone_number: "082219211116",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "RifqiFadhillah8888",
        name: "Muhammad Rifqi Fadhillah",
        email: "Gwehrifqiganteng@gmail.com",
        phone_number: "082218212116",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Dewangga3d",
        name: "Dewangga Dika Darmawan",
        email: "Dedidatampan99@gmail.com",
        phone_number: "082219218981",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Alfaaaaaa0",
        name: "Alfa Fakhrur Rizal Zaini",
        email: "alfaaa0999@gmail.com",
        phone_number: "081219211116",
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
