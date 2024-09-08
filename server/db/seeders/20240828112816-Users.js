"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Alice Johnson",
          email: "alice.johnson@example.com",
          password: "P@ssw0rd123",
        },
        {
          name: "Bob Smith",
          email: "bob.smith@example.com",
          password: "S3cretP@ss",
        },
        {
          name: "Charlie Brown",
          email: "charlie.brown@example.com",
          password: "Ch@rlie2024",
        },
        {
          name: "Diana Prince",
          email: "diana.prince@example.com",
          password: "WonderW0man!",
        },
        {
          name: "Eve Adams",
          email: "eve.adams@example.com",
          password: "Eve1234Pass",
        },
        {
          name: "Frank Castle",
          email: "frank.castle@example.com",
          password: "Pun1sh3r2024",
        },
        {
          name: "Grace Lee",
          email: "grace.lee@example.com",
          password: "Gr@c3L33!",
        },
        {
          name: "Henry Ford",
          email: "henry.ford@example.com",
          password: "H3nryF0rd!",
        },
        {
          name: "Ivy Clark",
          email: "ivy.clark@example.com",
          password: "1vyC!ark",
        },
        {
          name: "Lena Golovach",
          email: "lena.golovach@example.com",
          password: "Lena2024Pass",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
