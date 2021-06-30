const PaymentModel = require('../persist/paymentDao');
const PaymentSchema = require('../schema/payment');

// const update = (paymentData) => PaymentModel.update(paymentData);

const create = async (newPayment) => {
  const { error } = PaymentSchema.validate(newPayment);
  console.log(error);
  if (error) throw error;
  return PaymentModel.create(newPayment);
};

const findAll = () => PaymentModel.findAll();

const findById = (id) => PaymentModel.findById(id);

module.exports = {
  create,
  findAll,
  findById,
};
