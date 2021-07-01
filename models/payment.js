module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    paymentMethod: DataTypes.STRING,
    value: DataTypes.NUMBER,
    currency: DataTypes.STRING,
    status: DataTypes.STRING,
    data: DataTypes.DATE,
    description: DataTypes.STRING,
  }, {
    tableName: 'payments',
    createdAt: 'data',
    updatedAt: false,
    underscored: true,
  });
  
  return Payment;
};
