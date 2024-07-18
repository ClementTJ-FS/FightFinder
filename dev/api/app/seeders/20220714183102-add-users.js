'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 'a7752436-d627-4ce9-a752-ed100246f4a0',
          username: 'user1',
          password:
            '$2b$10$laduHiiRwvBbgHOV6aTeM.PgS1q.VVwzS0Kxbc2Ggv9CsvMv25aiG',
          name: 'TJ',
          email: 'enshoku@gmail.com',
          favSport: 'mma',
          createdAt: new Date(),
          updatedAt: new Date(),
          resetToken: null,
          resetTokenExpiry: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {
      [Sequelize.Op.or]: [
        {
          id: 'a7752436-d627-4ce9-a752-ed100246f4a0',
        },
      ],
    });
  },
};
