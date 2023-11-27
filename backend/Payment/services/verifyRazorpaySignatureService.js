const cypto = require("crypto-js");
const Order = require("../model/orderModel");
require("dotenv").config();

const verifyRazorSignatureService = async (
  razorpay_payment_id,
  razorpay_order_id,
  razorpay_signature
) => {
  const hmac = crypto.createHmac("sha256", process.env.MY_KEY_SECRET);
  const orderInfo = await Order.find({ order_id: razorpay_order_id });
  if (orderInfo) {
    hmac.update(orderInfo.order_id + "|" + razorpay_payment_id);
    const generatedSignature = hmac.digest("hex");
    return generatedSignature === razorpay_signature;
  }
  return false;
};

module.exports = verifyRazorSignatureService;
