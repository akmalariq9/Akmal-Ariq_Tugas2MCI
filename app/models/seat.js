'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      seat.belongsTo(models.seminar, { foreignKey: 'seminar_id' });
      seat.hasMany(models.registration, { foreignKey: 'seat_id' });
    }
  }
  seat.init({
    seat_number: DataTypes.STRING,
    seminar_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'seat',
  });
  return seat;
};