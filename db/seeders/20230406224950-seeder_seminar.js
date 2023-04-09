'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
   await queryInterface.bulkInsert('seminars', [
    {
      title: "Backend Tutorial #01",
      location: "Gedung Graha Sandiya",
      time: "2023-12-11 13:10:00",
      duration: 2,
      speaker_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Frontend Tutorial #02",
      location: "Gedung Wisma Ahmad Yani",
      time: "2023-12-13 14:19:20",
      duration: 3,
      speaker_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Roadmap Fullstack Developer",
      location: "Gedung Handayani",
      time: "2023-12-14 17:18:00",
      duration: 1,
      speaker_id: 3,
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
