"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Characters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "Users",
        },
        onDelete: "cascade",
      },
      universeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "Universes",
        },
        onDelete: "cascade",
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      image: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      info: {
        type: Sequelize.TEXT,
      },
      rare: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      price: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Characters");
  },
};
