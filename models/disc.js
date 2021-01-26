'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Disc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Disc.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    release_date: DataTypes.DATE,
    format: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Disc',
  });
  return Disc;
};