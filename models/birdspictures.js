'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BirdsPictures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BirdsPictures.init({
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BirdsPictures',
  });
  return BirdsPictures;
};