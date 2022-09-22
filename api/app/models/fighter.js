'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fighter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fighter.belongsTo(models.Fight);
    }
  }
  Fighter.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reach: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      stance: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      record: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isChamp: DataTypes.BOOLEAN,
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: DataTypes.STRING,
      FightId: {
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: 'Fighter',
    }
  );
  return Fighter;
};
