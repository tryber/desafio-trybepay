const PaymentModel = require('../persist/paymentDao');
const PaymentSchema = require('../schema/payment');

const create = async (newPayment) => {
  const { error } = PaymentSchema.validate(newPayment);
  if (error) throw error;
  return PaymentModel.create(newPayment);
};

const update = async (paymentId, paymentData) => {
  const { error } = PaymentSchema
    .fork(['paymentMethod', 'value', 'currency'], (schema) => schema.optional())
    .validate(paymentData);

  if (error) throw error;

  return PaymentModel.update(paymentId, paymentData);
};

const findAll = () => PaymentModel.findAll();

const findById = (id) => PaymentModel.findById(id);

const remove = (id) => PaymentModel.remove(id);

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove,
};
