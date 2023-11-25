const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { LOAD_SUCCESS } = require("../../Utils/constants");
const verifyRazorSignatureService = require("../services/verifyRazorpaySignatureService");

const verifyRazorSignatureController = asyncErrorHandler(async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const verificationStatus = await verifyRazorSignatureService(
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature
  );

  res.status(LOAD_SUCCESS.status).send(verificationStatus);
});

module.exports = verifyRazorSignatureController;
