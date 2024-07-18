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
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  staging: {
    use_env_variable: 'DATABASE_URL',
  },
};
