const PaymentService = require('../../services/payment');
const rescue = require('../../utils/rescue');

module.exports = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await PaymentService.update(id, { status: 'CANCELADO' });
  res.status(204).json(result);
});
