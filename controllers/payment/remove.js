const PaymentService = require('../../services/payment');
const rescue = require('../../utils/rescue');

module.exports = rescue(async (req, res) => { 
  const { id } = req.params;
  const result = await PaymentService.remove(id);
  res.status(200).json(result);
});
