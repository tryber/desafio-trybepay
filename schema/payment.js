const joi = require('joi');

module.exports = joi.object({
  paymentMethod: joi.string().required(),
  value: joi.number().required(),
  currency: joi.string().length(3).required(),
  description: joi.string(),
  status: joi.string(),
});
