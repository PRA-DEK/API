'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Birds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      public_name: {
        type: Sequelize.STRING
      },
      scientific_name: {
        type: Sequelize.STRING
      },
      family: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.FLOAT
      },
      weigth: {
        type: Sequelize.FLOAT
      },
      description: {
        type: Sequelize.TEXT
      },
      main_picture_url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Birds');
  }
};