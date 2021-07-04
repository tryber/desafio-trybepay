const PaymentService = require('../../services/payment');
const rescue = require('../../utils/rescue');

module.exports = rescue(async (req, res) => {
  const result = await PaymentService.create(req.body);
  res.status(201).json(result);
});
