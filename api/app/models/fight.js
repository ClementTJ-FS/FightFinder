'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fight.belongsTo(models.Event);
      Fight.hasMany(models.Fighter);
    }
  }
  Fight.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      EventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isTitle: DataTypes.BOOLEAN,
      belts: DataTypes.STRING,
      type: DataTypes.INTEGER,
      weightClass: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rounds: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Fight',
    }
  );
  return Fight;
};
