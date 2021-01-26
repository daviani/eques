'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Band.init({
    name: DataTypes.STRING,
    country_of_origin: DataTypes.STRING,
    genre: DataTypes.STRING,
    status: DataTypes.STRING,
    formed_in: DataTypes.DATE,
    describe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};