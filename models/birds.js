'use strict';
const {
  Model, HasMany
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
      Birds.hasMany(models.Meeting, {foreignKey: "bird_id"});
      Birds.hasMany(models.BirdsPictures, {foreignKey: "bird_id"});
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