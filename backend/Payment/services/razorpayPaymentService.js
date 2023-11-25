const Razorpay = require("razorpay");
const { promisify } = require("util");
const CustomError = require("../../Utils/customError");
const { UNAUTHORIZED } = require("../../Utils/constants");
const updateOrderId = require("../db/updateOrderId");

const razorpayPaymentService = async (amount, currency, receipt) => {
  const instance = new Razorpay({
    key_id: process.env.MY_KEY_ID,
    key_secret: process.env.MY_KEY_SECRET,
  });

  const createOrderAsync = promisify(instance.orders.create).bind(instance);

  const options = {
    amount,
    currency,
    receipt,
  };

  try {
    const orderDetails = await createOrderAsync(options);
    await updateOrderId(orderDetails);
    return orderDetails;
  } catch (err) {
    throw new CustomError(UNAUTHORIZED.message, UNAUTHORIZED.status);
  }
};

module.exports = razorpayPaymentService;
