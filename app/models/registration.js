'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class registration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      registration.belongsTo(models.payment, { foreignKey: 'payment_id' });
      registration.belongsTo(models.user, { foreignKey: 'user_id' });
      registration.belongsTo(models.seminar, { foreignKey: 'seminar_id' });
      registration.belongsTo(models.seat, { foreignKey: 'seat_id' });
    }
  }
  registration.init({
    registration_time: DataTypes.DATE,
    paid_status: DataTypes.BOOLEAN,
    payment_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    seminar_id: DataTypes.INTEGER,
    seat_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'registration',
  });
  return registration;
};