'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class speaker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      speaker.hasMany(models.seminar, { foreignKey: 'speaker_id' });
      //speaker.belongsTo(models.seminar, { foreignKey: 'seminar_id' });
    }
  }
  speaker.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'speaker',
  });
  return speaker;
};