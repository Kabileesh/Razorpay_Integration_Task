const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { CREATED_SUCCESS } = require("../../Utils/constants");
const placeOrderService = require("../services/placeOrderService");

const placeOrderController = asyncErrorHandler(async (req, res) => {
  const { customerMail, items, amount } = req.body;

  const placedOrder = await placeOrderService(customerMail, items, amount);

  res
    .status(CREATED_SUCCESS.status)
    .send({ orderDetails: placedOrder, message: CREATED_SUCCESS.message });
});

module.exports = placeOrderController;
