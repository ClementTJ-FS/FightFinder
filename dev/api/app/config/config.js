const fs = require('fs');

module.exports = {
  development: {
    username: 'postgres',
    password: 'postgrespw',
    database: 'postgres-mqJP',
    host: '127.0.0.1',
    port: '49153',
    dialect: 'postgres',
    seedStorage: 'sequelize',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seedStorage: 'sequelize',
    ssl: {
      rejectUnauthorized: true,
      ca: fs.readFileSync(path.join(__dirname, './files/ca.pem')).toString(),
    },
  },
  staging: {
    use_env_variable: 'DATABASE_URL',
  },
};
