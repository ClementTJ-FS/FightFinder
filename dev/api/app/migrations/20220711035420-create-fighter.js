'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Fighters', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      height: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      reach: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      stance: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      record: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      isChamp: {
        type: Sequelize.BOOLEAN,
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      img: {
        type: Sequelize.STRING,
      },
      FightId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Fights',
          key: 'id',
        },
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
    await queryInterface.dropTable('Fighters');
  },
};
