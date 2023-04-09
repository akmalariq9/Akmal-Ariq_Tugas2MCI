'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      payment.hasMany(models.registration, { foreignKey: 'payment_id' });

    }
  }
  payment.init({
    payment_time: DataTypes.DATE,
    amount: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'payment',
  });
  return payment;
};