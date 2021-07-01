const PaymentService = require('../../services/payment');
const rescue = require('../../utils/rescue');

module.exports = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await PaymentService.update(id, { status: 'CONFIRMADO' });
  res.status(200).json(result);
});
