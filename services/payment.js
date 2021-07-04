const { Payment } = require('../models');
const PaymentSchema = require('../schema/payment');

const create = async (newPayment) => {
  const { error } = PaymentSchema.validate(newPayment);
  if (error) throw error;
  return Payment.create(newPayment);
};

const update = async (paymentId, paymentData) => {
  const { error } = PaymentSchema
    .fork(['paymentMethod', 'value', 'currency'], (schema) => schema.optional())
    .validate(paymentData);

  if (error) throw error;

  const [affectedRows] = await Payment.update(paymentData, { where: { id: paymentId } });
  if (!affectedRows) throw new Error(`Failed to update payment with id ${paymentId}`);
  return { message: `Payment ${paymentId} updated` };
};

const findAll = () => Payment.findAll();

const findById = (id) => Payment.findOne({ where: { id } });

const remove = async (id) => {
  const destroyedRowsNum = await Payment.destroy({ where: { id } });
  if (!destroyedRowsNum) throw new Error(`Failed to remove payment with id ${id}`);
  return { message: `Payment ${id} removed` };
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove,
};
