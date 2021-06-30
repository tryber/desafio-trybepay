const PaymentService = require('../../services/payment');
const rescue = require('../../utils/rescue');

module.exports = rescue(async (_req, res) => { 
  const result = await PaymentService.findAll();
  res.status(200).json(result);
});
