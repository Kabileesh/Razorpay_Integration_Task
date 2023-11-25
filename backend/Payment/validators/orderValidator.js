const Joi = require("joi");

const orderValidator = Joi.object().keys({
  customerMail: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "co", "org", "in", "ac"] },
    }),
  items: Joi.array().items(
    Joi.object({
      itemName: Joi.string(),
      quantity: Joi.number(),
      price: Joi.number(),
    })
  ),
  amount: Joi.number().required(),
});

module.exports = orderValidator;
