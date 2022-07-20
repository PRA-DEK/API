'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Birds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Birds.init({
    public_name: DataTypes.STRING,
    scientific_name: DataTypes.STRING,
    family: DataTypes.STRING,
    size: DataTypes.FLOAT,
    weigth: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    main_picture_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Birds',
  });
  return Birds;
};