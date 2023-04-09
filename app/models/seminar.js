'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seminar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //seminar.hasMany(models.seat, { foreignKey: 'seminar_id' });
      //seminar.hasMany(models.speaker, { foreignKey: 'seminar_id' });
      seminar.belongsTo(models.speaker, { foreignKey: 'speaker_id' });
      seminar.hasMany(models.registration, { foreignKey: 'seminar_id' });
    }
  }
  seminar.init({
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    time: DataTypes.DATE,
    duration: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'seminar',
  });
  return seminar;
};