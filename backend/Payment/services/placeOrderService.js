const globalValidator = require("../../Utils/globalValidator");
const placeOrder = require("../db/placeOrder");
const orderValidator = require("../validators/orderValidator");

const placeOrderService = async (customerMail, items, amount) => {
  if ((globalValidator(orderValidator), { customerMail, items, amount })) {
    const placedOrder = await placeOrder(customerMail, items, amount);
    return placedOrder;
  }
};

module.exports = placeOrderService;
