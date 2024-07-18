'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class resetToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      resetToken.belongsTo(models.User);
    }
  }
  resetToken.init(
    {
      token: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'resetToken',
    }
  );
  return resetToken;
};
