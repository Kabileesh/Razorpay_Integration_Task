const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { LOAD_SUCCESS } = require("../../Utils/constants");
const razorpayPaymentService = require("../services/razorpayPaymentService");

const razorpayPaymentController = asyncErrorHandler(async (req, res) => {
  const { amount, currency, receipt } = req.body;
  const razorpayOrder = await razorpayPaymentService(amount, currency, receipt);
  res
    .status(LOAD_SUCCESS.status)
    .send({ order: razorpayOrder, message: LOAD_SUCCESS.message });
});

module.exports = razorpayPaymentController;
