'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Production extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const Band = models['Band']
      const Disc = models['Disc']
      Band.belongsToMany(Disc, { through: 'Production' });
      Disc.belongsToMany(Band, { through: 'Production' });
    }
  };
  Production.init({
    bandId: DataTypes.INTEGER,
    discId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Production',
  });
  return Production;
};