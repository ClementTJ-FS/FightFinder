'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Fights', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      EventId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: 'Events',
          key: 'id',
        },
      },
      isTitle: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      belts: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.INTEGER,
      },
      rounds: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      weightClass: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Fights');
  },
};
